import { NextResponse } from 'next/server';
import { getCountLive } from '@/lib/counter';

// Always run fresh — never cached. Used by the live counter on the home page.
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const count = await getCountLive();
  return NextResponse.json(
    { count },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
}
