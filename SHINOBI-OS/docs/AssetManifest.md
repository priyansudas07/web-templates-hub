# Asset Manifest & Media Specification
# SHINOBI OS — Classified Shinobi Intelligence

---

## 1. Document Metadata & Context

| Attribute | Details |
| :--- | :--- |
| **Document Title** | Asset Manifest & Media Specification: SHINOBI OS |
| **Document ID** | ASSET-SHINOBI-001 |
| **Version** | 1.0.0 (Asset Architecture Baseline) |
| **Status** | Approved for Implementation Planning |
| **Last Updated** | 2026-10-10 |
| **Author** | Senior Technical Artist, 3D Environment Designer & Frontend Performance Specialist |
| **Primary References** | `SHINOBI-OS/docs/PRD.md` (v1.0.0), `SHINOBI-OS/docs/AppFlow.md` (v1.0.0), `SHINOBI-OS/docs/Design.md` (v1.0.0), `SHINOBI-OS/docs/Schema.md` (v1.0.0), `SHINOBI-OS/docs/TRD.md` (v1.0.0) |
| **Repository Path** | `SHINOBI-OS/docs/AssetManifest.md` |

---

## 2. Asset Strategy & Art Direction

### 2.1 Environmental Atmosphere
The visual identity of **SHINOBI OS** evokes a quiet midnight intelligence post overlooking the misty silhouettes of the Hidden Leaf Village (*Konohagakure*). The asset strategy prioritizes:
- **Atmospheric Restraint**: Deep nocturnal blues and charcoal black gradients rather than flashy neon lighting.
- **Controlled Lighting & Depth**: Subtle moonlit directional rim-lighting (`#94A3B8`) paired with soft emerald ground ambiance (`#10B981`).
- **Kinetic Embers & Wind**: Extremely lightweight instanced particle foliage simulating wind-blown leaves and chakra resonance.
- **Verified Portfolio Assets**: Professional screenshots, genuine project thumbnails, vector technology icons, and ATS-friendly PDF documents.

### 2.2 Intellectual Property & Licensing Guardrails
- ⚠️ **Strict Copyright Prohibition**: Under no circumstances shall copyrighted anime screen-captures, ripped character models (e.g. Naruto, Sasuke, Kakashi), official studio logos (Studio Pierrot, TV Tokyo, Shueisha), or original soundtrack (OST) audio files be embedded in this repository.
- **Original & Open-Source Media**: All environmental silhouettes, seal vectors, audio synthesis routines, and iconography must be original geometric creations, CC0 royalty-free, or licensed under permissive open-source licenses (MIT, SIL Open Font License, ISC).
- **Commercialization Warning**: If this codebase is distributed as a public template, commercialized, or exhibited professionally, all thematic Naruto-inspired styling must rely exclusively on generic fictional ninja tropes (shuriken, scrolls, seals) to avoid trademark infringement.

---

## 3. Comprehensive Asset Inventory

The table below catalogs all required and optional media assets. Stable identifiers (`ENV-`, `MOD-`, `TEX-`, `IMG-`, `DOC-`, `FONT-`, `ICON-`, `SND-`) are used across the codebase:

