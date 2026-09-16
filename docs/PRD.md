# Product Requirements Document (PRD): Sports Gear

## 1. Executive Summary

**Sports Gear** is a premium sportswear and jersey store. This document defines the product requirements for building a **stylish, visually distinctive commercial catalog website** designed to showcase jerseys, highlight pricing and available sizes, and drive direct customer inquiries via WhatsApp and store contact channels.

Unlike generic e-commerce templates, Sports Gear is crafted to feel like an authentic, high-end commercial sportswear brand with strong visual identity, tactile product interactions, and zero buyer friction (no account creation or complex checkout needed).

---

## 2. Product Goals & Vision

1. **Brand Storytelling**: Establish Sports Gear as an authentic, high-energy sportswear brand.
2. **Featured Showcase**: Highlight top-trending, authentic, and retro jerseys in a sleek visual format.
3. **Frictionless Discovery**: Enable visitors to easily search, filter, and inspect jerseys with front/back views, prices in INR (₹), and size availability.
4. **Direct Customer Conversion**: Drive instant sales inquiries via pre-formatted WhatsApp messages and direct store contact channels.
5. **Production Readiness**: Build a fast, fully responsive, SEO-friendly catalog site ready for immediate deployment.

---

## 3. Business Model & Core Flow

- **Model**: Showcase & Catalog Website (Direct Lead Generation).
- **Checkout**: No online cart checkout or user login required.
- **Pricing Currency**: Indian Rupees (₹ / INR).
- **Conversion Mechanism**: 
  - Visitors select a jersey, size, and version.
  - Clicking **"Enquire / Order on WhatsApp"** opens a WhatsApp chat pre-filled with the exact item name, selected size, price, and product link.
- **Placeholders**: Standard placeholder contact details (address, phone, social handles) until real business details are provided. Do not invent actual business information.

---

## 4. V1 Core Pages

| Page | Purpose & Core Elements |
|---|---|
| **Home** | Sports Gear branding, hero section, featured product highlight, collection CTA, featured products, categories, new arrivals, brand intro, WhatsApp CTA, store contact/location block. |
| **Collection** | Complete catalog grid, search bar, multi-category filter tabs, sorting, stock status & badges. |
| **Product Details** | High-res imagery (main + additional views), price tag, sport, team, player, season, available sizes, description, stock status, instant WhatsApp enquiry CTA. |
| **About** | Sports Gear brand story, commitment to quality kits, authenticity guarantee, store highlights. |
| **Contact** | Store location map/address, contact numbers, operating hours, direct contact form, social links (Instagram, WhatsApp). |

---

## 5. V1 Detailed Page Requirements

### 5.1 Homepage Requirements
The homepage must feature a clean, impactful visual hierarchy without becoming unnecessarily long:
1. **Sports Gear Branding & Navigation**: Header with logo, navigation links, search trigger, and quick WhatsApp action button.
2. **Strong Hero Section**: High-impact banner featuring headline kits ("Authentic Match Kits & Retro Grails") with clear brand messaging.
3. **Featured Jersey / Hero Highlight**: Highlighted spotlight jersey of the week with instant view action.
4. **Primary CTA**: Prominent button directing visitors to **"Explore Collection"**.
5. **Featured Products**: Grid/carousel showcasing top-selling jerseys.
6. **Product Categories**: Visual category tiles (*Football*, *Cricket*, *Basketball*, *Club Teams*, *National Teams*).
7. **New Arrivals**: Curated section displaying latest kit additions with "NEW" badges.
8. **Short Store / Brand Introduction**: Concise summary of Sports Gear's mission, quality commitment, and kit authenticity.
9. **Contact / WhatsApp CTA Banner**: Eye-catching callout pushing visitors to chat directly on WhatsApp.
10. **Store Location & Contact Information**: Footer-adjacent block with store hours, address placeholder, phone, and Instagram handle.

---

### 5.2 Collection Page Requirements
The collection page allows visitors to browse the complete jersey catalog cleanly.

#### 5.2.1 Product Cards
Each product card must display:
- **Product Image**: High-resolution image (with front/back view toggle on hover/click).
- **Product Name**: Official jersey title.
- **Team / Player**: Associated club or national team, plus player name when applicable.
- **Season**: Kit year/season (e.g. *2025/26*, *Retro 1998*).
- **Price**: Displayed in Indian Rupees (e.g. *₹1,499*).
- **Relevant Badges**: Visual indicators such as `NEW`, `FEATURED`, `MATCH VERSION`, `RETRO`.

