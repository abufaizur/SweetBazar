import { NextRequest, NextResponse } from 'next/server';
import { getProducts, getFeaturedProducts, getProductsByCategory, searchProducts } from '@/lib/data/products';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const search = searchParams.get('search');
  const limit = searchParams.get('limit');

  try {
    let products = getProducts();

    if (featured === 'true') {
      products = getFeaturedProducts();
    } else if (category) {
      products = getProductsByCategory(category);
    } else if (search) {
      products = searchProducts(search);
    }

    if (limit) {
      products = products.slice(0, parseInt(limit));
    }

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}