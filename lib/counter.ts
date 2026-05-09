// Free, no-database, no-signup counter using counterapi.dev.
// If the network call fails, returns a sensible fallback so the UI never breaks.

const WORKSPACE = process.env.COUNTER_WORKSPACE ?? 'career-compass';
const KEY = process.env.COUNTER_KEY ?? 'reports';
const FALLBACK = 1; // shown only if API is unreachable AND we have no real number

// Trailing slash matters — without it the API returns a 301 redirect.
const BASE = `https://api.counterapi.dev/v1/${WORKSPACE}/${KEY}/`;

export async function getCount(): Promise<number> {
  try {
    const res = await fetch(BASE, { next: { revalidate: 60 } });
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    return typeof data.count === 'number' ? data.count : FALLBACK;
  } catch {
    return FALLBACK;
  }
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
