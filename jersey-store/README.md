# Sports Gear — Authentic Kit Vault ⚡

<div align="center">

![Sports Gear Banner](../screenshots/01-hero-showcase.png)

**A luxury digital sportswear catalog and interactive kit discovery experience.**  
*Engineered for premium kit collectors, football enthusiasts, and atelier sourcing.*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📖 Overview

**Sports Gear** is designed from the ground up as a **bespoke digital kit catalog and specimen showcase** rather than a generic e-commerce website. 

Instead of traditional cart and checkout flows, it pairs **high-fidelity editorial presentation** with a **zero-friction WhatsApp Concierge procurement workflow**, allowing collectors to explore tactile match specimens and inquire directly with Mumbai-based kit curators.

---

## ✨ Key Features & Visual Walkthrough

### 1. Interactive Kit Discovery & Macro Telemetry
The centerpiece hero stage showcases iconic match kits with realistic 3D cursor parallax, atmospheric volumetric lighting, floating studio particles, and a **4-angle technical inspection dock**:
- **01 / Front View**: Full silhouette framing with dynamic entrance typography.
- **02 / Back Profile**: Seamless 3D flip rotation displaying official match nameset alignment.
- **03 / Club Crest**: High-density 3.0× macro zoom with gold bullion embroidery specifications.
- **04 / Fabric Weave**: 2.9× zoom revealing engineered Dri-FIT ADV breathability zones and collar trim.

<div align="center">
  <img src="../screenshots/01-hero-showcase.png" alt="Interactive Kit Hero Showcase" width="100%" />
</div>

---

### 2. The Vault & Archival Collection
A curated registry of authentic club and national kits featuring:
- **Instant Multi-Vector Search**: Filter effortlessly across product name, club, player, sport, season, and edition.
- **Disciplines & Classifications**: Categorized across *Football*, *Cricket*, *Basketball*, *Club Heritage*, and *National Teams*.
- **Quick-Flip Specimen Cards**: Instant front/back perspective flip, live stock badges, and verified INR pricing (`₹1,499`).

<div align="center">
  <img src="../screenshots/02-collection-vault.png" alt="Collection Vault and Search Filter" width="100%" />
</div>

---

### 3. Editorial Brand Story & Craftsmanship
An immersive atelier narrative celebrating the culture of the pitch — preserving the tactile heritage of match-worn threads, embroidered shields, and legendary player numbers.

<div align="center">
  <img src="../screenshots/03-about-story.png" alt="About and Brand Story" width="100%" />
</div>

---

### 4. Direct WhatsApp Concierge & 3D Interactive Carousel
- **Deep-Linked Inquiry Engine**: Eliminates checkout friction. Generates pre-formatted WhatsApp payloads containing item name, catalog ID, selected size (`S`, `M`, `L`, `XL`, `XXL`), and pricing.
- **3D Cylinder Carousel**: Interactive gesture-driven 3D gallery showcasing hero kit rotations and match crest details.
- **Atelier Location Switch**: High-contrast interactive dark-mode map and showroom visiting guide.

<div align="center">
  <img src="../screenshots/04-contact-concierge.png" alt="Contact Concierge & 3D Carousel" width="100%" />
</div>

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with Custom Design Tokens |
| **Motion & 3D** | [Framer Motion](https://www.framer.com/motion/) + Dynamic Spring Physics |
| **Routing** | [React Router v7](https://reactrouter.com/) with Code-Split `React.lazy()` Routes |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter** | [Oxlint](https://oxc.rs/) (Sub-30ms High-Performance Linting) |

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🌐 Deploy to Vercel

1. Import the repository on [Vercel](https://vercel.com).
2. Set **Root Directory** to `jersey-store`.
3. Set **Framework Preset** to `Vite`.
4. Click **Deploy**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
