import { baseUrl } from "@/constants";
import { modelSummary } from "@/types/types";
import './page.css'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6"
import BackButton from "@/components/backButton";

export default async function BrandPage({ params }: { params: { brandSlug: string } }) {
    let models: modelSummary[] = [];
    let brandName = "";

    try {
        const res = await fetch(`${baseUrl}/api/cars?brand=${params.brandSlug}`, {
            next: { revalidate: 3600 }
        });
        const brandData = await res.json();
        models = brandData.models;
        brandName = brandData.name;
    } catch (error) {
        console.error(error);
    }

    return (
        <main className="catalog-container">
            {/* Botão de Voltar posicionado acima do Header */}
            <BackButton />

            <header className="catalog-header">
                <div>
                    <span style={{color: '#e30613', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '2px'}}>SHOWROOM</span>
                    <h1>{brandName}</h1>
                </div>
                <div className="text-right text-xs font-bold">
                    <span className="text-zinc-400">TOTAL:</span> {models.length} MODELS
                </div>
            </header>

            <div className="catalog-grid">
                {models.map((model) => (
                    <a key={model.slug} href={`/${params.brandSlug}/${model.slug}`} className="car-card">
                        <div className="car-image-box">
                            <Image 
                                src={model.image_url} 
                                alt={model.name} 
                                width={480} 
                                height={480} 
                                className="object-cover"
                            />
                            {model.name.includes("911") && <span className="badge-new">LEGEND</span>}
                        </div>
                        
                        <div className="car-info">
                            <span className="generations">
                                {model.generations.length} Generation{model.generations.length > 1 ? 's' : ''} available
                            </span>
                            <span className="car-title">{model.name}</span>
                            
                            <div className="car-footer">
                                <span>VIEW DETAILS</span>
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