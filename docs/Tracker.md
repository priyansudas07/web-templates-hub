# Sports Gear V1: Master Implementation Tracker

## 1. Status Legend

```text
[ ] Not Started   - Work has not begun
[~] In Progress   - Work has started but is not fully verified
[x] Completed     - Implementation finished and verified
[!] Blocked       - External dependency or missing information blocker
```

---

## 2. Documentation Tracker

- [x] `PRD.md` — Product Requirements Document
- [x] `AppFlow.md` — User Journey & Application Flow
- [x] `Design.md` — Visual Design System & Interactions
- [x] `Schema.md` — Product Data Schema & Types
- [x] `TRD.md` — Technical Requirements Document
- [x] `ImplementationPlan.md` — Build Strategy & Execution Phases
- [x] `Rules.md` — Non-Negotiable Project & Architecture Rules
- [x] `Tracker.md` — Master Implementation Tracker

---

## 3. Project & Environment Setup

- [x] Git repository initialized (`f:\Projects\Websites`)
- [x] Remote repository connected (`https://github.com/priyansudas07/web-templates-hub.git`)
- [ ] Inspect existing workspace / setup React + TypeScript + Vite (`jersey-store`)
- [ ] Tailwind CSS setup (`@tailwindcss/vite`)
- [ ] Install dependencies (`lucide-react`, `framer-motion`, `react-router-dom`)
- [ ] Confirm development server runs cleanly (`npm run dev`)
- [ ] Confirm production build runs cleanly (`npm run build`)

---

## 4. Design System & Global Tokens

- [ ] Global CSS reset & dark mode background (`#0B0E14`)
- [ ] Design tokens: Elevated Slate Surface (`#1E293B`), Off-White Text (`#F8FAFC`), Crimson Accent (`#DC2626`), Slate Borders (`#334155`)
- [ ] Responsive container boundaries (`max-w-7xl px-4 sm:px-6 lg:px-8`)
- [ ] Typography scale (Display Sans extra-bold headers, body sans)
- [ ] Button base styles & hover states
- [ ] Focus rings (`focus-visible:ring-2 focus-visible:ring-rose-500`)
- [ ] Base layout shell (`App.tsx` wrapper with `Navbar`, `<main>`, `Footer`)

---

## 5. Data Layer & Type Schema

- [ ] Product type definition (`src/types/product.ts`)
- [ ] Store info & Category types (`src/types/store.ts`, `src/types/category.ts`)
- [ ] Canonical product dataset (`src/data/products.ts`)
- [ ] Category configurations (`src/data/categories.ts`)
- [ ] Centralized store information (`src/data/store.ts`)
- [ ] Centralized WhatsApp URL generator (`src/config/store.ts` / `src/utils/whatsapp.ts`)
- [ ] Dev dataset verification (Unique slugs, valid prices in ₹, images, sizes, stock statuses)

---

## 6. Shared Component Library

- [ ] `Layout` (Header, Main, Footer container)
- [ ] `Navbar` (Brand logo, desktop nav, search trigger, mobile drawer)
- [ ] `Footer` (Brand mark, nav links, hours, Instagram, WhatsApp)
- [ ] `Hero` (Asymmetric editorial section with `"Explore Collection"` CTA)
- [ ] `SectionHeading` (Reusable uppercase subtitle + title)
- [ ] `ProductCard` (Image front/back toggle, team/category, price in ₹, sizes, link)
- [ ] `ProductGrid` (Responsive 12-column grid rendering `ProductCard` list)
- [ ] `ProductGallery` (High-res image gallery with thumbnail triggers & touch swipe)
- [ ] `ProductInfo` (PDP info panel, size selector, WhatsApp enquiry CTA)
- [ ] `CategoryFilter` (Category chip bar: `All`, `Football`, `Cricket`, `Basketball`, `Club`, `National`)
- [ ] `SearchBar` (Client-side instant query input with clear trigger)
- [ ] `WhatsAppButton` (Reusable encoded WhatsApp link button)
- [ ] `EmptyState` (Fallback view when search/filter yields 0 items)
- [ ] `NotFound` (404 / Invalid Product ID recovery view)

---

## 7. Routing Architecture

- [ ] React Router client-side routes configured:
  - [ ] `/` (Home)
  - [ ] `/collection` (Collection)
  - [ ] `/collection/:id` (Product Detail)
  - [ ] `/about` (About)
  - [ ] `/contact` (Contact)
  - [ ] `/*` (NotFound)
- [ ] Direct product URL resolution verified (`/collection/real-madrid-home-2026`)
- [ ] Browser Back / Forward navigation verified

---

## 8. Page Implementations

### Homepage (`/`)
- [ ] Hero editorial banner
- [ ] Featured Spotlight section (`featured: true`)
- [ ] New Arrivals section (`newArrival: true`)
- [ ] Category Discovery grid
- [ ] Store Location & Contact CTA banner
- [ ] Universal Footer

### Collection Page (`/collection`)
- [ ] Editorial heading (`THE COLLECTION`)
- [ ] Category filter chip bar
- [ ] Real-time search bar
- [ ] Responsive product grid (3-4 col desktop / 2 col mobile)
- [ ] `EmptyState` fallback with `"Reset Search & Filters"` CTA

### Product Detail Page (`/collection/:id`)
- [ ] High-res image gallery with front/back views
- [ ] Kit category, title, season, price in ₹
- [ ] Interactive Size Selector (`S`, `M`, `L`, `XL`, `XXL`)
- [ ] Description & fabric/fit specs
- [ ] Stock availability badge
- [ ] Primary **"Enquire on WhatsApp"** CTA button
- [ ] Invalid product slug recovery view (`Product NotFound`)

### Brand Pages (`/about` & `/contact`)
- [ ] About Page (Brand story, quality commitment, authentic kit focus)
- [ ] Contact Page (Address, phone, WhatsApp callout, hours, Instagram, Google Maps embed)

---

## 9. WhatsApp Integration Verification

- [ ] Centralized `createWhatsAppLink` helper functions correctly
- [ ] Pre-filled message includes product name & price in ₹
- [ ] Pre-filled message appends selected size (`Size: L`) when selected
- [ ] Pre-filled message omits size cleanly if unselected or unavailable
- [ ] Special characters safely URL-encoded (`encodeURIComponent`)
- [ ] External links open in new tab (`target="_blank" rel="noopener noreferrer"`)

---

## 10. Quality, Responsive & SEO QA

- [ ] Responsive viewports verified (1440px+, 1280px, 1024px, 768px, 430px, 390px, 360px)
- [ ] Zero horizontal overflow (`overflow-x-hidden`)
- [ ] 48px+ touch target size for mobile filter chips, size buttons, and links
- [ ] Full WCAG AA contrast compliance & visible focus rings (`focus-visible:ring-2`)
- [ ] Dynamic document `<title>` & Open Graph metadata configured per route
- [ ] Images optimized with `aspect-[4/5]` explicit ratio & WebP lazy loading

---

## 11. Final Build & Deployment

- [ ] `npm run build` compiles with **zero TypeScript errors**
- [ ] Complete user flow verified (`Home → Collection → Search → PDP → Size → WhatsApp`)
- [ ] Project pushed to GitHub repository at `priyansudas07/web-templates-hub`
- [ ] Deployment to static SPA host (Vercel / Netlify / GitHub Pages) verified

---

## 12. Current Project State

```text
Current Phase: Phase 0 — Project Audit & Setup
Status: [~] In Progress
Current Task: Set up jersey-store Vite React project and dependencies
Blockers: None
```