| Asset ID | Asset Name | Purpose / Usage | Type | Intended Path | Req / Opt | Source / Creation Method | License & Attribution | Optimization Targets | Fallback Strategy | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ENV-001` | `village-silhouette.svg` | Distant roofline & cliff horizon silhouette | Vector SVG | `src/assets/environment/village-silhouette.svg` | Required | Original geometric SVG path | Original Work / MIT | $\le 12\text{ KB}$, gzip compressed | CSS procedural horizon gradient | Planned |
| `ENV-002` | `leaf-seal-cipher.svg` | Awakening intro focal seal & watermark | Vector SVG | `src/assets/environment/leaf-seal-cipher.svg` | Required | Original geometric spiral seal | Original Work / MIT | $\le 8\text{ KB}$, minified paths | CSS unicode emblem `"葉"` | Planned |
| `ENV-003` | `scanline-overlay.svg` | Subtle CRT scanline monitor pattern | Vector SVG | `src/assets/textures/scanline-overlay.svg` | Optional | Data-URI SVG repeat pattern | Original Work / MIT | $\le 1\text{ KB}$, 3% opacity | Disabled (clean flat panel) | Planned |
| `MOD-001` | `chakra-core.glb` | Interactive 3D chakra resonant orb | 3D glTF/GLB | `public/assets/models/chakra-core.glb` | Optional | Procedural Blender low-poly icosahedron | Original Work / MIT | $\le 45\text{ KB}$, Draco compressed | 2D Canvas SVG glow circle | Planned (Pending evaluation) |
| `MOD-002` | `stylized-leaf.glb` | Instanced foliage particle mesh | 3D glTF/GLB | `public/assets/models/stylized-leaf.glb` | Optional | Low-poly single quad leaf (12 tris) | Original Work / MIT | $\le 8\text{ KB}$, untextured vertex-color | 2D HTML5 canvas particles | Planned |
| `IMG-001` | `sports-gear-thumb.webp` | Flagship Mission thumbnail preview | WebP Image | `public/assets/projects/sports-gear-thumb.webp` | Required | Captured project screenshot | Developer Original / MIT | $800 \times 450\text{px}$, $\le 65\text{ KB}$ | Branded CSS gradient monogram | Planned |
| `IMG-002` | `samvad-thumb.webp` | Project thumbnail preview | WebP Image | `public/assets/projects/samvad-thumb.webp` | Optional | Real project architecture diagram | Developer Original / MIT | $800 \times 450\text{px}$, $\le 65\text{ KB}$ | Branded CSS gradient monogram | Planned |
| `IMG-003` | `vdevpulse-thumb.webp` | Project thumbnail preview | WebP Image | `public/assets/projects/vdevpulse-thumb.webp` | Optional | Real telemetry dashboard capture | Developer Original / MIT | $800 \times 450\text{px}$, $\le 65\text{ KB}$ | Branded CSS gradient monogram | Planned |
| `IMG-004` | `profile-avatar.webp` | Developer portrait / tactical avatar | WebP Image | `public/assets/profile/profile-avatar.webp` | Optional | Professional developer portrait | Developer Personal | $400 \times 400\text{px}$, $\le 40\text{ KB}$ | Stylized vector ninja mask avatar | To be provided by user |
| `DOC-001` | `Developer_Resume.pdf` | ATS-compliant professional resume | Document | `public/assets/docs/Developer_Resume.pdf` | Required | Exported ATS-friendly PDF | Developer Personal | $\le 250\text{ KB}$, text-embedded | In-browser formatted modal summary | To be provided by user |
| `FONT-001`| `inter-variable.woff2` | System UI, headings & body text | WOFF2 Font | `public/assets/fonts/inter-variable.woff2` | Required | Self-hosted Inter font file | SIL Open Font License (OFL) | $\le 85\text{ KB}$, latin subset | System sans-serif (`-apple-system`) | Planned |
| `FONT-002`| `fira-code-latin.woff2` | Terminal shell, telemetry & badges | WOFF2 Font | `public/assets/fonts/fira-code-latin.woff2` | Required | Self-hosted Fira Code font file | SIL Open Font License (OFL) | $\le 65\text{ KB}$, latin subset | System monospace (`ui-monospace`) | Planned |
| `ICON-001`| `lucide-react` | Universal UI vector icons (terminal, etc.)| SVG Library| Bundled NPM package | Required | Open-source Lucide React library | ISC License | Tree-shaken inline SVGs ($\le 25\text{ KB}$) | Unicode symbols | Confirmed |
| `ICON-002`| `favicon.svg` | Ninja shuriken vector browser icon | Vector SVG | `public/favicon.svg` | Required | Original vector shuriken SVG | Original Work / MIT | $368\text{ bytes}$ | Standard browser default | **Verified Present** |
| `SND-001` | `WebAudio-Synth` | Procedural clicks, sweeps & alarms | Synthesizer | `src/utils/soundSynth.ts` | Optional | Web Audio API Oscillator synthesis | Native Browser API / MIT | **0 KB network transfer** | Silent operation | Confirmed Architecture |

---

## 4. Cinematic Environment Assets

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CINEMATIC ENVIRONMENT COMPOSITION                    │
├────────────────────────────────────────────────────────────────────────┤
│ Layer 4: Viewport HUD & Terminal Windows (Z: 10, DOM elements)         │
│ Layer 3: Floating Foliage / Leaves Particle Layer (R3F InstancedMesh)  │
│ Layer 2: Volumetric Nocturnal Fog (Three.js Fog / CSS backdrop)        │
│ Layer 1: Distant Leaf Village Silhouette Horizon (Vector SVG Mask)     │
│ Layer 0: Void Onyx Sky Gradient (#07080C -> #0E121B Radial)            │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Background Sky & Nocturnal Horizon (`ENV-001`)**:
   - *Implementation Approach*: Scalable Vector Graphic (SVG) horizon mask combined with CSS radial gradients.
   - *Rationale*: Zero pixelation on 4K displays, zero raster texture overhead, and renders instantaneously without GPU latency.
2. **Atmospheric Fog & Mist**:
   - *Implementation Approach*: Three.js exponential scene fog (`scene.fog = new THREE.FogExp2('#07080C', 0.08)`).
   - *Fallback*: CSS multi-stop linear gradient vignette.
3. **Floating Leaves & Wind Embers (`MOD-002`)**:
   - *Implementation Approach*: Single low-polygon instanced geometry (`THREE.InstancedMesh`) rendered with a vertex-shader wobble.
   - *Budget*: Maximum 35 leaf instances on desktop; automatically disabled on mobile ($< 768\text{px}$).

---

## 5. Interactive 3D Asset Specifications

### 5.1 Geometry, Material & Mesh Budgets

| Asset Dimension | Desktop Specification | Mobile / Fallback Specification |
| :--- | :--- | :--- |
| **glTF Format** | `.glb` binary container with Draco compression | 3D unmounted; rendered via 2D CSS mesh |
| **Maximum Polygon Count** | $\le 1,200$ triangles total across entire scene | $0$ triangles (Canvas disabled) |
| **Texture Dimensions** | $\le 512 \times 512\text{px}$ (Uncompressed RGBA) | No 3D textures loaded |
| **Material Count** | Maximum 2 draw-call materials (`MeshStandardMaterial`) | Pure CSS variables |
| **Resource Disposal** | `geometry.dispose()` and `material.dispose()` on unmount | Automatic garbage collection |
| **Device Pixel Ratio (DPR)** | Clamped to `Math.min(window.devicePixelRatio, 1.5)` | N/A |

### 5.2 Chakra Core Visual (`MOD-001`) Evaluation
- **Architectural Recommendation**: The chakra core should be implemented as an **HTML5 Canvas 2D glow shader** or pure CSS pulse element inside the terminal header rather than loading an external 3D mesh. This saves $\sim 45\text{ KB}$ of network download and avoids extra WebGL draw calls while delivering identical visual fidelity.

---

## 6. Portfolio & Content Assets

### 6.1 Project Thumbnails & Detail Imagery
- **Aspect Ratio**: Standard widescreen $16:9$ ($800 \times 450\text{px}$).
- **Format**: Optimized WebP with quality level $80$.
- **Asset Size Limit**: $\le 65\text{ KB}$ per image.
- **Branded Fallback**: If an image is missing or in development, the project card automatically renders a tactical CSS monogram showing the project's codename and primary technology badge over a dark slate pattern (`#111622`).

