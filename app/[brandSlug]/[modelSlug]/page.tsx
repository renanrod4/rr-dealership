import { baseUrl } from "@/constants";
import Image from "next/image";
import BackButton from "@/components/backButton";
import './page.css';
import { FaArrowRightLong } from "react-icons/fa6";

export default async function GenerationsPage({ 
    params 
}: { 
    params: Promise<{ brandSlug: string, modelSlug: string }> 
}) {
    const { brandSlug, modelSlug } = await params;

    let modelData = null;

    try {
        const res = await fetch(`${baseUrl}/api/cars?brand=${brandSlug}`);
        const brandData = await res.json();
        
        modelData = brandData.models.find((m: any) => m.slug === modelSlug);
    } catch (e) { 
        console.error(e); 
    }

    if (!modelData) return null;

    return (
        <main className="catalog-container">
            <BackButton />

            <header className="catalog-header">
                <div>
                    <span style={{ color: '#e30613', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>HISTORY</span>
                    <h1>{modelData.name} Series</h1>
                </div>
                <div className="text-right text-xs font-bold">
                    {modelData.generations.length} GENERATIONS
                </div>
            </header>

            <div className="catalog-grid">
                {modelData.generations.map((gen: any) => (
                    <a
                        key={gen.code}
                        href={`/${brandSlug}/${modelSlug}/${gen.code}`}
                        className="car-card"
                    >
                        <div className="car-image-box">
                            <Image
                                src={gen.image_url}
                                alt={gen.code}
                                width={480}
                                height={270}
                                className="object-cover"
                            />
                            <span className="badge-new">{gen.code}</span>
                        </div>

                        <div className="car-info">
                            <span className="generations">
                                {gen.trims.length} Version{gen.trims.length > 1 ? 's' : ''} available
                            </span>
                            <span className="car-title">Generation {gen.code}</span>

                            <div className="car-footer">
                                <span>EXPLORE GENERATION</span>
                                <span className="flex items-center justify-center">
                                    <FaArrowRightLong size={12} />
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </main>
    );
}