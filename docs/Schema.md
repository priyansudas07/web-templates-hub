# Schema Document: Sports Gear Data Model

## 1. Schema Philosophy

Sports Gear V1 is a **static showcase/catalog website**.

The schema must be:
- **Simple & Transparent**: Clean TypeScript types and data structures.
- **Centralized**: Stored in a single canonical data file (`src/data/products.ts`).
- **Type-Safe**: Strictly typed using TypeScript interfaces and union types.
- **Database-Independent**: Zero external database dependencies (No PostgreSQL, MongoDB, Firebase, Supabase, or backend ORMs).
- **Extensible**: Ready to accommodate future sportswear categories without schema refactoring.

The UI components consume this centralized dataset dynamically rather than embedding hardcoded product details inside JSX.

---

## 2. Product Entity Schema

Each product record contains the following structure:

```text
Product
├── id: string (unique, URL-safe slug)
├── name: string
├── sport: Sport ("football" | "cricket" | "basketball")
├── category: Category ("club-teams" | "national-teams" | "retro-grails" | "special-edition")
├── team?: string (optional)
├── player?: string (optional)
├── season?: string (optional)
├── price: number (numeric value only)
├── currency: Currency ("INR")
├── images: string[] (array of visual image paths)
├── sizes: Size[] (array of available size strings)
├── description: string
├── featured: boolean
├── newArrival: boolean
└── availability: Availability ("available" | "unavailable" | "contact")
```

---

## 3. Field Specifications & Validation Rules

### 3.1 `id`
- **Type**: `string`
- **Constraint**: Must be a unique, URL-safe, lowercase string identifier (slug).
- **Example**: `"real-madrid-home-2026"`
- *Rule*: ID must remain stable over time and must never depend on array position or index.

### 3.2 `name`
- **Type**: `string`
- **Description**: Customer-facing product title.
- **Example**: `"Real Madrid Home Jersey 2025/26"`

### 3.3 `sport`
- **Type**: `Sport` (`"football" | "cricket" | "basketball"`)
- **Description**: Primary sport classification.

### 3.4 `category`
- **Type**: `Category` (`"club-teams" | "national-teams" | "retro-grails" | "special-edition"`)
- **Description**: Sub-classification for filtering.

### 3.5 `team` (Optional)
- **Type**: `string`
- **Example**: `"Real Madrid"`, `"Indian Cricket Team"`

### 3.6 `player` (Optional)
- **Type**: `string`
- **Example**: `"Jude Bellingham"`, `"Virat Kohli"`

### 3.7 `season` (Optional)
- **Type**: `string`
- **Example**: `"2025/26"`, `"Retro 1998"`

### 3.8 `price`
- **Type**: `number`
- **Constraint**: Numeric currency value only. Do **NOT** store currency symbols in this field.
- **Correct**: `1499`
- **Incorrect**: `"₹1,499"`

### 3.9 `currency`
- **Type**: `string`
- **Value**: `"INR"` (Formatted as `₹` in UI presentation layers).

### 3.10 `images`
- **Type**: `string[]`
- **Description**: Array of image paths (Front view, Back view, Close-up view).
- **Example**: `["/images/products/real-madrid-front.webp", "/images/products/real-madrid-back.webp"]`

### 3.11 `sizes`
- **Type**: `Size[]` (`("S" | "M" | "L" | "XL" | "XXL")[]`)
- **Description**: List of available physical kit sizes.

### 3.12 `description`
- **Type**: `string`
- **Description**: Factual product details (fabric, fit, washing care). No unsupported marketing claims.

### 3.13 `featured` & `newArrival`
- **Type**: `boolean`
- **Description**: Controls visibility in Homepage Featured Spotlight and New Arrivals sections.

### 3.14 `availability`
- **Type**: `Availability` (`"available" | "unavailable" | "contact"`)
- **Semantics**:
  - `"available"`: In stock and ready for inquiry.
  - `"unavailable"`: Currently out of stock.
  - `"contact"`: Inquire via WhatsApp for custom size or pre-order availability.

---

## 4. TypeScript Definitions (`src/types/product.ts`)

```typescript
export type Sport = 'football' | 'cricket' | 'basketball';

export type Category = 
  | 'club-teams' 
  | 'national-teams' 
  | 'retro-grails' 
  | 'special-edition';

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Availability = 'available' | 'unavailable' | 'contact';

export interface Product {
  id: string;
  name: string;
  sport: Sport;
  category: Category;
  team?: string;
  player?: string;
  season?: string;
  price: number;
  currency: 'INR';
  images: string[];
  sizes: Size[];
  description: string;
  featured: boolean;
  newArrival: boolean;
  availability: Availability;
}
```

---

## 5. Core Data Governance Rules