### 6.2 ATS Resume Document (`DOC-001`)
- **Format**: Clean PDF with embedded fonts and selectable text (ATS machine-readable).
- **Target Size**: $\le 250\text{ KB}$.
- **Fallback State**: If the PDF is temporarily absent during local evaluation, the UI reads `ResumeAsset.isAvailable === false` and displays an accessible modal summary of career credentials with the label `"Specimen currently under revision"`.

---

## 7. Typography & Iconography Assets

### 7.1 Font Hosting & Delivery Strategy
To ensure zero third-party tracking, 100% offline development resilience, and zero layout shifts, all fonts are **self-hosted modern WOFF2 files** in `public/assets/fonts/`:

| Font Family | Files & Subsets | Target Weight | License | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| **Inter Variable** | `inter-latin-var.woff2` (Weights: 400, 600, 700) | $\le 85\text{ KB}$ | SIL OFL | Extreme legibility on high-density dark mode screens. |
| **Fira Code** | `fira-code-latin.woff2` (Weights: 400, 600) | $\le 65\text{ KB}$ | SIL OFL | Native monospace ligatures for terminal logs and badges. |

### 7.2 Interface Icons (`ICON-001`)
- **Source**: `lucide-react` (v1.46+).
- **Compilation**: Tree-shaken at build time into pure inline SVG nodes.
- **Rules**: Consistent $1.5\text{px}$ stroke width; uniform $18\text{px}$ or $20\text{px}$ viewports.

