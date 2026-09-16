# Project Rules & Development Constraints: Sports Gear

## 1. Product Scope Rule

**Sports Gear V1** is a **premium sportswear showcase and product catalog website**. It is NOT a full e-commerce platform.

The core product loop is strictly:
$$\textbf{Discover} \longrightarrow \textbf{Browse} \longrightarrow \textbf{View Product} \longrightarrow \textbf{Enquire}$$

---

## 2. Non-Negotiable Architecture Constraints

### 2.1 E-Commerce Features Exclusion (Explicitly OUT OF SCOPE)
Do **NOT** implement:
- User login / User registration / Customer accounts / Password reset
- Shopping cart persistent state
- Checkout flow
- Online payment integrations (Razorpay, Stripe, UPI checkout)
- Order management or tracking
- Customer database or Auth services
- Admin dashboard, CMS, or Seller interface
- Custom backend API servers or microservices
- Databases (PostgreSQL, MongoDB, Firebase, Supabase)

### 2.2 Frontend-First Stack Rule
The application uses a lightweight, frontend-first stack:
- **React 18+**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Router v6+**.
- All data resides centrally in local TypeScript datasets (`src/data/products.ts`, `src/data/categories.ts`, `src/data/store.ts`).

---

## 3. Data & Commercial Integrity Rules

### 3.1 Single Source of Truth
- Product information exists exclusively inside `src/data/products.ts`.
- Components consume data via props/getters (`ProductCard(product)`). **Zero hardcoded product names, prices, or sizes** inside JSX templates.

### 3.2 Factual Business & Product Claims
- **No Invented Details**: Never fake phone numbers, addresses, opening hours, or social handles.
- **No Fake Product Claims**: Never automatically label products as "official", "authentic", "match-worn", or "licensed" unless verified by store data.
- **No Fake Urgency**: Never inject fake countdown timers, fake stock counters (`"Only 2 left!"`), or fake discount percentages.

### 3.3 WhatsApp Enquiry Semantics
- Primary CTAs must read **`"Enquire on WhatsApp"`** or **`"Contact on WhatsApp"`**.
- Never use `"Buy Now"`, `"Add to Cart"`, or `"Checkout"`.
- Generated WhatsApp messages format clearly with product name, price, and selected size, but must **never** claim an order has been placed or paid for.

---

## 4. Visual & Experience Design Rules

### 4.1 Visual Identity Preservation
- Aesthetics: **Premium Sportswear $\times$ Football Culture $\times$ Editorial Design**.
- Deep charcoal background (`#0B0E14`), off-white typography (`#F8FAFC`), elevated card surfaces (`#1E293B`), and electric crimson red accent (`#DC2626`).

### 4.2 Visual Anti-Patterns (What to Avoid)
- **NO** generic Shopify/WooCommerce template styling
- **NO** cyberpunk neon, glowing borders, or glitch effects
- **NO** heavy glassmorphism or WebGL/3D Canvas rendering engines
- **NO** rainbow gradients or visually noisy background textures

### 4.3 Motion & Animation Guidelines
- Animations must be CSS-first targeting GPU-accelerated properties (`transform`, `opacity`, `scale`).
- **NO** heavy spin, bounce, shake, or long continuous scroll loops.
- Full compliance with `prefers-reduced-motion`.

---

## 5. Mobile & Quality Standards

- **Mobile First-Class**: Fully tested across 360px – 1440px+ viewports with **zero horizontal overflow** (`overflow-x-hidden`).
- **Touch Target Standard**: Minimum 48px $\times$ 48px touch area for all interactive chips, buttons, links, and size selectors.
- **No Hover-Only Triggers**: All core functionality must remain fully operational via touch and keyboard navigation.

---

## 6. Accessibility & Semantic HTML

- Mandatory use of semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Interactive elements must be `<button>` or `<a>` elements. **Clickable `<div>` elements are strictly forbidden**.
- Visible focus rings (`focus-visible:ring-2 focus-visible:ring-rose-500`) for keyboard navigation.
- Descriptive `alt` text on all product visuals (e.g., `"Front view of Real Madrid Home Jersey 2025/26"`).

---

## 7. Component & Codebase Discipline

- Keep components modular, decoupled, and reusable (`Navbar`, `Footer`, `ProductCard`, `ProductGrid`, `ProductGallery`, `ProductInfo`, `CategoryFilter`, `SearchBar`, `WhatsAppButton`).
- Avoid premature abstraction and unnecessary npm package dependencies.
- `npm run build` / `npx tsc` must compile with **zero TypeScript errors** before pushing to GitHub.

---

## 8. Golden Rule

$$\text{When deciding between implementation choices:}$$
$$\textbf{Choose the simpler approach that preserves visual quality, usability, performance, and functionality.}$$
