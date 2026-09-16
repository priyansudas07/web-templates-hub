# User Journey & Application Flow: Sports Gear

## 1. Core User Journey

Sports Gear V1 is a **premium catalog/showcase website** designed to drive direct product inquiries via WhatsApp.

### Primary User Flow
```text
┌──────────────┐     ┌───────────────────┐     ┌───────────────────────┐
│   Homepage   │ ──> │ Collection Browse │ ──> │ Search / Filter Kits  │
└──────────────┘     └───────────────────┘     └───────────────────────┘
                                                           │
                                                           ▼
┌─────────────────────────┐     ┌───────────────┐     ┌───────────────────────┐
│  WhatsApp Inquiry Link  │ <── │  Select Size  │ <── │ Product Details (PDP) │
└─────────────────────────┘     └───────────────┘     └───────────────────────┘
```

### Secondary User Flows
1. **Brand & Contact Journey**: `Homepage → About → Contact Store → WhatsApp / Maps`
2. **Catalog Exploration Loop**: `Homepage → Collection → Product Details → Back to Collection`

---

## 2. Global Navigation Flow

The top header navigation provides immediate, uncluttered access across the site:

```text
[ SPORTS GEAR ]    Home (/)    Collection (/collection)    About (/about)    Contact (/contact)
```

- **Logo Mark**: Clicking `SPORTS GEAR` or the `SG` monogram returns visitors to `/` (Homepage).
- **Mobile Navigation**: Toggling the mobile menu icon opens a smooth, full-screen drawer displaying identical navigation links.
- *V1 Navigation Scope*: **No** Cart, Wishlist, Account, Login, Register, or Order History icons.

---

## 3. Homepage Flow

The homepage establishes Sports Gear's visual campaign identity and guides visitors toward kit discovery:

```text
[ 1. Hero Section ("Authentic Match Kits & Retro Grails") ] ──> CTA: "Explore Collection"
                          │
                          ▼
[ 2. Featured Spotlight ("Drop of the Week") ]
                          │
                          ▼
[ 3. New Arrivals Carousel ]
                          │
                          ▼
[ 4. Category Grid (Football • Cricket • Basketball • Club • National) ]
                          │
                          ▼
[ 5. Store Location & WhatsApp Inquiry Banner ]
                          │
                          ▼
[ 6. Universal Footer ]
```

---

## 4. Featured & New Arrivals Product Flow

Products flagged in `src/data/products.ts` dynamically populate homepage sections:

- **Featured Section** (`featured: true`): High-impact cards highlighting top-selling kits.
- **New Arrivals Section** (`newArrival: true`): Curated section spotlighting newly added catalog items.
- **Card Interaction**: Clicking any product card triggers client-side routing to `/collection/:productId`.

---

## 5. Collection Page Flow

The Collection page serves as the main browsing workspace:

```text
Collection Page (/collection)
  │
  ├── 1. Category Bar (All | Football | Cricket | Basketball | Club Teams | National Teams)
  ├── 2. Search Input (Real-time keyword lookup)
  └── 3. Filtered Product Grid (3-4 col Desktop / 2 col Mobile)
```

### Search & Filtering Combination Pipeline
```text
User Enters Keyword (e.g. "Madrid")  +  Selects Category ("Football")
                                │
                                ▼
         Client-Side Search Match Engine (`useCatalogFilter`)
                                │
                                ▼
           Render Matching Products (Instant, Zero Delay)
```

- **Empty State**: If no products match the query/filter, an empty state renders with a clear **"Reset Search & Filters"** action button.

---

## 6. Product Detail View Flow (`/collection/:id`)

When a visitor selects a jersey, the route resolves dynamically via `/collection/:id`:

```text
/collection/:id
  │
  ├── 1. High-Res Product Gallery (Front View, Back View, Badges)
  ├── 2. Kit Category & Title ("Real Madrid Home Jersey 2025/26")
  ├── 3. Price Display in ₹ (e.g., ₹1,499)
  ├── 4. Interactive Size Selector ([ S ] [ M ] [ L ] [ XL ] [ XXL ])
  ├── 5. Fabric & Fit Description
  ├── 6. Stock Availability Badge ("In Stock")
  └── 7. Primary Action Button: [ Enquire on WhatsApp ]
```

---

## 7. WhatsApp Conversion Engine Flow

WhatsApp replaces traditional shopping cart checkout, generating pre-filled inquiry messages:

```text
Product Page ──> Select Size (e.g., "L") ──> Click "Enquire on WhatsApp"
                                                      │
                                                      ▼
                      WhatsApp Web / Mobile App Opens Automatically
                                                      │
                                                      ▼
                          Pre-Filled Inquiry Message Ready to Send:
   "Hi Sports Gear! I am interested in the Real Madrid Home Jersey 2025/26.
    Size: L
    Price: ₹1,499

    Is this available for delivery or pickup?"
```

---

## 8. Store Information & Contact Flow

Visitors seeking physical store address, operating hours, or direct contact follow:

