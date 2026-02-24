export interface BrandSummary {
  slug: string;
  name: string;
  country: string;
  founded: number;
  logo_url: string;
  modelCount: number;
}
export interface modelSummary {
  slug: string;
  name: string;
  image_url: string;
  generations: generationSummary[];
}
export interface generationSummary {
  code: string;
  image_url: string;
  trims: trimSummary[];

}
export interface trimSummary {
  name: string;
  year: number;
  price_brl: number;
  image_url?: string;
  specs: specSummary;
  
  
}
export interface specSummary {
  bhp: number
  torque_nm: number
  weight_kg: number
  zero_to_100_s: number
  engine: string
  engine_layout: string;
  aspiration: string;
  drivetrain: string;
}