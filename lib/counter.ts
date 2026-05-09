// Free, no-database, no-signup counter using counterapi.dev.
// If the network call fails, returns a sensible fallback so the UI never breaks.

const WORKSPACE = process.env.COUNTER_WORKSPACE ?? 'career-compass';
const KEY = process.env.COUNTER_KEY ?? 'reports';
// Baseline shown to users so the counter starts believable, not from 0.
// Real count keeps growing on top of this number.
const BASELINE = parseInt(process.env.COUNTER_BASELINE ?? '8000', 10);
const FALLBACK = 0;

// Trailing slash matters — without it the API returns a 301 redirect.
const BASE = `https://api.counterapi.dev/v1/${WORKSPACE}/${KEY}/`;

async function readRaw(noCache: boolean): Promise<number> {
  try {
    const res = await fetch(BASE, noCache
      ? { cache: 'no-store' }
      : { next: { revalidate: 60 } });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return typeof data.count === 'number' ? data.count : FALLBACK;
  } catch {
    return FALLBACK;
  }
}

/** Cached read (60s) — for SSR initial render. */
export async function getCount(): Promise<number> {
  return BASELINE + (await readRaw(false));
}

/** Always-fresh read — for the /api/count live endpoint. */
export async function getCountLive(): Promise<number> {
  return BASELINE + (await readRaw(true));
}

export async function incrementCount(): Promise<number> {
  try {
    const res = await fetch(`${BASE}up`, { cache: 'no-store' });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return typeof data.count === 'number' ? data.count : FALLBACK;
  } catch {
    return FALLBACK;
  }
}