1. **Single Source of Truth**: All catalog data lives exclusively inside `src/data/products.ts`.
2. **Zero Hardcoded Data in Components**: React components consume products via props or data getters (`ProductCard(product)`, `getFeaturedProducts()`).
3. **Stable Slugs**: Product IDs are used for clean routing (`/collection/real-madrid-home-2026`). Array indices (`/product/1`) are strictly forbidden.
4. **Factual Integrity**: Never inject fake commercial triggers (no fake discounts, fake review ratings, or fake stock countdown timers).
5. **Clean Placeholders**: Use clear, standardized placeholders where real business info is pending.

---

# Part 2: Supporting Data Structures

## 6. Category Schema

Categories are centrally defined in `src/data/categories.ts`.

```typescript
export interface CategoryItem {
  id: string;
  name: string;
  description?: string;
  image?: string;
}
```

### Initial Category IDs & Values:
- `football` $\rightarrow$ Football Kits
- `cricket` $\rightarrow$ Cricket Jerseys
- `basketball` $\rightarrow$ Basketball Jerseys
- `club-teams` $\rightarrow$ Club Teams
- `national-teams` $\rightarrow$ National Teams

*Future Extensibility*: Ready for future product expansions (shorts, boots, tracksuits, accessories), but V1 only renders categories containing active products.

---

## 7. Store Information Schema

Store metadata is centralized in `src/data/store.ts`:

```typescript
export interface StoreInfo {
  name: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  openingHours?: string;
  instagram?: string;
  locationUrl?: string;
}
```

### Default Store Configuration Object:
```typescript
export const storeInfo: StoreInfo = {
  name: "Sports Gear",
  description: "Authentic match kits, retro grails, and premium sportswear.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "123 Stadium Road, Sports Hub District, Mumbai, India",
  openingHours: "Mon - Sat: 10:00 AM - 9:00 PM",
  instagram: "@sportsgear_official",
  locationUrl: "https://maps.google.com"
};
```
*Rule*: Store information is shared across Footer, Contact Page, About Page, and SEO metadata. Do not hardcode store details inside component templates.

---

## 8. WhatsApp Configuration

WhatsApp inquiry parameters are managed centrally in `src/config/store.ts`:

```typescript
export interface WhatsAppConfig {
  phoneNumber: string;
  defaultMessage?: string;
}

export const generateWhatsAppUrl = (productName: string, size?: string, price?: number): string => {
  const number = storeInfo.whatsapp;
  let text = `Hi Sports Gear! I'm interested in the ${productName}.`;
  if (size) text += `\nSize: ${size}`;
  if (price) text += `\nPrice: ₹${price}`;
  text += `\nIs this available?`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
```

---

## 9. Navigation Schema

Navigation links are defined in a clean schema array:

```typescript
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
```
*V1 Rule*: No Cart, Account, Login, Wishlist, or Order links.

---

## 10. Image Schema & Accessibility

For full a11y compliance, product images support rich metadata:

```typescript
export interface ProductImage {
  src: string;
  alt: string;
}
```
Every product visual requires meaningful alt text (e.g., `"Front view of Real Madrid 2025/26 Home Jersey"`). Avoid generic tags like `"image"` or `"product"`.

---

## 11. SEO Metadata Schema

```typescript
export interface SEOData {
  title: string;
  description: string;
  image?: string;
}
```
Product detail titles derive dynamically: `"Real Madrid Home Jersey 2025/26 | Sports Gear"`.

---

## 12. UI State vs. Persistent Data Separation

| Persistent Business Data (`src/data/*`) | Temporary UI State (`React State`) |
|---|---|
| Product Catalog, Prices, Sizes | Active search query (`searchQuery`) |
| Category list & Store address | Selected filter (`selectedCategory`) |
| WhatsApp Phone Configuration | Mobile drawer state (`isMenuOpen`) |
| Available Stock Status | Active Gallery Image (`activeImageIndex`) |

---

## 13. Deterministic Filtering Model

Filtering evaluates deterministically against the centralized catalog array:

```typescript
export interface FilterState {
  search?: string;
  category?: string;
  sport?: string;
}
```
Case-insensitive matching evaluates against customer-facing fields: `name`, `team`, `player`, `sport`, `category`, and `season`.

---

## 14. Lightweight Data Validation

Development-time validation guarantees:
- Unique stable `id` for every item.
- Non-negative numeric `price`.
- Array type for `images` and `sizes`.
- Valid `availability`, `sport`, and `category` union values.

---

## 15. Placeholder Data Rules

Placeholder items in development can be flagged (`isPlaceholder?: true`). Before production deployment:
- Remove mock items.
- Replace placeholder image URLs with real high-res assets.
- Verify real prices and size charts with store owner.

---

## 16. Repository Ownership Structure

```text
src/
└── data/
    ├── products.ts    <-- Single canonical product catalog
    ├── categories.ts  <-- Category configurations
    └── store.ts       <-- Centralized store & WhatsApp details
```

---

## 17. Final Schema Principle

$$\text{Centralized Data} + \text{Simple Types} + \text{Zero Backend Dependency} + \text{Clean UI Component Separation}$$
