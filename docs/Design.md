# Design System & Visual Direction: Sports Gear

## 1. Core Design Direction

**Primary Aesthetic:**
$$\text{Premium Sportswear} \times \text{Football Culture} \times \text{Editorial Design}$$

The Sports Gear visual system must feel like a **premium sportswear brand and editorial campaign** rather than a generic e-commerce template.

### Core Visual Attributes
- **Energy**: High-contrast visual structure and dynamic layout pacing.
- **Confidence**: Bold, decisive typography and generous scale contrast.
- **Sport Authenticity**: Athletic precision, clean field grid geometry, and clear badge hierarchy.
- **Premium Quality**: Crisp line work, intentional alignment, and uncrowded compositions.
- **Modernity**: Minimalist layout framework with contemporary spacing models.
- **Youthful Culture**: High-impact editorial product presentation celebrating jersey collecting culture.
- **Collectibility**: Vault-style spotlighting for retro grails, authentic match kits, and special editions.

### Design Anti-Patterns (What to Avoid)
Do **NOT** use:
- Generic Shopify/WooCommerce-style template layouts
- Excessive gradients or artificial drop shadows
- Cyberpunk styling, glitch effects, or gaming UI aesthetics
- Excessive neon highlights or glowing sci-fi borders
- Heavy glassmorphism or unnecessary 3D elements
- Text bloat or unnecessary decorative clutter
- Excessive or distracting page animations
- Visually noisy backgrounds or busy textures

*Principle*: The design must remain sophisticated, restrained, and intentional at every resolution.

---

## 2. Brand Identity & Personality

### Brand Name
**SPORTS GEAR**

The identity presents Sports Gear as a comprehensive, authentic sportswear catalog rather than strictly a football jersey reseller. The visual framework accommodates multiple sports disciplines naturally:
- **Football**: Match kits, authentic badges, retro grails
- **Cricket**: International jerseys, IPL edition kits
- **Basketball**: Classic hardwood kits, NBA city edition jerseys

### Brand Personality Matrix

| Attribute | Expressed As | NOT Expressed As |
|---|---|---|
| **Bold** | Decisive typography, strong visual focus | Aggressive or obnoxious banner callouts |
| **Premium** | High visual contrast, generous whitespace | Elite or inaccessible luxury styling |
| **Sport-Focused** | Athletic grid structure, crisp badge tags | Gaming aesthetic or futuristic sci-fi |
| **Modern** | Clean architectural composition | Short-lived, trend-dependent gimmicks |
| **Energetic** | Dynamic editorial layouts | Visually chaotic or noisy interfaces |

---

## 3. Logo & Typography Direction

### Logo System
1. **Primary Wordmark**: **SPORTS GEAR** — A bold, clean, custom all-caps sans-serif typographic mark.
2. **Secondary Monogram**: **SG** — Compact athletic monogram for favicon, mobile navigation header, product watermarks, and social media icons.

*Constraint*: Do not use generic football ball icons or clip-art illustrations as the primary logo. Use clean typographic and monogram treatments.

---

## 4. Design Philosophy & Layout Architecture

The visual layout relies on **large visual moments balanced by generous negative space**:

- **Strong Typography**: Heavy display headlines paired with clean, ultra-legible body typography.
- **Large Product Imagery**: High-resolution imagery featuring clean background separation and front/back view toggles.
- **Editorial Compositions**: Asymmetric feature grids, off-axis product highlights, and magazine-style hero sections.
- **Controlled Spacing**: Consistent spacing scale based on an 8px grid system.
- **Subtle Motion**: Micro-interactions limited to smooth hover state transitions, image fades, and crisp modal popovers.

---

## 5. Overall Experience & User Journey Flow

Visitors enter a **sportswear campaign catalog** rather than a conventional online shop.

```
Brand Identity → Featured Product Spotlight → Collection Grid → Detailed Inspection → Direct Store Contact
```

The design encourages effortless exploration and product discovery without forcing visitors through unnecessary authentication or multi-step checkout processes.

---

# Part 2: Visual Design System

## 6. Visual Design System