#### 5.2.2 Search Capability
Real-time, instant search support filtering products by:
- Jersey name
- Team name
- Player name
- Sport category
- Season / Year

#### 5.2.3 Filter Capabilities
Simple, intuitive, and non-overwhelming filter criteria:
- **Sport**: Football, Cricket, Basketball
- **Category / Kit Type**: Club Teams, National Teams, Retro Grails, Special Edition
- **Team Type**: International, Domestic Club
- **Season**: Current Season, Retro / Vintage

---

### 5.3 Product Details Page Requirements
Each jersey has a dedicated detail view displaying:
- **Product Name & Title**
- **Large Product Image Gallery**: Primary high-res visual + additional gallery thumbnails (Front, Back, Collar/Badge close-up).
- **Price**: Prominently formatted in ₹ (INR).
- **Key Specifications Grid**: Sport, Team, Player (when applicable), Season/Year.
- **Available Sizes**: Interactive size selector (`S`, `M`, `L`, `XL`, `XXL`).
- **Product Description**: Material composition, fit specs (Slim Fit / Standard), washing instructions.
- **Availability / Status**: Clear stock status (`In Stock`, `Limited Stock`, `Pre-Order`).
- **WhatsApp Enquiry CTA**: Prominent button triggering direct chat.

---

### 5.4 WhatsApp Integration & Centralized Config

- **Checkout Replacement**: WhatsApp serves as the primary inquiry & ordering channel in place of online checkout.
- **Pre-filled Message Format**:
  > *"Hi, I'm interested in the [Product Name].*\n\n*Size: [Selected Size]*\n*Price: ₹[Price]*\n\n*Is this available?"*

- **Centralized Configuration Requirement**:
  - The WhatsApp business phone number **MUST** be stored in a single, centralized configuration file (e.g., `src/config/store.ts`).
  - **Do NOT hardcode** phone numbers across individual components or pages.

---

### 5.5 Store Information & Placeholders

Store information block must include:
- **Store Name**: Sports Gear
- **Address**: Placeholder location string (e.g., *"123 Stadium Road, Sports Hub District, Mumbai, India"*)
- **Phone Number**: Placeholder contact number
- **WhatsApp Number**: Configured via central store config
- **Instagram Handle**: `@sportsgear_official` (or placeholder)
- **Opening Hours**: Standard operating hours placeholder (e.g., *"Mon - Sat: 10:00 AM - 9:00 PM"*)
- **Google Maps Location**: Interactive embed component / map placeholder link

*Constraint*: Do not invent fake actual business information—use standardized placeholders until real information is provided by the client.

---

## 6. Product Data Architecture

All product information must be centralized in a structured data layer (e.g., `src/data/products.ts`). Adding a new jersey must only require adding an entry to this data file—**never editing UI components**.

Each product data object must support:
- `id`: Unique string identifier (e.g., `"portugal-home-2026"`).
- `name`: Product title (e.g., `"Portugal Home Jersey 2026"`).
- `sport`: Sport category (`"Football"`, `"Cricket"`, `"Basketball"`).
- `category`: Kit classification (`"National Teams"`, `"Club Teams"`, `"Retro Grails"`, `"Special Edition"`).
- `team`: Associated team (e.g., `"Portugal"`, `"Real Madrid"`).
- `player`: Optional player name (e.g., `"Cristiano Ronaldo"`).
- `season`: Season/Year string (e.g., `"2025/26"`, `"Retro 1998"`).
- `price`: Numeric price value (e.g., `1499`).
- `currency`: Currency code (`"INR"` / `"₹"`).
- `images`: Array of image URL strings (`[frontView, backView, detailView]`).
- `sizes`: Array of available size strings (`["S", "M", "L", "XL", "XXL"]`).
- `description`: Detailed product description text.
- `featured`: Boolean indicating home featured status.
- `newArrival`: Boolean indicating new arrival status.
- `availability`: Stock status string (`"In Stock"`, `"Limited Stock"`, `"Pre-Order"`).

---

## 7. Quality, Performance & Accessibility Constraints

