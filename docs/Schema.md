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