### 6.1 Color Direction
The visual identity feels like a **premium sportswear brand**, with a restrained dark foundation and carefully controlled accent colors so that jersey photography remains the dominant visual highlight.

#### Color Palette
- **Background**: Deep near-black / charcoal (`#0B0E14` or `#0F172A`)
- **Surface**: Slightly lighter charcoal card surface (`#1E293B` or `#161E2E`)
- **Primary Text**: Off-white / warm white (`#F8FAFC`)
- **Secondary Text**: Muted neutral gray (`#94A3B8`)
- **Borders**: Extremely subtle low-contrast gray (`#334155`)
- **Brand Accent**: Deep electric crimson / athletic red (`#E11D48` or `#DC2626`)

#### Accent Usage Guidelines
Accent color is used **selectively** for:
- Primary CTA buttons
- Active navigation states
- Category selection tags & active filters
- Key badges (`NEW`, `FEATURED`)
- WhatsApp order action highlights

*Avoid*: Rainbow gradients, glowing neon borders, cyberpunk palettes, or gradients behind every section.

---

### 6.2 Typography Hierarchy

Typography creates hierarchy strictly through **scale, weight, spacing, and alignment**. Maximum of 2 font families (e.g., *Inter* / *Plus Jakarta Sans* for UI, display sans for headers).

| Element | Weight & Style | Character | Usage |
|---|---|---|---|
| **Display / Hero** | Extra-Bold / Heavy | Compact line-height, uppercase | Main hero headline ("AUTHENTIC MATCH KITS") |
| **Section Headings** | Bold | Tight tracking, clear scale | Section titles ("FEATURED GRAILS", "COLLECTION") |
| **Product Names** | Semi-Bold / Medium | High legibility | "Portugal Home Jersey 2026" |
| **Prices** | Bold | Instant visual scan, ₹ prefix | "₹1,499" |
| **Body Text** | Regular | Comfortable line-height | Descriptions, brand story, sizing details |
| **Labels & Metadata** | Medium / Uppercase | Slight letter spacing (`tracking-wider`) | Badges, kit types ("FOOTBALL • CLUB") |

*Avoid*: Decorative sports fonts, cartoon typography, distressed textures, or excessive italics.

---

### 6.3 Responsive Layout Grid

Uses a responsive editorial grid with generous negative space:

- **Desktop (1024px+)**: 12-column conceptual layout grid, wide content container, generous vertical spacing between major sections.
- **Tablet (768px - 1023px)**: Simplified 2-column or 3-column product grid, controlled horizontal padding.
- **Mobile (320px - 767px)**: Single-column or clean 2-column product grid, touch-friendly padding (minimum 48px touch targets), zero horizontal overflow.

---

### 6.4 Navigation Architecture

Desktop navigation is minimal, lightweight, and focused:

```
[ SPORTS GEAR ]    Collection    About    Contact    [ Search ]    [ Enquire on WhatsApp ]
```

*V1 Rule*: Since V1 has no cart or user accounts, do **NOT** include cart icons, login buttons, register links, wishlists, or account menus.

Mobile navigation utilizes a crisp, sliding drawer with full accessibility focus.

---

### 6.5 Product Cards & Structure

Product cards prioritize high-resolution jersey imagery with generous breathing room:

```text
+-----------------------------------+
|                                   |
|         [ PRODUCT IMAGE ]         |
|      (Front / Back Toggle)        |
|                                   |
+-----------------------------------+
  FOOTBALL · CLUB
  Real Madrid Home Jersey 2025/26
  ₹1,499
  Available: S  M  L  XL  XXL
```

#### Card Aesthetics
- Large image ratio with clean background separation
- Subtle hover scale (`scale-102`) and smooth surface transition
- Clean typography hierarchy with clear size badges
- No spinning effects, 3D cards, or heavy floating shadows

---

### 6.6 Product Image Treatment
- **Sharp & High Resolution**: Crisp, uncompressed visuals with consistent aspect ratios.
- **View Switching**: Front and Back view toggles for examining kit badges and back prints.
- **Authenticity**: Never use AI-generated or fake jerseys when real product photography is available. Preserve natural colors without applying distorting filters.

---

