import { NextResponse } from 'next/server';
import { getDocTree } from '@/lib/docs';

export async function GET() {
  try {
    const tree = getDocTree();
    const hasAI = !!process.env.OPENAI_API_KEY;
    return NextResponse.json({ tree, hasAI });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doc tree' }, { status: 500 });
  }
}