### 7.1 Responsive Design
- The website must provide a first-class user experience across:
  - **Mobile Phones** (320px - 480px)
  - **Tablets** (768px - 1024px)
  - **Laptops & Desktops** (1024px+)
- Mobile layout must be treated as a first-class design priority (touch targets 48px+, responsive hamburger navigation, swipeable galleries).

### 7.2 Performance Requirements
- **Instant Load**: Fast loading times with minimal bundle overhead.
- **Image Optimization**: Responsive images, WebP format support, lazy loading for below-the-fold assets.
- **Lightweight Execution**: Minimal third-party dependencies, efficient JavaScript execution.
- **Smooth Animations**: Smooth micro-interactions without heavy CSS/JS effects that degrade FPS or battery life.

### 7.3 Accessibility (a11y)
- **Semantic Structure**: Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`).
- **Heading Hierarchy**: Strict H1 -> H2 -> H3 logical structure.
- **Keyboard Navigation**: Accessible buttons, links, search triggers, and modal focus traps.
- **Images**: Mandatory descriptive `alt` text for all product visuals.
- **Contrast & Focus**: High contrast ratios meeting WCAG AA standards, clearly visible focus rings for keyboard users.

### 7.4 SEO Requirements
- **Meta Structure**: Unique `<title>` and `<meta name="description">` tags per route.
- **Open Graph Metadata**: OG tags (`og:title`, `og:description`, `og:image`, `og:url`) for rich social media preview cards on WhatsApp, Twitter, and Instagram.
- **Search Engine Assets**: Static `robots.txt` and `sitemap.xml` file generation.
- **Product Semantics**: Structured schema markup readiness for product catalog indexing.
- *Note*: Search engine ranking results are governed by external search engine algorithms and are not guaranteed.

---

## 8. Explicitly OUT OF SCOPE for V1

To ensure zero unnecessary complexity and maintain a lean, high-performing catalog:

Do **NOT** implement:
- User login / User registration / Customer accounts / Password reset / Authentication
- Shopping cart persistent state
- Checkout flow
- Online payment integrations (Razorpay, Stripe, UPI processing)
- Customer database
- Order management system
- Inventory management dashboard
- Admin dashboard / CMS / Backend API
- Database infrastructure (unless explicitly required by a future version)

---

## 9. Future Expansion (Post-V1 Possibilities Only)

The underlying architecture should remain extensible for potential future product expansion, but none of these should be implemented in V1:
- Shorts
- Tracksuits
- Football boots
- Cricket equipment
- Basketball products
- Sports accessories
- Custom jerseys

*Constraint*: These are future possibilities only. Do NOT implement them in V1 unless explicitly requested.

---

## 10. Success Criteria

The V1 website is successful when:
1. Visitors immediately understand what Sports Gear is.
2. The website feels like a professional sportswear brand.
3. Visitors can quickly browse jerseys.
4. Product information is easy to understand.
5. Prices are clearly visible.
6. Available sizes are clear.
7. WhatsApp enquiry is easy to use.
8. Store contact information is easy to find.
9. The website works properly on mobile and desktop.
10. The website loads quickly.
11. The website is SEO-ready.
12. New products can be added easily.
13. The code remains maintainable.
14. No unnecessary backend, authentication, payment, database, or admin functionality is introduced.

---

## 11. Development Principle

**Prioritization Hierarchy:**
$$\text{Visual quality} \longrightarrow \text{Usability} \longrightarrow \text{Performance} \longrightarrow \text{Maintainability} \longrightarrow \text{Feature quantity}$$

- Build the smallest system that provides a high-quality customer-facing experience.
- The underlying implementation should remain simple even though the final website looks premium and sophisticated.

---

## 12. Documentation Relationship

- **`PRD.md`**: Defines **WHAT** the product needs (Product Requirements Document).
- **`Design.md`**: Visual direction, color palettes, and typography.
- **`AppFlow.md`**: User journeys and page navigation flows.
- **`Schema.md`**: Data structure and TypeScript type definitions.
- **`TRD.md`**: Technical architecture, stack choices, and project structure.
- **`ImplementationPlan.md`**: Development sequence and step-by-step milestones.
- **`Rules.md`**: Engineering guidelines and coding standards.
- **`Tracker.md`**: Feature progress and verification checklist.

*Note*: Do not duplicate detailed content from those documents inside the PRD.
