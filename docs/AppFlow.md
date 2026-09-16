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
