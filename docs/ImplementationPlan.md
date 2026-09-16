# Implementation Plan & Execution Phases: Sports Gear

## 1. Implementation Objective

This document defines the step-by-step implementation sequence for building the **Sports Gear V1 website**.

The implementation sequence follows a strict progression:

$$\text{Foundation} \longrightarrow \text{Data} \longrightarrow \text{Layout} \longrightarrow \text{Pages} \longrightarrow \text{Interactions} \longrightarrow \text{Responsive UX} \longrightarrow \text{SEO/a11y} \longrightarrow \text{QA} \longrightarrow \text{Deployment}$$

---

## 2. Phase Breakdown

### Phase 0 — Project Audit & Setup
- Inspect existing directory structure and verify Node/NPM versions.
- Initialize/verify React + TypeScript + Vite project configuration.
- Install core dependencies: `tailwindcss`, `@tailwindcss/vite`, `lucide-react`, `framer-motion`, `react-router-dom`.
- Configure `vite.config.ts`, `tsconfig.json`, and Tailwind CSS dark theme tokens.

### Phase 1 — Foundation & Application Shell
- Establish global typography (Sans-serif display & body font variables).
- Define visual design tokens:
  - Background: `#0B0E14` (Deep Charcoal)
  - Card Surface: `#1E293B` (Elevated Slate)
  - Text Primary: `#F8FAFC` (Off-white)
  - Accent Color: `#DC2626` (Electric Crimson)
  - Borders: `#334155` (Subtle Slate)
- Build global application shell (`App.tsx` layout wrapper with `Navbar`, `<main>`, and `Footer`).

### Phase 2 — Data Layer Implementation
- Create `src/types/product.ts`, `src/types/category.ts`, and `src/types/store.ts`.
- Populate `src/data/products.ts` with authentic initial catalog datasets (Football, Cricket, Basketball kits).
- Populate `src/data/categories.ts` and `src/data/store.ts`.
- Implement `src/config/store.ts` for centralized WhatsApp link generation (`createWhatsAppLink`).

### Phase 3 — Core Component Library
Build and test decoupled UI components:
- **Common**: `Navbar`, `Footer`, `SectionHeading`, `WhatsAppButton`, `Badge`
- **Catalog**: `ProductCard`, `ProductGrid`, `SearchBar`, `CategoryFilter`, `EmptyState`
- **Product Details**: `ProductGallery`, `ProductInfo`, `SizeSelector`

### Phase 4 — Homepage Implementation (`/`)
- **Hero Section**: Asymmetric editorial layout spotlighting the primary campaign jersey with `"Explore Collection"` CTA.
- **Featured Spotlight**: "Drop of the Week" spotlight section (`featured: true`).
- **New Arrivals Carousel**: Grid/carousel displaying latest catalog items (`newArrival: true`).
- **Category Tiles**: Quick jump tiles to Football, Cricket, Basketball, Club, and National.
- **Store Contact Banner**: WhatsApp inquiry CTA & store highlights.

### Phase 5 — Collection Page Implementation (`/collection`)
- Editorial header (`THE COLLECTION`).
- Interactive category filter chip bar (`All`, `Football`, `Cricket`, `Basketball`, `Club`, `National`).
- Real-time search bar (Instant keyword matching across product name, team, player, sport, category, season).
- Responsive 12-column product grid with front/back image toggle cards.
- Clean `EmptyState` fallback when no search matches are found.

### Phase 6 — Product Detail View (`/collection/:id`)
- Client-side route parameter lookup (`useParams<{ id: string }>()`).
- High-res product gallery with thumbnail selection & mobile touch swipe.
- Information panel rendering category, title, price in ₹, size selector (`S`, `M`, `L`, `XL`, `XXL`), fabric specs, and stock availability badge.
- Primary **"Enquire on WhatsApp"** button triggering pre-filled inquiry message.
- `NotFound` recovery component for invalid product slugs.

### Phase 7 — Brand Information Pages (`/about` & `/contact`)
- **About Page**: Concise brand story, commitment to kit quality, authenticity, and store context.
- **Contact Page**: Practical store directory containing address, operating hours, phone, WhatsApp callout, Instagram handle, and Google Maps embed.

### Phase 8 — Micro-Interactions & Motion Polish
- Level 1: Button hover transitions, navbar active states, modal popovers.
- Level 2: Hero entrance animations, card hover scale (`scale-102`), single-trigger viewport entrance fades.
- Level 3: Full compliance with `prefers-reduced-motion`.

### Phase 9 — Responsive UX Refinement
- Test viewport breakpoints: Desktop (1440px/1280px), Tablet (1024px/768px), Mobile (430px/390px/360px).
- Verify 48px+ touch targets on mobile filter chips and size selector buttons.
- Confirm zero horizontal overflow (`overflow-x-hidden`).

### Phase 10 — Accessibility (a11y) & SEO Audit
- Verify semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<button>`).
- Confirm visible focus rings (`focus-visible:ring-2 focus-visible:ring-rose-500`) and keyboard traps.
- Generate dynamic `<title>` and Open Graph meta tags per route.
- Include static `robots.txt` and `sitemap.xml` in `public/`.

### Phase 11 — Production QA & Build Verification
- Execute `npm run build` and `npx tsc` to verify zero TypeScript errors.
- Test complete user flow: `Homepage → Collection → Search/Filter → PDP → Size → WhatsApp`.
- Verify direct product URL resolution (`/collection/real-madrid-home-2026`).

### Phase 12 — GitHub & Production Deployment
- Commit and push complete codebase to `https://github.com/priyansudas07/web-templates-hub.git`.
- Deploy as static SPA to hosting target (Vercel / Netlify / GitHub Pages).

---

## 3. Implementation Priority Scale

$$\text{1. Functional Correctness} \longrightarrow \text{2. Product Imagery} \longrightarrow \text{3. Responsive Layout} \longrightarrow \text{4. Discovery & Filters} \longrightarrow \text{5. WhatsApp Enquiry}$$

---

## 4. Explicitly Out of Scope

Do **NOT** implement:
- User login / User registration / Customer accounts
- Cart persistent state or checkout flow
- Online payment integrations (Razorpay, Stripe, UPI)
- Backend databases, APIs, or admin dashboards
- Fake scarcity timers, fake discounts, or fabricated commercial claims

---

## 5. Definition of Done

The V1 implementation is complete when:
1. All 5 core routes (`/`, `/collection`, `/collection/:id`, `/about`, `/contact`) render cleanly.
2. Canonical product catalog is centralized in `src/data/products.ts`.
3. Search and category filtering operate instantaneously without page reloads.
4. Product Detail pages resolve dynamically by stable slug.
5. WhatsApp URLs generate pre-filled inquiry messages with selected product & size details.
6. Responsive layout passes mobile touch target tests without horizontal overflow.
7. `npm run build` compiles cleanly with zero TypeScript errors.
8. Application is pushed to GitHub repository at `priyansudas07/web-templates-hub`.
