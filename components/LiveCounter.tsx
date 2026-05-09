'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  initial: number;
  /** Polling interval in ms. Default 8s. */
  intervalMs?: number;
}

const formatter = new Intl.NumberFormat('en-IN');

export default function LiveCounter({ initial, intervalMs = 8000 }: Props) {
  const [count, setCount] = useState(initial);
  const [bumped, setBumped] = useState(false);
  const lastSeen = useRef(initial);

  useEffect(() => {
    let alive = true;

    const tick = async () => {
      try {
        const res = await fetch('/api/count', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (!alive || typeof data.count !== 'number') return;
        if (data.count !== lastSeen.current) {
          lastSeen.current = data.count;
          setCount(data.count);
          setBumped(true);
          setTimeout(() => alive && setBumped(false), 700);
        }
      } catch {
        /* network blip — ignore */
      }
    };

    // Refresh on mount, on interval, on tab focus, and on tab visibility regain.
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

  return (
    <span
      className={
        'inline-block tabular-nums transition-transform duration-300 ' +
        (bumped ? 'scale-110' : 'scale-100')
      }
    >
      {formatter.format(count)}
    </span>
  );
}
