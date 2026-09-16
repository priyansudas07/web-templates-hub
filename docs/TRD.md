# Technical Requirements Document (TRD): Sports Gear

## 1. Technical Objective

The goal of this project is to implement Sports Gear as a **fast, responsive, production-ready showcase/catalog website**.

The website enables visitors to:
1. Discover the Sports Gear brand identity and story.
2. Browse featured and complete jersey collections.
3. Search and filter products dynamically in real-time.
4. View detailed product specifications, front/back views, prices in INR (₹), and available sizes.
5. Initiate direct customer inquiries via auto-generated WhatsApp links.
6. Access store contact information, operating hours, and location maps.

*Scope Note*: The V1 technical architecture explicitly excludes transactional e-commerce infrastructure (checkout flows, online payment gateways, user accounts, cart state persistence, databases, and backend APIs).

---

## 2. System Architecture

Sports Gear employs a **frontend-first static architecture**:

```text
                           SPORTS GEAR CATALOG (V1)
                                      │
               ┌──────────────────────┴──────────────────────┐
               │                                             │
         UI Layer (`src/components/`, `src/pages/`)    Data Layer (`src/data/`)
               │                                             │
      React UI Components                              TypeScript Datasets
     (Navbar, Hero, Grid, PDP)                      (products, categories, store)
               │                                             │
               └──────────────────────┬──────────────────────┘
                                      │
                           Browser Interactivity
                       (Search, Filter, Modal/PDP)
                                      │
                         External Conversion Trigger
                            (WhatsApp Business Link)
```

- **Zero Backend API**: No custom server endpoints or microservices in V1.
- **Zero Database Infrastructure**: Product catalog and store metadata live entirely in local, structured, type-safe data files.

---

## 3. Technology Stack

### Core Technologies
- **Framework**: React 18+ with TypeScript (Strict mode enabled)
- **Build Tool**: Vite (Lightning-fast HMR, lightweight bundling, WebP image asset handling)
- **Styling**: Tailwind CSS (Utility-first styling, responsive grid, custom dark theme tokens)
- **Routing**: React Router v6+ (Client-side routing for `/`, `/collection`, `/collection/:id`, `/about`, `/contact`)
- **Icons**: Lucide React (Lightweight SVG icon library)
- **Animation**: CSS-first transitions, Tailwind micro-interactions, Framer Motion for modal popovers and view transitions

### Explicitly Excluded Technologies (Stack Anti-Patterns)
Do **NOT** include:
- Three.js / WebGL / Canvas heavy rendering engines
- Redux / Zustand / MobX global state stores
- GraphQL / REST backend clients
- Firebase / Supabase / Appwrite BaaS platforms
- PostgreSQL / MongoDB / MySQL databases
- Express.js / Node.js backend servers
- NextAuth / Auth0 / Passport authentication libraries
- Razorpay / Stripe / PayPal / UPI SDKs

---

## 4. Application Directory Structure

