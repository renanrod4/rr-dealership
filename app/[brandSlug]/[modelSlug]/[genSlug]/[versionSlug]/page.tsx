import { baseUrl } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import './page.css';
import BackButton from '../../../../../components/backButton';

export default async function VersionPage({ params }: { params: Promise<{ brandSlug: string, modelSlug: string, genSlug: string, versionSlug: string }> }) {
    const { brandSlug, modelSlug, genSlug, versionSlug } = await params;

    const res = await fetch(`${baseUrl}/api/cars?brand=${brandSlug}`, { cache: 'no-store' });
    const brandData = await res.json();
    const model = brandData.models.find((m: any) => m.slug === modelSlug);
    const generation = model?.generations.find((g: any) => g.code === genSlug);
    const trim = generation?.trims.find((t: any) => t.name.toLowerCase().replace(/ /g, '-') === versionSlug || t.slug === versionSlug);

    if (!trim) return <div>Carro não encontrado</div>;

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL', maximumFractionDigits: 0
    });

    return (
        <main className="detail-container">
            <header className="page-header">
                <BackButton />
                <div className="showroom-branding">
                    <span className="showroom-tag">RR's Dealership</span>
                    <span className="showroom-name">SHOWROOM</span>
                </div>
            </header>
            <section className="hero-section-framed">
                <div className="model-branding-side">
                    <span className="brand-series">{generation.code} — {trim.year}</span>
                    <h1 className="trim-title">
                        <span className="brand-label">{brandSlug}</span>
                        <span className="model-full-name">{model.name} {trim.name}</span>
                    </h1>
                    <div className="title-underline"></div>
                </div>

                <div className="image-frame-wrapper">
                    <div className="custom-racing-border">
                        <Image
                            src={trim.image_url || generation.image_url}
                            alt={trim.name}
                            width={1200}
                            height={800}
                            className="hero-image-framed"
                            priority
                        />
                    </div>
                </div>
            </section>
            <footer className="showroom-footer">
                <div className="footer-line" />

                <div className="specs-grid-main">
                    <div className="spec-group">
                        <div className="spec-header">
                            <span className="spec-dot" />
                            <span className="spec-label">ENGINE & ASPIRATION</span>
                        </div>
                        <span className="spec-value">{trim.specs.engine} {trim.specs.engine_layout}</span>
                        <span className="spec-subvalue">{trim.specs.aspiration}</span>
                    </div>

                    <div className="spec-group">
                        <div className="spec-header">
                            <span className="spec-dot" />
                            <span className="spec-label">OUTPUT</span>
                        </div>
                        <span className="spec-value">{trim.specs.bhp} <small>HP</small></span>
                        <span className="spec-subvalue">{trim.specs.torque_nm} NM TORQUE</span>
                        <span className="spec-subvalue">0-100km/h in {trim.specs.zero_to_100_s}s</span>
                    </div>

                    <div className="spec-group">
                        <div className="spec-header">
                            <span className="spec-dot" />
                            <span className="spec-label">CHASSIS</span>
                        </div>
                        <span className="spec-value">{trim.specs.drivetrain}</span>
                        <span className="spec-subvalue">{trim.specs.weight_kg} KG</span> 
                    </div>

                    <div className="spec-group price-highlight">
                        <div className="spec-header">
                            <span className="spec-dot" />
                            <span className="spec-label">PRICE</span>
                        </div>
                        <span className="spec-value">{formatter.format(trim.price_brl)}</span>
                        <span className="spec-subvalue">BRL</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}