'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  initial: number;
  /** Polling interval in ms. Default 8s. */
  intervalMs?: number;
  /** Shown if `initial` is invalid (NaN / 0 / negative). */
  fallback?: string;
}

const formatter = new Intl.NumberFormat('en-IN');

const safe = (n: unknown): number => {
  const v = typeof n === 'number' && Number.isFinite(n) && n > 0 ? n : 8000;
  return v;
};

export default function LiveCounter({ initial, intervalMs = 8000, fallback = '8,000+' }: Props) {
  const safeInitial = safe(initial);
  const [count, setCount] = useState<number>(safeInitial);
  const [bumped, setBumped] = useState(false);
  const lastSeen = useRef<number>(safeInitial);

  useEffect(() => {
    let alive = true;

    const tick = async () => {
      try {
        const res = await fetch('/api/count', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!alive) return;
        const next = safe(data?.count);
        if (next !== lastSeen.current) {
          lastSeen.current = next;
          setCount(next);
          setBumped(true);
          setTimeout(() => alive && setBumped(false), 700);
        }
      } catch {
        /* network blip — ignore */
      }
    };

    tick();
    const id = setInterval(tick, intervalMs);
    const onFocus = () => tick();
    const onVis = () => document.visibilityState === 'visible' && tick();
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      alive = false;
      clearInterval(id);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [intervalMs]);

  // If for some reason the count is invalid, render a static fallback rather than nothing.
  const display = Number.isFinite(count) && count > 0 ? formatter.format(count) : fallback;

  return (
    <span
      className={
        'inline-block tabular-nums transition-transform duration-300 ' +
        (bumped ? 'scale-110' : 'scale-100')
      }
    >
      {display}
    </span>
  );
}