### 6.7 Product Badges
Badges are kept rare, small, and meaningful:
- `NEW` — Newly added catalog items
- `FEATURED` — Curated spotlight kits
- `LIMITED` — Rare retro or match-edition grails
- `MATCH VERSION` — Player-issue authentic version

*Avoid*: "HOT!!!", "BEST SELLER!!!", fake discounts, or false urgency timers.

---

### 6.8 Button Hierarchy & Labels

- **Primary Button**: Solid high-contrast surface (`"View Collection"`, `"Explore Collection"`).
- **Secondary Button**: Outlined or subtle background (`"View Details"`, `"Filter Catalog"`).
- **Product Enquiry Action**: Prominent brand CTA (`"Enquire on WhatsApp"`).

*Rule*: Never use generic e-commerce terms like *"Add to Cart"*, *"Buy Now"*, or *"Checkout"* since V1 is a showcase/catalog website.

---

### 6.9 Surfaces, Borders & Rhythm
- Dark background with slightly elevated card surfaces (`#1E293B`).
- Thin, low-contrast borders (`border-slate-800`).
- Substantial vertical section spacing (`py-16 md:py-24`) to maintain an uncluttered, calm visual rhythm.

---

### 6.10 Core Visual Rule

> **"Let the jerseys create the visual excitement. The interface should frame them, not compete with them."**

---

# Part 3: Hero, Interactions & Motion

## 7. Hero, Interactions & Motion

### 7.1 Hero Concept
The homepage hero communicates the essence of **SPORTS GEAR — premium jerseys and sportswear for people who live the game**.

It avoids conventional e-commerce hero anti-patterns (generic gradients, stock photos, floating blobs, text bloat, or "Welcome" fluff) and instead presents an **editorial sports campaign composition**:
- Bold display typography
- One dominant spotlight jersey visual
- Generous negative space
- Subtle metadata callouts (`"FOOTBALL / 2026"`, `"NEW SEASON"`)
- Prominent CTA (`"Explore Collection"`)

---

### 7.2 Hero Layout Composition

```text
SPORTS GEAR.

Premium jerseys & sportswear
for the game.

[ Explore Collection ]

                        [ DOMINANT SPOTLIGHT JERSEY ]
                        [ Subtle Floating Spec Badge ]
```

- Asymmetric desktop composition balancing typography with high-impact product photography.
- Supporting micro-labels derive strictly from actual product data (`FOOTBALL / 2025-26`, `CLUB EDITION`).

---

### 7.3 Hero Product Pointer Interactions
- **Desktop**: Restrained pointer parallax effect (subtle tilt/translation up to $\pm 5\text{px}$, smooth return to neutral position on pointer leave).
- **Mobile**: Disabled pointer parallax to preserve battery and GPU performance; subtle entrance fade instead.
- *Strict Rule*: The product must **never** rotate continuously, 3D-spin, or follow the cursor aggressively.

---

### 7.4 Scroll Introduction & Pacing
- The hero section smoothly hands off to **Featured Jerseys** and the main **Collection Grid** as the visitor scrolls down.
- Avoid multi-step cinematic animations that delay browsing access.

---

### 7.5 Product Hover & Viewport Entrance Motion

```text
Normal Card State ──(Hover)──> Subtle Image Scale (102%) + Surface Highlight ──> View Details CTA Reveal
```

- **Viewport Entrance**: Subtle upward translate ($+10\text{px} \rightarrow 0$) with opacity fade-in triggered **once** as cards enter viewport.
- No repeating scroll re-animations.

---

### 7.6 Page & Filter Interactions
- **Page Navigation**: Fast, lightweight opacity cross-fade ($150\text{ms} - 200\text{ms}$).
- **Catalog Filter & Search**: Instant, zero-delay client-side filtering without artificial spinners or full-page reloads. Instant search matches across:
  - Jersey name
  - Team name
  - Player name
  - Sport & Category
  - Season / Year

---

### 7.7 WhatsApp Enquiry Flow
- Primary product conversion trigger: `"Enquire on WhatsApp"`.
- Pre-filled message includes:
  ```text
  Hi Sports Gear! I am interested in the [Product Name].

  Size: [Selected Size]
  Price: ₹[Price]

  Is this available for delivery/pickup?
  ```