```text
Navbar / Footer Link ──> /contact Page
                              │
                              ├── 1. Store Address Placeholder
                              ├── 2. Direct Phone & WhatsApp Callouts
                              ├── 3. Operating Hours (Mon - Sat: 10 AM - 9 PM)
                              ├── 4. Instagram Profile (@sportsgear_official)
                              └── 5. Interactive Google Maps Embed Location
```

---

## 9. Error & Recovery Flow

### Invalid Product ID (`/collection/invalid-slug`)
```text
Invalid ID Requested ──> Product Not Found Component ──> CTA: "Back to Collection"
```

### Unknown Route (`/random-path`)
```text
Unknown URL ──> 404 Not Found Page ──> CTA: "Return to Homepage"
```

---

## 10. Global Flow Principle

Every screen provides an immediate, frictionless next action:
$$\textbf{Homepage} \rightarrow \text{Discover} \quad\mid\quad \textbf{Collection} \rightarrow \text{Browse} \quad\mid\quad \textbf{PDP} \rightarrow \text{Inspect/Size} \quad\mid\quad \textbf{WhatsApp} \rightarrow \text{Enquire}$$

---

# Part 2: States, Edge Cases & Interaction Rules

## 11. Initial Loading & Image Fallback States

- **Instant Load**: Local static data loads synchronously with zero artificial loading spinners.
- **Image Skeleton**: Image containers display a subtle neutral skeleton (`bg-slate-800 animate-pulse`) until high-res images load.
- **Image Load Error Handling**: Failed visual links trigger an `onError` event that renders a clean fallback placeholder card, preserving grid layout without showing browser broken-image icons.

---

## 12. Search & Category Filter States

```text
1. Default State (Search: "", Category: "All") ──> Render Complete Catalog
2. Search Active (Search: "Ronaldo")          ──> Filter Matching Products
3. Category Active (Category: "Cricket")      ──> Filter Matching Category
4. Search + Category Active                   ──> Filter Combined Match
5. Zero Results Match                         ──> Render Empty State ("Reset Search & Filters")
```

---

## 13. Size Selection & WhatsApp Inquiry Flow

- **Products with Sizes**: Size selector displays available size buttons (`S`, `M`, `L`, `XL`, `XXL`). Selecting a size updates the WhatsApp link generator to include `Size: [Selected Size]`.
- **Products without Sizes / Accessories**: Size selector step is omitted cleanly without rendering `N/A` or empty size buttons. The WhatsApp message formats directly without size lines.
- **Unavailable Sizes**: Disabled with strike-through styling (`opacity-40 cursor-not-allowed line-through`) and cannot be selected.

---

## 14. Availability & WhatsApp Logic

- **Available**: Active solid button `[ Enquire on WhatsApp ]`.
- **Contact Store**: Button reads `[ Contact Store for Availability ]`.
- **Unavailable**: Button disabled with clear text `[ Currently Out of Stock ]`. Never claim payment can be completed.

---

## 15. Direct Product URL Flow (`/collection/:id`)

When a visitor opens a direct URL (from WhatsApp sharing, Google search, or bookmarks):
```text
Direct URL Visit (/collection/portugal-home-2026)
                        │
                        ▼
               App Initializes & Resolves Slug
                        │
       ┌────────────────┴────────────────┐
       ▼                                 ▼
Valid Product Slug              Invalid Product Slug
       │                                 │
Render PDP View                 Render "Product Not Found" View
(Title: "Portugal...")          (CTA: "Back to Collection")
```

---

## 16. Missing Optional Data Handling

Components evaluate optional schema fields conditionally:
- If `player` is `undefined`: Omit player line cleanly.
- If `season` is `undefined`: Omit season badge.
- If `sizes` array is empty: Omit size selector.
*Rule*: Never render `Player: undefined` or `Season: N/A`. Omission is preferred over noisy placeholders.

---

## 17. External Link Security & Behavior

All external links (WhatsApp `wa.me`, Instagram, Google Maps) use strict security attributes:
```html
<a href="https://wa.me/..." target="_blank" rel="noopener noreferrer">
  Enquire on WhatsApp
</a>
```

---

## 18. Eight Global Interaction Rules

1. **Immediate**: Visual responses execute instantly without delay.
2. **Predictable**: Buttons perform strictly what their labels communicate.
3. **Reversible**: Search queries and category filters reset easily with one click.
4. **Lightweight**: Zero heavy animation loops or redundant state hooks.
5. **Accessible**: Full keyboard navigation, visible focus rings, and 48px+ touch targets.
6. **Consistent**: Uniform card hover behaviors across all pages.
7. **Honest**: Zero fake scarcity counters (`"Only 2 left!"`), fake discounts, or false order confirmations.
8. **Focused**: Every interaction serves the core conversion path:
   $$\textbf{Discover} \longrightarrow \textbf{Browse} \longrightarrow \textbf{Inspect} \longrightarrow \textbf{Enquire}$$
