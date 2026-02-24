import { baseUrl } from "@/constants";
import Image from "next/image";
import BackButton from "@/components/backButton";
import { FaArrowRightLong } from "react-icons/fa6";
import './page.css';

export default async function TrimsPage({
    params
}: {
    params: Promise<{ brandSlug: string, modelSlug: string, genSlug: string }>
}) {
    const { brandSlug, modelSlug, genSlug } = await params;
    let generationData = null;
    let modelName = "";

    try {
        const res = await fetch(`${baseUrl}/api/cars?brand=${brandSlug}`);
        const brandData = await res.json();
        const model = brandData.models.find((m: any) => m.slug === modelSlug);
        modelName = model?.name || "";
        generationData = model?.generations.find((g: any) => g.code === genSlug);
    } catch (e) {
        console.error(e);
    }

    if (!generationData) return null;

    return (
        <main className="catalog-container">
            <BackButton />

            <header className="catalog-header">
                <div>
                    <span style={{ color: '#e30613', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px' }}>
                        {modelName} / {genSlug}
                    </span>
                    <h1>Select Variant</h1>
                </div>
                <div className="text-right text-xs font-bold">
                    <span className="text-zinc-400">TOTAL:</span> {generationData.trims.length} VERSIONS
                </div>
            </header>

            <div className="catalog-grid">
                {generationData.trims.map((trim: any) => (

                    <a
                        key={trim.name}
                        href={`/${brandSlug}/${modelSlug}/${genSlug}/${trim.name.toLowerCase().replace(/ /g, '-')}`}
                        className="car-card"
                    >
                        <div className="car-image-box">
                            <Image
                                src={trim.image_url || generationData.image_url}
                                alt={trim.name}
                                width={600}
                                height={338}
                                className="object-cover"
                            />
                            <span className="badge-new">{trim.year}</span>
                        </div>

                        <div className="car-info">
                            <span className="price">
                                {trim.price_brl ? `R$${trim.price_brl.toLocaleString()}` : 'Price N/A'}
                            </span>
                            <span className="car-title">{trim.name}</span>

                            <div className="car-footer">
                                <span>VIEW FULL SPECS</span>
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