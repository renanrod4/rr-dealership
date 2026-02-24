import Image from "next/image";
import './page.css'
import { baseUrl } from "@/constants";
import { BrandSummary } from "@/types/types";

export default async function Home() {

  let brands: BrandSummary[] = [];

  try {
    const res = await fetch(`${baseUrl}/api/cars`, {
      next: { revalidate: 30 }
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