# RR's Dealership

RR's Dealership is a modern automotive digital showroom built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Leveraging the Next.js App Router and a deeply nested, structured local JSON catalog, the application delivers a highly responsive, hierarchical browsing experience (Brands -> Models -> Generations -> Trims) with complete spec sheets. Designed as a superior alternative to traditional flat-list automotive catalogs, the project combines advanced dynamic routing, strong UI/UX design patterns, and scalable data presentation.

## Overview

This project was created to offer a polished digital showroom where visitors can explore available vehicle options in an intuitive way. The experience is focused on clarity, visual presentation, and easy navigation through the catalog.

It was also created as a response to the controversial strategy seen in Gran Turismo-related organization decisions, where large numbers of cars were removed instead of improving the way the catalog was structured. This project aims to show a better alternative: organizing content thoughtfully and making it easier for users to discover and enjoy it.

## Key Features

- Dynamic browsing of vehicle brands and models
- Structured navigation through brand, model, generation, and version levels
- Responsive and modern interface
- Fast rendering with Next.js App Router
- Data-driven content based on a local JSON catalog

## Special Value

The main strength of this project is its organized and scalable catalog structure. Instead of presenting vehicles as a simple list, the site creates a hierarchical experience that makes it easier for users to discover the available options in a more immersive and professional way.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- ESLint
- Tailwind CSS

## Structure Example

```json
{
	"brands": [
		{
			"slug": "porsche",
			"name": "Porsche",
			"country": "Germany",
			"logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Newporschecrest.jpg/500px-Newporschecrest.jpg",
			"founded": 1931,
			"models": [
				{
					"slug": "911",
					"name": "911",
					"image_url": "https://upload.wikimedia.org/wikipedia/commons/2/25/Porsche_992_Turbo_S_1X7A6046_%28cropped%29.jpg",
					"generations": [
						{
							"code": "992",
							"image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Porsche_992_GT3_RS_DSC_9055.jpg/960px-Porsche_992_GT3_RS_DSC_9055.jpg",
							"trims": [
								{
									"name": "GT3 RS",
									"year": 2023,
									"image_url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Porsche_992_GT3_RS_DSC_9055.jpg",
									"price_brl": 4200000,
									"specs": {
										"bhp": 518,
										"torque_nm": 465,
										"weight_kg": 1450,
										"zero_to_100_s": 3.2,
										"engine": "4.0L",
										"engine_layout": "Flat-6",
										"aspiration": "Naturally Aspirated",
										"drivetrain": "RWD"
									}
								}
							]
						}
					]
				}
			]
		}
	]
}
```

## Project Structure

```text
app/                 # Main pages and routing
components/         # Reusable UI components
data/                # Static catalog data
types/               # Shared TypeScript types
public/              # Static assets (if added later)
```

## Getting Started

1. Install dependencies:

    ```bash
    npm install
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open your browser and visit:
    ```text
    http://localhost:3000
    ```

## Future Plans

- Add more brands and vehicle models
- Improve search and filtering options
- Add multilingual support (English, Portuguese, German)
- Introduce advanced comparison features between vehicles
- Add favorites and saved listings

## Author

RR's Dealership is a modern web project focused on delivering a premium automotive browsing experience.