- *Rule*: Never imply an order has already been placed or process payment.

---

### 7.8 Motion Principles & Performance Rules

#### Motion Priority Scale
$$\text{Primary (Hero / Image Reveal)} \longrightarrow \text{Secondary (Hover / Nav / Modals)} \longrightarrow \text{Tertiary (Badge / Label Micro-states)}$$

#### Performance Guidelines
- **No Heavy WebGL/3D**: Do NOT introduce Three.js, heavy particle engines, full-screen video loops, or heavy blur layers.
- **CSS-First Animations**: Use lightweight GPU-accelerated CSS transforms (`transform`, `opacity`).
- **Reduced Motion**: Full compliance with `prefers-reduced-motion` to disable parallax and minimize entrance motion for users with motion sensitivities.

---

### 7.9 Unique Brand Signature Detail

**Selected Signature Element**: **The "SG" Tactical Spec Tag**
- A distinctive, minimal technical-style jersey label component (`[ SG / MATCH-ISSUE / 01 ]`) applied subtley on hero spotlight cards and product detail views, giving Sports Gear a recognizable, authentic brand signature.

---

### 7.10 Core Design Validation Questions

Every screen and animation must immediately answer:
1. **What is this?** $\rightarrow$ A premium sportswear / jersey catalog.
2. **What can I browse?** $\rightarrow$ High-quality jerseys across Football, Cricket, Basketball.
3. **What can I do next?** $\rightarrow$ Explore the collection or enquire via WhatsApp.

---

# Part 4: Collection, Product Details & Responsive UX

## 8. Collection Page Experience

The Collection page functions as a **premium sportswear catalog**, presenting jerseys with clean visual clarity and intuitive discovery controls.

### 8.1 Collection Header
- **Editorial Title**: `THE COLLECTION`
- **Sub-headline**: `Jerseys built around the game you follow.`
- Keep copy short, authoritative, and focused on catalog browsing.

### 8.2 Category Navigation Tabs
Simple, scannable category controls:
- `All` • `Football` • `Cricket` • `Basketball` • `Club Teams` • `National Teams`
- Only display categories that contain products.
- Mobile: Horizontally scrollable chip row with clear active state styling and zero overflow.

### 8.3 Search Component
- Prominent, restrained search field supporting instant query matching:
  - Product Name
  - Team Name
  - Player Name
  - Sport & Kit Category
  - Season / Year
- **Empty Search State**:
  ```text
  NO MATCHES FOUND

  Try searching for another team, player, or sport category.
  [ Reset Search & Filters ]
  ```

### 8.4 Responsive Product Grid
- **Desktop (1024px+)**: 3–4 columns with uniform card aspect ratios.
- **Tablet (768px - 1023px)**: 2–3 columns.
- **Mobile (320px - 767px)**: 2 columns for quick scanning, falling back to 1 column where high-detail view is required.
- Maintains consistent card heights, internal padding, and badge placement.

### 8.5 Collection Sorting
- V1 maintains simple catalog sorting (Price: Low/High, Newest).
- Avoid unnecessary bloat (no price sliders, complex popularity algorithms, or fake review ratings).

---

## 9. Product Detail Page (PDP) Experience

The Product Detail page focuses on **one product and one clear conversion action**.

### 9.1 PDP Layout Structure

```text
┌──────────────────────────┬────────────────────────────┐
│                          │ FOOTBALL · CLUB            │
│                          │                            │
│      LARGE PRODUCT       │ Real Madrid Home Jersey    │
│         IMAGE            │ 2025/26 Season             │
│      (Gallery View)      │                            │
│                          │ ₹1,499                     │
│                          │                            │
│                          │ Available Sizes            │
│                          │ [ S ] [ M ] [ L ] [ XL ]   │
│                          │                            │
│                          │ Product Description & Specs │
│                          │                            │
│                          │ [ Enquire on WhatsApp ]    │
└──────────────────────────┴────────────────────────────┘
```