---

## 8. Asset Directory Structure & Naming Conventions

All static assets are organized under `public/assets/` using strict lowercase kebab-case:

```
public/
├── assets/
│   ├── docs/
│   │   └── Developer_Resume.pdf
│   ├── environment/
│   │   ├── village-silhouette.svg
│   │   └── leaf-seal-cipher.svg
│   ├── fonts/
│   │   ├── inter-latin-var.woff2
│   │   └── fira-code-latin.woff2
│   ├── models/
│   │   ├── chakra-core.glb         (Optional)
│   │   └── stylized-leaf.glb       (Optional)
│   ├── profile/
│   │   └── profile-avatar.webp     (Optional)
│   ├── projects/
│   │   ├── sports-gear-thumb.webp
│   │   ├── samvad-thumb.webp
│   │   └── vdevpulse-thumb.webp
│   └── textures/
│       └── scanline-overlay.svg
├── favicon.svg                      (Verified Present)
└── robots.txt
```

---

## 9. Performance Budgets & Optimization Targets

The following provisional byte budgets govern all network assets to guarantee the performance goals established in `TRD.md`:

```
┌────────────────────────────────────────────────────────┐
│              PROVISIONAL NETWORK ASSET BUDGETS         │
├────────────────────────────┬───────────────────────────┤
│ Asset Category             │ Maximum Gzip Budget       │
├────────────────────────────┼───────────────────────────┤
│ Initial Critical Bundle    │ ≤ 180 KB (JS + CSS)       │
│ Self-Hosted WOFF2 Fonts    │ ≤ 150 KB (Inter + Fira)   │
│ Vector SVGs & Emblems      │ ≤ 25 KB                   │
│ Flagship Project Thumbnail │ ≤ 65 KB (WebP)            │
├────────────────────────────┼───────────────────────────┤
│ TOTAL CRITICAL INITIAL LCP │ ≤ 420 KB                  │
├────────────────────────────┼───────────────────────────┤
│ Lazy 3D Engine Chunk (R3F) │ ≤ 140 KB (On-demand)      │
│ Optional 3D Geometry (.glb)│ ≤ 50 KB (On-demand)       │
│ Audio Assets (Web Audio)   │ 0 KB (Procedural)         │
└────────────────────────────┴───────────────────────────┘
```

---

## 10. Loading, Error & Fallback Strategy

```
┌──────────────────┐       ┌──────────────────────┐       ┌──────────────────────┐
│  Asset Request   │──────▶│ Load Successful?     │──YES─▶│ Render Asset         │
└──────────────────┘       └──────────────────────┘       └──────────────────────┘
                                      │
                                     NO
                                      ▼
                           ┌──────────────────────┐
                           │ Activate Fallback    │
                           │ • SVG / CSS Monogram │
                           │ • 2D Mesh Gradient   │
                           │ • System Font Stack  │
                           │ • Accessible Text    │
                           └──────────────────────┘
```

