# Landscaping Splash Page Template

This repository provides a modern, high‑converting landing page template tailored for landscaping businesses. Built with **Next.js** and **Tailwind CSS**, it features bilingual support (English/Spanish), modular React components, and a responsive, search‑optimized layout.

## Key Features

- **World‑class design:** A bold hero section with a full‑screen background image; clear visual hierarchy; responsive layout that looks great on desktops and mobile devices.
- **High conversion potential:** Persuasive headlines and subheads, strong calls‑to‑action, and a dedicated section for client testimonials to build trust.
- **Structured marketing sections:** Pre‑built areas for showcasing services, value propositions, portfolio/gallery items, testimonials, and a call‑to‑action.
- **Bilingual ready:** All text is pulled from translation files (`src/data/translations.ts`), making it easy to add additional languages or modify copy. A language toggle is provided in the header.
- **SEO optimized:** Semantic HTML, meaningful metadata in `<Head>`, and clean URLs improve search engine visibility.
- **Customizable & extensible:** All company‑specific details (logo, services, testimonials, photos, contact details) are separated into data files or translation strings. You can add new sections or pages by following the existing component pattern.

## Getting Started

1. **Clone and install dependencies**

   ```bash
   git clone <this-repo-url>
   cd landing-template
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`. As you edit files, the page automatically reloads.

3. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

   This compiles the application for production and serves it locally. You can deploy the `out` directory to any static hosting provider (e.g. Vercel, Netlify).

## Customization Guide

### Company Branding

- **Logo & Company Name:** The `Header` component currently displays `GreenScape`. Replace this string or swap in your logo component. For example:

  ```tsx
  <Image src="/images/logo.svg" alt="Company Logo" width={120} height={40} />
  ```

- **Color palette:** Adjust the primary color in `tailwind.config.js` to match your brand. Update or extend the `colors` object under `theme.extend.colors`.

### Text & Copy

All translatable strings live in `src/data/translations.ts`. Update these values to match your business name, services, testimonials, and calls‑to‑action. If you add more languages, extend the `locales` array in `next.config.js` and add another language entry in the translations file.

### Images & Media

- Replace the files in `public/images/` with your own high‑quality photos:
  - `hero.png` – A compelling landscape photo that represents your services.
  - `portfolio1.png`, `portfolio2.png`, `portfolio3.png` – Before/after or project showcase images.
- For additional portfolio items, edit `src/data/portfolio.ts` to include new objects with `image` and `alt` fields.

### Services & Features

- Edit the `services.items` and `features.items` arrays in `src/data/translations.ts` to reflect your unique offerings and differentiators.
- To add more service cards, simply append objects to the `services.items` array. Each object should include a `title` and `description`.

### Testimonials

Replace the sample testimonials in `src/data/testimonials.ts` with real feedback from your clients. Each testimonial should include a `name` and a `feedback` string. The simple carousel cycles through the array; feel free to enhance the carousel UI or styling.

### Contact & Call‑to‑Action

- Update the email address and contact details in the `cta` section of the translations file. You can also link the CTA button to a dedicated contact page or form by replacing the `href` attribute in `CTA.tsx`.
- Modify the `footer` strings to include your company’s actual address, phone number, and email.

## How It Works

The application follows a straightforward structure:

- **`pages/_app.tsx`** wraps every page with an `I18nProvider` that supplies the current locale and translation function to the React component tree.
- **`pages/index.tsx`** composes the landing page by assembling modular components (Hero, Features, Services, Portfolio, Testimonials, CTA, Footer) and defines meta tags for SEO.
- **`components/`** contains individual, reusable sections with clear responsibilities. Each section pulls data from translation or data files, ensuring content is centralized.
- **`data/`** holds configuration and sample data (translations, testimonials, portfolio items). Editing these files customizes the site without touching component logic.
- **`lib/i18n.ts`** provides a simple translation context. It reads from `translations.ts` and exposes a `t()` function. The language toggle in the header changes the locale via Next.js routing.

## Conversion Strategy Notes

Creating a high‑converting landing page requires blending compelling content with strategic layout:

- **Hero section:** Immediately articulates the main value proposition with an inspiring headline and subhead. A strong call‑to‑action button invites visitors to take the next step (“Get a Free Quote”).
- **Features and services:** Highlighting differentiators and core offerings builds credibility and helps visitors understand why your business is the right choice. Use succinct copy and a clean grid layout to aid scanning.
- **Portfolio gallery:** Visual proof of prior work reassures potential clients. Before/after images or signature projects demonstrate capability and quality.
- **Testimonials:** Social proof combats skepticism. Real client quotes, coupled with names and optionally photos, validate your expertise.
- **Bilingual support:** Serving content in a visitor’s preferred language removes friction and broadens your audience.
- **Call‑to‑action:** A dedicated section near the bottom reminds visitors to convert. Keeping the CTA accessible throughout the page (header and hero) ensures no opportunity is missed.

## Launch Checklist

Follow these steps to go live:

1. Update all text, images, testimonials, and contact details.
2. Tailor the primary color and styling in `tailwind.config.js` to match your brand.
3. Add or remove services and features as appropriate.
4. Test both English and Spanish versions, confirming all translations are accurate.
5. Run `npm run build` and deploy to a hosting provider. For best performance, enable static site generation via `next export` if you do not require server‑side rendering.
6. Ensure analytics (e.g., Google Analytics) is integrated if you need to track conversions and user behavior.

This template provides a professional, adaptable foundation for any landscaping business seeking to build a strong online presence and convert visitors into clients. Feel free to extend, refine, and optimize further based on your specific needs.