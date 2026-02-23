import Image from "next/image";
import './page.css'

interface BrandSummary {
  slug: string;
  name: string;
  country: string;
  founded: number;
  logo_url: string;
  modelCount: number;
}


export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  let brands: BrandSummary[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/cars`, {
      next: { revalidate: 3600 }
    });

    if (!res.ok) throw new Error('Falha ao carregar marcas');

    brands = await res.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="container">
      <header className="header">
        <h1>RR&apos;s Dealership</h1>
      </header>

      <div className="brand-grid">
        {brands.map((brand) => (
          <a key={brand.slug} href={`/${brand.slug}`} className="brand-card">
            <div className="logo-box">
              <Image height={480} width={480} src={brand.logo_url} alt={brand.name} />
            </div>
            <div className="brand-info">
              <span className="brand-name">{brand.name}</span>
              <span className="brand-stats">{brand.modelCount} Models Available</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}