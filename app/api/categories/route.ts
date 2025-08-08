import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/data/products';

export async function GET() {
  try {
    const categories = getCategories();

    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}