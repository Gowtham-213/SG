# TrendMart

TrendMart is a modern, fully responsive eCommerce website built with Next.js 14, React, Tailwind CSS, and Framer Motion. It includes a premium shopping homepage, category browsing, product detail pages, a persistent cart, dark/light mode, animated product cards, loading skeletons, SEO metadata, and a clean reusable component structure.

## Tech Stack

- Next.js 14 with App Router
- React 18
- Tailwind CSS
- Framer Motion
- Context API for cart and theme state
- Lucide React icons
- Unsplash remote images

## Features

- Home page with hero banner, featured products, categories, best sellers, testimonials, newsletter, services, navbar, and footer
- Categories page for Electronics, Fashion, Shoes, Watches, Beauty, and Groceries
- Product cards with image, name, price, discount badge, rating stars, Add to Cart, and Buy Now
- Dynamic product details pages at `/products/[id]`
- Cart page with add, remove, quantity increase/decrease, subtotal, shipping, and total calculation
- Fast delivery, secure payment, 24/7 support, easy returns, and premium packaging service sections
- Dark/light mode toggle with localStorage persistence
- Responsive mobile navigation and adaptive layouts
- Smooth Framer Motion animations and hover effects
- Loading skeleton route fallback
- SEO-friendly metadata and favicon

## Installation

```bash
cd trendmart
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Folder Structure

```text
trendmart/
  app/
    about/
      page.tsx
    cart/
      page.tsx
    categories/
      page.tsx
    contact/
      page.tsx
    products/[id]/
      page.tsx
    services/
      page.tsx
    globals.css
    layout.tsx
    loading.tsx
    not-found.tsx
    page.tsx
  components/
    cart-button.tsx
    cart-view.tsx
    footer.tsx
    motion.tsx
    navbar.tsx
    product-actions.tsx
    product-card.tsx
    providers.tsx
    section-heading.tsx
    services-strip.tsx
    stars.tsx
    theme-toggle.tsx
  lib/
    products.ts
    utils.ts
  public/
    icon.svg
  next.config.mjs
  package.json
  tailwind.config.ts
  tsconfig.json
```

## Dummy Data

All products and categories live in `lib/products.ts`. Product images use stable Unsplash image URLs configured in `next.config.mjs`.

## Notes

- The cart persists in browser localStorage.
- Checkout and login buttons are UI-ready placeholders for future backend integration.
- The contact and newsletter forms are frontend-only placeholders.
