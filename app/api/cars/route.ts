import { NextResponse } from 'next/server';
import carData from '@/data/carsjson/carlist.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brandQuery = searchParams.get('brand')?.toLowerCase();

  // If a brand query is provided, find the specific brand and return its details
  if (brandQuery) {
    const brandResults = carData.brands.find(b => b.slug.toLowerCase() === brandQuery);

    if (!brandResults) {
      return NextResponse.json({ message: "Brand dont found" }, { status: 404 });
    }

    return NextResponse.json(brandResults);
  }

  // If no brand query is provided, return a summary of all brands with their model counts
  const brandsSummary = carData.brands.map(brand => ({
    slug: brand.slug,
    name: brand.name,
    country: brand.country,
    founded: brand.founded,
    logo_url: brand.logo_url,
    modelCount: brand.models.length 
  }));

  return NextResponse.json(brandsSummary);
}