### 9.2 Information Hierarchy
1. Kit Category & Sport (`FOOTBALL • CLUB`)
2. Product Title & Season
3. Price Tag formatted in ₹ (INR)
4. Interactive Size Selector (`S`, `M`, `L`, `XL`, `XXL`)
5. Product Description & Fabric/Fit Specs
6. Availability Status (`In Stock`, `Limited Edition`, `Pre-Order`)
7. **WhatsApp Enquiry CTA Button**

### 9.3 Product Image Gallery
- Large main image with secondary gallery thumbnails (Front View, Back View, Badge Closeup).
- Touch-friendly swipeable carousel for mobile devices.

### 9.4 Size Selection State
- Clear interactive buttons for sizes (`S`, `M`, `L`, `XL`, `XXL`).
- Visually disabled styling for unavailable sizes (`opacity-40 cursor-not-allowed line-through`).
- Selected size highlighted with active accent border.

### 9.5 WhatsApp Enquiry Action
- CTA Label: **`Enquire on WhatsApp`**
- Auto-generated pre-filled inquiry text:
  ```text
  Hi Sports Gear! I am interested in the Real Madrid Home Jersey 2025/26.
  Size: L
  Price: ₹1,499

  Is this item available for delivery or pickup?
  ```
- *Strict Rule*: The button must never claim payment is completed or stock is reserved—it strictly opens an inquiry conversation.

### 9.6 Availability Badges
- Derived directly from product data (`In Stock`, `Currently Unavailable`, `Contact Store for Availability`).
- Do NOT show fake scarcity triggers like *"Only 2 left!"*.

---

## 10. Brand Information Pages (About & Contact)

### 10.1 About Page
- Concise brand story highlighting Sports Gear's passion for authentic sportswear and jersey culture.
- Summarizes sports categories covered and commitment to quality.
- *Rule*: Never invent fake founding dates, client counts, or false official affiliations.

### 10.2 Contact Page
- Practical, scannable contact hub:
  - **Store Name**: Sports Gear
  - **Address**: 123 Stadium Road, Sports Hub District, Mumbai, India (Placeholder)
  - **Phone**: +91 98765 43210 (Placeholder)
  - **WhatsApp**: Configured centrally via `src/config/store.ts`
  - **Opening Hours**: Mon - Sat: 10:00 AM - 9:00 PM
  - **Instagram**: `@sportsgear_official`
  - **Google Maps**: Interactive location embed component
- No complex contact forms required for V1; direct WhatsApp & phone contact prioritized.

---

## 11. Mobile UX & Responsive Quality Standards

- **Touch Targets**: Minimum 48px $\times$ 48px touch area for all buttons, filter tabs, size options, and navigation links.
- **Horizontal Overflow Prevention**: Zero unexpected horizontal scrolling on page containers (`overflow-x-hidden` on main wrapper).
- **Sticky Mobile WhatsApp Action**: Compact bottom-fixed bar on mobile product detail pages for easy inquiry triggering without obscuring content.

---

## 12. Responsive Image Strategy

- **Formats**: WebP format with PNG/JPEG fallbacks.
- **Loading Behavior**: `eager` loading for main hero image; `lazy` loading for all below-the-fold catalog cards.
- **Aspect Ratios**: Explicit CSS aspect ratios (`aspect-[4/5]` or `aspect-square`) to eliminate Layout Shifts (CLS).

---

## 13. Accessibility (a11y) & Fallback States

- **Keyboard Trapping & Focus**: Visible focus rings (`focus-visible:ring-2 focus-visible:ring-rose-500`) for all interactive elements.
- **Alt Text**: Descriptive `alt` attributes on all product visuals (e.g., `"Front view of Portugal Home Jersey 2026"`).
- **Fallback States**:
  - *Empty Collection*: "NOTHING HERE YET. Try another category."
  - *Missing Product / 404*: "PRODUCT NOT FOUND. This product may no longer be available. [ Back to Collection ]"

---

## 14. Final Design Principle

$$\text{Bold Typography} + \text{Strong Product Imagery} + \text{Editorial Spacing} + \text{Restrained Motion} + \text{Clear Conversion}$$

The V1 design prioritizes:
$$\textbf{Brand} \longrightarrow \textbf{Discovery} \longrightarrow \textbf{Product} \longrightarrow \textbf{Enquiry}$$