1. **3D Scene Failure**: Error Boundary catches WebGL context failure $\rightarrow$ unmounts canvas $\rightarrow$ mounts CSS radial gradient mesh instantly.
2. **Missing Project Thumbnail**: `<img onError={...}>` switches to `<ProjectFallbackMonogram codename={project.codename} />`.
3. **Missing Resume Document**: Resume button renders modal notice indicating revision status without crashing.
4. **Font Loading Delay**: CSS `font-display: swap` ensures system typography is visible immediately without blank screen delays (FOIT).

---

## 11. Accessibility & Visual Integrity

1. **Non-Decorative Image Alternatives**: Every project thumbnail must include meaningful `alt` text (e.g. `alt="Sports Gear match kit inspection showcase interface"`).
2. **Decorative Asset Masking**: The background silhouette and seal cipher must include `aria-hidden="true"` and empty alt attributes (`alt=""`) so screen readers ignore ambient dressing.
3. **Zero High-Frequency Flashing**: All animations, particle drifts, and scanline effects adhere to a maximum frequency of $\le 3\text{ Hz}$ to prevent photosensitive epileptic triggers.
4. **Audio Transparency**: Web Audio sound synthesis is strictly disabled by default. Clicking the mute toggle initializes audio with an audible status announcement (`aria-live="polite"`).

---

## 12. Asset Creation & Ingestion Workflow

To introduce a new media asset into SHINOBI OS, developers must execute this 10-step lifecycle:

```
[1. Design Need Identified] ──▶ [2. Select Format: SVG / WebP / GLB] ──▶ [3. Verify Licensing & IP]
           │
           ▼
[4. Create / Acquire Asset] ──▶ [5. Compress: WebP Q80 / SVGO] ──▶ [6. Add Entry to AssetManifest.md]
           │
           ▼
[7. Implement UI & Fallback]──▶ [8. Test Desktop, Mobile & A11Y] ──▶ [9. Audit Build Payload in Vite]
           │
           ▼
[10. Mark Status: Active]
```

---

## 13. Asset Acceptance Criteria

- [ ] **Provenance & Licensing**: Every asset has a documented license (MIT, OFL, CC0, or Personal). Zero copyrighted anime footage, character models, or trademarked logos are present.
- [ ] **Byte Budgets Enforced**: All raster images are formatted as WebP under $65\text{ KB}$; SVGs are optimized under $15\text{ KB}$.
- [ ] **Universal Fallbacks**: Every image, 3D model, and font includes an explicit, tested fallback that preserves full portfolio readability.
- [ ] **Consistent File Naming**: All files adhere strictly to lowercase kebab-case (`village-silhouette.svg`).
- [ ] **Zero Audio Overhead**: Sound effects utilize the Web Audio API procedural oscillator engine (0 KB network transfer).
- [ ] **Accessible Media Markup**: Meaningful images have informative `alt` attributes; decorative visuals have `aria-hidden="true"`.

---

## 14. Open Decisions Catalog

The following asset choices are recorded for finalization during implementation:

1. **Chakra Core Asset Selection**:
   - *Recommendation*: Use procedural HTML5 2D Canvas shader / CSS radial glow instead of downloading `chakra-core.glb`, saving $45\text{ KB}$ of download weight.
2. **Developer Portrait Asset**:
   - *Status*: Awaiting user decision on whether to provide a real professional photograph (`profile-avatar.webp`) or rely on a stylized geometric ninja insignia.
3. **Resume Document Ingestion**:
   - *Status*: Awaiting the user's authentic PDF resume to be placed at `public/assets/docs/Developer_Resume.pdf`.

---
*End of Asset Manifest & Media Specification — SHINOBI OS*