```text
f:/Projects/Websites/jersey-store/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/              # Static media assets & logos
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Layout, Navbar, Footer, SectionHeading, WhatsAppButton
│   │   ├── collection/      # SearchBar, CategoryFilter, ProductGrid, ProductCard
│   │   └── product/         # ProductGallery, ProductInfo, SizeSelector, Badges
│   ├── config/              # Centralized store & WhatsApp URL generators (`store.ts`)
│   ├── data/                # Canonical TypeScript data files (`products.ts`, `categories.ts`, `store.ts`)
│   ├── pages/               # Top-level route pages (Home, Collection, ProductDetail, About, Contact, NotFound)
│   ├── styles/              # Global CSS & Tailwind configuration
│   ├── types/               # TypeScript interfaces (`product.ts`, `store.ts`)
│   ├── utils/               # Helper utilities (text formatters, search matchers)
│   ├── App.tsx              # Router setup & layout wrapper
│   └── main.tsx             # Application entry point
├── package.json
├── index.html
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Component Architecture

Component responsibilities remain focused, modular, and decoupled:

| Component | Responsibility |
|---|---|
| `Layout` | Global shell wrapper providing common Header, Footer, and main container boundaries. |
| `Navbar` | Brand logo, desktop navigation, search modal trigger, mobile drawer toggle. |
| `Footer` | Store branding, navigation links, operating hours, social links, location text. |
| `Hero` | Asymmetric editorial section spotlighting the primary campaign jersey. |
| `SectionHeading` | Reusable section title component with uppercase subtitle badges. |
| `ProductCard` | Displays single product image (front/back view toggle), price in ₹, sizes, and detail link. |
| `ProductGrid` | Responsive 12-column grid layout rendering filtered lists of `ProductCard`s. |
| `ProductGallery` | High-res product view with secondary thumbnail triggers and touch swipe support. |
| `ProductInfo` | Scannable PDP panel rendering specs, available size selector, and WhatsApp enquiry button. |
| `CategoryFilter` | Filter chip bar supporting `All`, `Football`, `Cricket`, `Basketball`, `Club`, `National`. |
| `SearchBar` | Client-side search input field with instant matching and query clear trigger. |
| `WhatsAppButton` | Primary action button generating encoded WhatsApp inquiry URLs. |
| `EmptyState` | Fallback component rendered when no search/filter matches are found. |
| `NotFound` | 404 view for invalid product IDs or routes with a "Back to Collection" action. |

---

## 6. Route Architecture

```text
Path                   Page Component           Rendered View
-----------------------------------------------------------------------------------------
/                      pages/Home.tsx           Hero, Featured Spotlight, Categories, New Arrivals
/collection            pages/Collection.tsx     Complete catalog, Search, Category Filters, Grid
/collection/:id        pages/ProductDetail.tsx  PDP image gallery, specs, size selector, WhatsApp CTA
/about                 pages/About.tsx          Brand story, authenticity, store overview
/contact               pages/Contact.tsx        Address, opening hours, Google Maps embed, WhatsApp
/*                     pages/NotFound.tsx       404 fallback page with recovery CTA
```

---

## 7. Data Flow & State Management

### 7.1 Data Flow Pipeline
```text
Canonical Product Dataset (`src/data/products.ts`)
                       ↓
Client-Side Filtering & Search Engine (`useCatalogFilter` hook)
                       ↓
Filtered Array of Product Objects
                       ↓
`ProductGrid` Component → `ProductCard` Component
                       ↓
`ProductDetail` Page (Selected Item ID lookup)
                       ↓
WhatsApp Link Generator (`generateWhatsAppUrl(product, selectedSize)`)
```

### 7.2 State Management Scope
V1 relies strictly on local React state (`useState`, `useMemo`, `useCallback`):
- `searchQuery`: String query input
- `selectedCategory`: Active category tab ID
- `selectedSport`: Active sport filter
- `selectedSize`: Active size selected by buyer on PDP (`S`, `M`, `L`, `XL`, `XXL`)
- `activeImageIndex`: Active thumbnail displayed in `ProductGallery`
- `isMobileMenuOpen`: Mobile navigation drawer boolean

*Rule*: No global state libraries (Redux/Zustand) are required for V1 catalog browsing.

---

## 8. Client-Side Search & Filtering Engine

### 8.1 Search Matching Logic
Search query strings are normalized (`query.toLowerCase().trim()`) and evaluated against customer-facing fields:
```typescript
export const matchProduct = (product: Product, query: string): boolean => {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  return (
    product.name.toLowerCase().includes(q) ||
    (product.team && product.team.toLowerCase().includes(q)) ||
    (product.player && product.player.toLowerCase().includes(q)) ||
    product.sport.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q) ||
    (product.season && product.season.toLowerCase().includes(q))
  );
};
```

### 8.2 Category Filtering Logic
Filtering evaluates deterministically in combination with search queries:
```typescript
export const filterProducts = (
  products: Product[],
  category: string,
  query: string
): Product[] => {
  return products.filter((p) => {
    const matchesCategory = category === 'all' || p.category === category || p.sport === category;
    const matchesSearch = matchProduct(p, query);
    return matchesCategory && matchesSearch;
  });
};
```

---

## 9. Product Detail Resolution (`/collection/:id`)

1. Route parameter `id` is extracted via React Router's `useParams<{ id: string }>()`.
2. Product record is resolved via `products.find(p => p.id === id)`.
3. If valid: Renders `ProductDetail` page views, updating `<title>` and Open Graph tags.
4. If invalid: Renders `NotFound` recovery component.

---

## 10. WhatsApp Link Generation Architecture

WhatsApp URL generation is centralized in `src/config/store.ts`:

```typescript
export const getWhatsAppEnquiryUrl = (
  productName: string,
  price: number,
  size?: string
): string => {
  const phone = storeInfo.whatsapp;
  let message = `Hi Sports Gear! I am interested in the ${productName}.\nPrice: ₹${price}`;
  if (size) {
    message += `\nSize: ${size}`;
  }
  message += `\n\nIs this available for pickup/delivery?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

---

## 11. Responsive Layout & Asset Optimization

- **CSS Strategy**: Tailwind CSS with custom breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
- **Aspect Ratio Control**: Images specify explicit container aspect ratios (`aspect-[4/5]`) to prevent Layout Shifts (CLS).
- **Asset Loading Strategy**:
  - `eager` loading on high-priority Hero banner visuals.
  - `lazy` loading on all below-the-fold `ProductCard` assets.

---

## 12. Production Deployment Model

- **Build Target**: Static single-page application (`dist/` output via `npm run build`).
- **Supported Hosting Hosts**: Vercel, Netlify, Cloudflare Pages, GitHub Pages (with SPA fallback redirect rules).
- **Deployment Verification**: Zero runtime backend dependencies required.

---

## 13. Core Technical Principle

$$\text{Simple Architecture} + \text{Centralized Data} + \text{Reusable Components} + \text{Fast Frontend} + \text{Excellent Visual Execution}$$
