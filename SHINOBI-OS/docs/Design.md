# Design System & Visual Direction Document
# SHINOBI OS — Classified Shinobi Intelligence

---

## 1. Document Metadata & Context

| Attribute | Details |
| :--- | :--- |
| **Document Title** | Design System & Visual Direction: SHINOBI OS |
| **Document ID** | DESIGN-SHINOBI-001 |
| **Version** | 1.0.0 (Design & Motion System Baseline) |
| **Status** | Approved for Technical Architecture Specification |
| **Last Updated** | 2026-10-10 |
| **Author** | Senior Product Designer, Creative Director & Motion Specialist |
| **Primary References** | `SHINOBI-OS/docs/PRD.md` (v1.0.0), `SHINOBI-OS/docs/AppFlow.md` (v1.0.0) |
| **Repository Path** | `SHINOBI-OS/docs/Design.md` |

---

## 2. Creative Direction & Visual Identity

### 2.1 Thematic Narrative & Atmosphere
**SHINOBI OS** is conceived as a tactical intelligence console from the world of Naruto—specifically invoking the covert operative atmosphere of the Hidden Leaf Village Intelligence Division (*Konohagakure Angōbu*) and the ANBU Black Ops registry.

The mood is:
- **Disciplined & Stealthy**: Deep charcoal, onyx, and obsidian surfaces rather than noisy RGB gaming colors.
- **Cinematic & Atmospheric**: Subtle volumetric fog, distant moonlit architectural silhouettes, quiet midnight ambiance, and selective, razor-sharp light accents.
- **Tactical Software Polish**: A high-end intelligence workstation engineered for covert operatives, prioritizing clean typography, structured data streams, and rapid telemetry over decorative chaos.
- **Anime Resonance Without Cliché**: Evoking ninja lore through seal scripts (*Fūinjutsu* ciphers), mission ranks (S/A/B-Rank), and scroll framing without amateur character screenshots, watermarked anime wallpapers, or comic-sans fandom tropes.

### 2.2 What We Explicitly Avoid (Anti-Patterns)
- ❌ **No Cyberpunk / Neon Overload**: No screaming purple, hot magenta, or chaotic matrix green rain that strains the eyes.
- ❌ **No Constant Moving Backgrounds**: No looping video backgrounds, heavy particle clouds, or distracting spinning 3D meshes that steal focus from project text.
- ❌ **No Excessive Glassmorphism**: No blurry, low-contrast frosted glass cards with illegible light-gray text on transparent backdrops.
- ❌ **No Gaming Bloat**: No simulated XP bars, health pools, or fake RPG stats that detract from genuine software engineering credibility.
- ❌ **No Copyrighted Imagery**: Strictly zero ripped anime frames, studio logos, character renders, or copyrighted OST audio tracks.

### 2.3 Naruto Shinobi Visual Motifs & Execution Standards
To avoid looking like a generic SaaS dark mode dashboard, every primary view and component incorporates authentic shinobi design motifs:
1. **Konoha Village Nocturnal Horizon (`ENV-001`)**: Distinctive mountain cliff silhouette, pagoda/eaves rooflines, and distant lantern embers behind a moonlit atmospheric mist gradient.
2. **Hitai-Ate (Forehead Protector) Metal Plate Styling**: Top bar branding and tactical dock elements feature brushed slate metal plating with corner bolt rivets and engraved Konoha spiral crest.
3. **Classified Mission Dossier Framing**: Projects styled as unsealed intelligence dossiers with engraved corner brackets (`┌ ┐ └ ┘`), double-rule header borders, and vermilion ink seal stamps (*Inkan* `極秘` / `任務`).
4. **Shinobi Scroll Chronology**: Timelines and ability archives styled with parchment scroll axis, discipline kanji watermarks (`術`, `印`, `封`), and sealing knot nodes.
5. **Drifting Leaf Foliage**: Sparse, non-intrusive wind-borne leaf particles floating across the background to give tangible life to the Hidden Leaf atmosphere without distracting from portfolio text.
6. **Cryptographic Terminal Styling**: Terminal framed with Konoha spiral seal cipher watermark, tactical hex bolt hardware accents instead of generic macOS dots, and Konohagakure Angōbu classification banners.

## 3. Design Principles

1. **Portfolio Legibility Above Visual Spectacle**: The visitor must be able to read project descriptions, identify technologies, and access verified code repositories without fighting the visual theme.
2. **Atmosphere in the Margins, Clarity in the Center**: Dramatic shadows, cinematic vignetting, and seal motifs live on the edges and backgrounds; content cards and inspection panes remain crisp, high-contrast, and focused.
3. **Restrained, Hierarchical Accent Discipline**: Accents are functional signals, not wallpaper. Leaf-green signifies primary action and active selection; Crimson signifies classified security or critical warnings; Cyan indicates telemetry and system energy.
4. **Motion with Kinetic Intent**: Every animation must communicate state change, reveal hierarchy, or enhance spatial orientation. Animations never exceed $350\text{ ms}$ for user-driven interactions.
5. **Universal Accessibility (WCAG 2.2 AA Compliance)**: All text meets or exceeds a $4.5:1$ contrast ratio against its backing surface. Focus indicators are bold, unmistakable, and dual-ringed.
6. **Performance as an Aesthetic**: 60 FPS transitions, lightweight SVGs, zero cumulative layout shifts (CLS = 0), and instant fallbacks for non-WebGL devices.

---

## 4. Color System & Semantic Tokens

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COLOR PALETTE HIERARCHY                         │
├────────────────────────────────────────────────────────────────────────┤
│ BACKGROUNDS      SURFACES           BORDERS           TEXT             │
│ Void Onyx        Obsidian Slate     Border Subtle     Chakra White     │
│ #07080C          #0B0E14            #1B2232           #F1F5F9          │
│                                                                        │
│ Elevated Deep    Card Surface       Border Medium     Slate Muted      │
│ #0E121B          #111622            #283347           #94A3B8          │
│                                                                        │
│ ACCENTS          CLASSIFIED         TELEMETRY         SYSTEM HEALTH    │
│ Leaf Green       Crimson Seal       Chakra Cyan       Amber Warning    │
│ #10B981          #E11D48            #06B6D4           #F59E0B          │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Surface & Neutral Tokens

| Token Name | Hex Code | RGB | Intended Semantic Usage |
| :--- | :--- | :--- | :--- |
| `color-bg-base` | `#07080C` | `7, 8, 12` | Viewport root background; darkest canvas level. |
| `color-bg-elevated` | `#0B0E14` | `11, 14, 20` | HUD Dock background, top bar, and secondary panels. |
| `color-surface-card` | `#111622` | `17, 22, 34` | Mission cards, Jutsu quadrant cards, and timeline cards. |
| `color-surface-modal` | `#0E121A` | `14, 18, 26` | Inspection modals, resume reader, and drawer backdrops. |
| `color-surface-hover` | `#161D2D` | `22, 29, 45` | Hovered card state, active list item background. |
| `color-border-subtle` | `#1B2232` | `27, 34, 50` | Standard card borders, grid dividers, inactive tabs. |
| `color-border-medium` | `#283347` | `40, 51, 71` | Hovered borders, active modal borders, card headers. |
| `color-border-accent` | `#10B981` | `16, 185, 129` | Active tab indicators, focused inputs, selected cards. |

### 4.2 Text & Typography Tokens

| Token Name | Hex Code | Contrast on Card | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `color-text-primary` | `#F1F5F9` | $14.2:1$ (AAA) | Main headings, mission titles, active navigation labels. |
| `color-text-secondary`| `#CBD5E1` | $10.5:1$ (AAA) | Body copy, project descriptions, architectural write-ups. |
| `color-text-muted` | `#94A3B8` | $5.8:1$ (AA) | Metadata, dates, tech stack tags, inactive dock labels. |
| `color-text-faint` | `#64748B` | $3.4:1$ (Decorative) | Timestamps, decorative terminal timestamps, line numbers. |

### 4.3 Functional & Thematic Accents

| Accent Token | Hex Code | Role in Interface | Usage Rules & Restraints |
| :--- | :--- | :--- | :--- |
| `color-accent-leaf` | `#10B981` | Primary Leaf Action | Used on primary buttons, active dock icons, S-Rank tag highlights, and active filter tabs. Never covers $> 5\%$ of the screen. |
| `color-accent-crimson` | `#E11D48` | Classified & Seal | Reserved for ANBU Easter egg, destructive actions, danger alerts, and classified mission badges. |
| `color-accent-chakra` | `#06B6D4` | System Telemetry | Subtle cool cyan used exclusively for active network indicators, memory telemetry pips, and terminal links. |
| `color-accent-amber` | `#F59E0B` | Warning / A-Rank | Used for A-Rank system badges, warning notices, and in-progress milestones. |

### 4.4 Rules Preventing Accent Competition
1. **The 80-15-5 Rule**: Every screen consists of $80\%$ dark neutral surfaces (`#07080C` to `#111622`), $15\%$ crisp neutral typography (`#F1F5F9` to `#94A3B8`), and $\le 5\%$ vibrant accent color.
2. **Accent Exclusivity**: A single UI component cannot combine `Leaf Green` and `Crimson` simultaneously unless representing an explicit binary status toggle.
3. **No Accent-Filled Buttons with Glowing Shadows**: Buttons use solid dark surfaces with crisp $1\text{px}$ accent borders and subtle text coloring, preventing garish neon glare.

---

## 5. Typography System

### 5.1 Typeface Selection & Font Sourcing
To ensure offline resilience, zero Google Fonts telemetry, and instant page rendering with zero font layout shifts (FOIT/FOUT), all fonts are **self-hosted modern WOFF2 files**:

1. **System & Display Headings**: `Inter` (Variable weight: 400 to 800)
   - *Rationale*: Exceptionally legible geometric sans-serif engineered for digital screens. Tall x-height prevents eye strain in dark mode.
2. **Technical Telemetry & Code**: `Fira Code` / `JetBrains Mono` (Weights: 400, 500, 600)
   - *Rationale*: Clean monospace proportions with built-in programming ligatures, ideal for terminal logs, telemetry badges, and code snippets.
3. **Stylized Kanji / Seal Glyphs**: System-native East Asian Unicode fonts (`"Yu Gothic"`, `"Hiragino Sans"`, `"Noto Sans CJK JP"`) or vector SVG ciphers for specific seal emblems.

### 5.2 Responsive Typographic Scale

| Style / Token | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `type-display` | `Inter` | $28\text{px}$ ($1.75\text{rem}$) | $22\text{px}$ ($1.375\text{rem}$) | 700 (Bold) | $1.2$ | `-0.02em` |
| `type-h1` | `Inter` | $22\text{px}$ ($1.375\text{rem}$) | $18\text{px}$ ($1.125\text{rem}$) | 600 (Semibold) | $1.25$ | `-0.015em` |
| `type-h2` | `Inter` | $18\text{px}$ ($1.125\text{rem}$) | $16\text{px}$ ($1.0\text{rem}$) | 600 (Semibold) | $1.3$ | `-0.01em` |
| `type-h3` | `Inter` | $15\text{px}$ ($0.9375\text{rem}$) | $14\text{px}$ ($0.875\text{rem}$) | 600 (Semibold) | $1.4$ | `0.0em` |
| `type-body` | `Inter` | $14\text{px}$ ($0.875\text{rem}$) | $14\text{px}$ ($0.875\text{rem}$) | 400 (Regular) | $1.6$ | `0.0em` |
| `type-body-sm` | `Inter` | $13\text{px}$ ($0.8125\text{rem}$) | $12\text{px}$ ($0.75\text{rem}$) | 400 (Regular) | $1.5$ | `0.005em` |
| `type-mono` | `Fira Code` | $13\text{px}$ ($0.8125\text{rem}$) | $12\text{px}$ ($0.75\text{rem}$) | 400 / 500 | $1.65$ | `0.0em` |
| `type-badge` | `Fira Code` | $11\text{px}$ ($0.6875\text{rem}$) | $10\text{px}$ ($0.625\text{rem}$) | 600 (Semibold) | $1.2$ | `+0.05em` (Caps) |

### 5.3 Text Truncation & Wrapping Standards
- Project summaries on cards are clamped strictly to 3 lines using CSS `-webkit-line-clamp: 3` with an accessible `title` attribute fallback.
- Code identifiers in badges use `white-space: nowrap` to prevent awkward mid-word breaks.

---

## 6. Layout, Grid & Spacing System

### 6.1 Layout Dimensions & Viewport Boundaries
- **Maximum Content Width**: $1200\text{px}$ (Desktop container centered).
- **Top HUD Status Bar**: Height $= 48\text{px}$ (Fixed top, $z\text{-index}: 50$).
- **Bottom Tactical Dock**: Height $= 64\text{px}$ (Fixed bottom, $z\text{-index}: 50$).
- **Active Stage Viewport**: Fills dynamic height between top bar and dock with scrollable container (`overflow-y: auto`).

### 6.2 Responsive Breakpoints
- `Mobile` (`sm`): $< 768\text{px}$ (Single-column layout, bottom-sheet drawers).
- `Tablet` (`md`): $768\text{px} - 1023\text{px}$ (2-column layout, adaptive cards).
- `Desktop` (`lg`): $\ge 1024\text{px}$ (Full HUD multi-column grid, wide 3-column project showcase).
- `Wide Desktop` (`xl`): $\ge 1280\text{px}$ (Max content container capped at $1200\text{px}$ with atmospheric margin vignettes).

### 6.3 8-Point Spacing Scale

```
Token:     space-1  space-2  space-3  space-4  space-5  space-6  space-8  space-10  space-12
Pixels:    4px      8px      12px     16px     20px     24px     32px     40px      48px
Rem:       0.25     0.5      0.75     1.0      1.25     1.5      2.0      2.5       3.0
```

### 6.4 Border Radius Scale
- `radius-sm`: $4\text{px}$ (Badges, telemetry pills, keyboard shortcut hints).
- `radius-md`: $8\text{px}$ (Buttons, input fields, filter tabs).
- `radius-lg`: $12\text{px}$ (Mission cards, terminal shell, modal dialogs).
- `radius-full`: $9999\text{px}$ (Chakra status pips, avatar rings, audio toggle).

### 6.5 Layering & Z-Index Conventions
- `z-background`: `0` (Ambient canvas, 3D village scene, 2D gradient fallback).
- `z-stage`: `10` (Main content cards, terminal window, grids).
- `z-hud`: `50` (Persistent top bar and bottom tactical dock).
- `z-overlay`: `100` (Backdrop blur, modal drawer scrim).
- `z-modal`: `110` (Active inspection dialogs, resume reader).
- `z-tooltip`: `200` (Floating tooltips, quick keyboard hints).

---

## 7. Screen-Specific Visual Specifications

### 7.1 Cinematic Awakening Stage
- **Environment**: Deep pitch-black background with a soft, circular moonlit radial gradient (`rgba(16, 185, 129, 0.05)` at center).
- **Focal Element**: Stylized vector Leaf Village seal cipher with subtle rotational pulse ($12\text{s}$ period).
- **Telemetry Readout**: Crisp monospace text in `color-text-muted` displaying mock buffer allocations.
- **Skip Control**: Fixed at `top: 16px, right: 16px`. Styled as a pill button with a $1\text{px}$ Leaf-green border, text `[SKIP AWAKENING >>]`, and high-contrast styling.

### 7.2 Main Shinobi Terminal Dashboard
- **Visual Presentation**: Framed as a sleek intelligence terminal console.
- **Window Header**: $36\text{px}$ tall header strip in `#0B0E14` with mock window status controls:
  - Left: Leaf emblem icon + `SHINOBI_OS // KERNEL_V1.0`.
  - Right: `CLEARANCE: JOUNIN` badge in emerald green.
- **Terminal Viewport**: Monospace buffer styled with line numbers (`#475569`), command prompts (`shinobi@leaf:~$`), and syntax-colored output.
- **Chakra Core Telemetry**: Compact circular HUD widget at the corner indicating system readiness with a soft cyan breathing aura.

### 7.3 Mission Dossiers (Project Vault)
- **Header**: Tactical section title `"MISSION ARCHIVE // DEPLOYED CODEX"`.
- **Filter Bar**: Horizontal segmented control bar with pill buttons for `All`, `S-Rank`, `A-Rank`, `B-Rank`.
- **Card Anatomy**:
  - Container: Background `#111622`, border $1\text{px}$ `#1B2232`.
  - Top Strip: Left has Mission Rank Badge (`[S-RANK]` in crimson, `[A-RANK]` in amber, `[B-RANK]` in emerald); Right has verification tag (`PROD-VERIFIED`).
  - Title: $18\text{px}$ Semibold in `#F1F5F9`.
  - Description: Max 3 lines in `#CBD5E1`.
  - Tag Cloud: Badges in `#0B0E14` with `#94A3B8` text.
  - Action Footer: Clean icon buttons for `[Inspect]`, `[GitHub]`, `[Live Demo]`.

### 7.4 Individual Mission Detail Inspector
- **Modal Framing**: Centered overlay on desktop ($720\text{px}$ wide, max height $85\text{vh}$).
- **Backdrop**: `#000000` with $75\%$ opacity and backdrop blur ($8\text{px}$).
- **Inner Structure**:
  - Top Bar: Codename, full project name, and large dismiss button `[✕]`.
  - Body: Scrollable two-column or stacked layout detailing Problem Statement, Architecture Blueprint, and Technical Hurdles Overcome.
  - Footer: Prominent dual action buttons (`[Open Source Repository]` and `[Launch Live Deployment]`).

### 7.5 Jutsu Archive (Technical Skills)
- **Quadrant Grid**: 4 balanced panels mapping to Ninjutsu (Frontend), Taijutsu (Backend), Fuinjutsu (DevOps), and Genjutsu (Creative Tech).
- **Skill Tiles**: Grid of compact cards within each quadrant.
- **Tile Elements**: Real technology logo/icon + Skill Title + Proficiency Badge (`Core Production`, `Proficient`, `Familiar`).
- **Zero Fake Gauges**: Explicitly avoids misleading $95\%$ progress bars or imaginary ninja power levels.

### 7.6 Shinobi Records (Experience & Education)
- **Layout**: Clean vertical chronological timeline.
- **Timeline Axis**: Subtle $1\text{px}$ vertical line in `#1B2232` with glowing emerald nodes at active career milestones.
- **Node Cards**: Organization name, job title, verified dates, and bulleted engineering accomplishments.
- **Education & Credentials**: Structured card grid highlighting university degrees, computer science curriculum, and verified honors.

### 7.7 Resume & Contact Access
- **Resume Affordance**: Always visible in top HUD bar and dock with an unmistakable document icon and label `[Resume PDF]`.
- **Contact Panel**: Clean, uncluttered layout with verified communication links (Email, LinkedIn, GitHub). Direct email features a single-click `[Copy Email]` button with instant visual feedback.

### 7.8 Optional ANBU Experience (Easter Egg)
- **Aesthetic Shift**: Viewport borders transition from Leaf Green to Crimson Katana (`#E11D48`).
- **Terminal Overlay**: Displays ANBU seal watermark in the background ($5\%$ opacity).
- **Content**: Classified engineering retrospective document; easily exited via `[Reseal Archive]` button or `Escape`.

### 7.9 Mobile Presentation
- **Dock**: Fixed sticky bottom bar with 5 compact touch targets ($48\text{px} \times 48\text{px}$).
- **Drawer Overlays**: Modals slide up from bottom as swipeable bottom sheets with grab handle indicators.
- **Single-Column Cards**: Project cards adapt to full-width mobile cards with larger tap targets.

---

## 8. Component Design System

```
┌────────────────────────────────────────────────────────┐
│ COMPONENT STATE SPECIFICATIONS                         │
├─────────────┬──────────────────────────────────────────┤
│ Component   │ Visual Specifications                    │
├─────────────┼──────────────────────────────────────────┤
│ Button      │ Def: Bg #111622, Border #1B2232, Txt #F1 │
│ Primary     │ Hvr: Bg #161D2D, Border #10B981, Txt #F1 │
│             │ Foc: Outline 2px #10B981, Offset 2px     │
│             │ Act: Scale 0.98, Bg #0B0E14              │
├─────────────┼──────────────────────────────────────────┤
│ Metadata    │ Shape: Pill (radius 4px), Padding 2px 8px│
│ Badge       │ S-Rank: Bg rgba(225,29,72,0.1), Txt #E11D│
│             │ A-Rank: Bg rgba(245,158,11,0.1), Txt #F59│
│             │ B-Rank: Bg rgba(16,185,129,0.1), Txt #10B│
├─────────────┼──────────────────────────────────────────┤
│ Input       │ Def: Bg #07080C, Border 1px #1B2232      │
│ Field       │ Hvr: Border 1px #283347                  │
│             │ Foc: Border 1px #10B981, Glow 4px rgba   │
└─────────────┴──────────────────────────────────────────┘
```

### 8.1 Buttons
- **Primary Action Button**:
  - Background: `#111622` (Card surface).
  - Border: $1\text{px}$ solid `#10B981` (Leaf green).
  - Typography: $13\text{px}$ Semibold, tracking `+0.02em`, `#F1F5F9`.
  - Hover: Border glows subtly, background shifts to `#161D2D`.
  - Active: Scale down to `0.98`.
- **Secondary / Ghost Button**:
  - Background: Transparent.
  - Border: $1\text{px}$ solid `#1B2232`.
  - Text: `#94A3B8`.
  - Hover: Border `#283347`, text `#F1F5F9`.
- **Icon Button**:
  - Dimensions: Minimum $44\text{px} \times 44\text{px}$ touch boundary.
  - Centered SVG icon ($18\text{px}$).

### 8.2 Metadata & Rank Badges
- **S-Rank Badge**: Border & text `#E11D48` (Crimson), background `rgba(225, 29, 72, 0.1)`.
- **A-Rank Badge**: Border & text `#F59E0B` (Amber), background `rgba(245, 158, 11, 0.1)`.
- **B-Rank Badge**: Border & text `#10B981` (Emerald), background `rgba(16, 185, 129, 0.1)`.
- **Tech Stack Tag**: Subtle border `#1B2232`, background `#0B0E14`, text `#94A3B8`.

### 8.3 Tooltips
- Background: `#0B0E14` with $1\text{px}$ solid `#283347`.
- Text: $11\text{px}$ Monospace `#F1F5F9`.
- Appearance: $250\text{ms}$ delay to prevent flickering on rapid cursor movement.
- ARIA: Annotated with `role="tooltip"` linked via `aria-describedby`.

---

## 9. Cinematic Motion & Animation System

### 9.1 Motion Principles
1. **Never Make the User Wait**: Interactions initiating user workflows take $\le 200\text{ ms}$.
2. **Kinetic Inertia**: Micro-interactions use cubic-bezier springs rather than linear fades.
3. **No Parallax Disorientation**: Parallax depth is capped at $\le 12\text{px}$ offset to prevent motion sickness.

### 9.2 Motion Tokens & Timing Scale

| Motion Token | Duration | Cubic-Bezier Curve | Intended Usage |
| :--- | :--- | :--- | :--- |
| `motion-instant` | $100\text{ms}$ | `ease-out` | Button clicks, tab switches, badge hovers. |
| `motion-quick` | $180\text{ms}$ | `cubic-bezier(0.16, 1, 0.3, 1)` | Card hover lifts, focus rings, tooltip reveals. |
| `motion-standard`| $260\text{ms}$ | `cubic-bezier(0.16, 1, 0.3, 1)` | Section cross-fades, drawer slide-ins, modal entries. |
| `motion-cinematic`| $400\text{ms}$ | `cubic-bezier(0.25, 1, 0.5, 1)` | Awakening element fades, ANBU theme transitions. |

### 9.3 Prefers-Reduced-Motion Rules
When `window.matchMedia('(prefers-reduced-motion: reduce)')` is true:
- All transitions set to duration `0.01ms`.
- 3D camera sweeps and canvas particle translations are completely halted.
- Modal openings become instantaneous opacity switches.

---

## 10. 3D & Atmospheric Visual Effects

### 10.1 Artistic Direction
- **Atmosphere**: A subtle, stylized midnight scene evoking a high vantage point overlooking the misty roofs of the Hidden Leaf.
- **Lighting**: Single soft cool directional light from an off-screen moon (`#94A3B8`, intensity `0.6`), with a soft upward emerald ground bounce (`#10B981`, intensity `0.15`).
- **Selective Particle Field**: Extremely low-density floating chakra embers / wind leaves (capped at **35 particles** maximum on desktop, **0 particles** on mobile).

### 10.2 Technical Guardrails & Performance Caps
- **Device Pixel Ratio (DPR)**: Clamped strictly to `Math.min(window.devicePixelRatio, 1.5)` to protect mobile GPUs and 4K displays.
- **Particle Budget**: $\le 35$ instances on desktop, disabled on mobile.
- **Draw Calls**: Maximum of 6 draw calls per frame.
- **WebGL Failure Fallback**: If WebGL context creation returns `null` or crashes, the canvas is unmounted and replaced with an instant CSS radial vignette:
  ```css
  background: radial-gradient(circle at 50% 30%, #0D121D 0%, #07080C 75%);
  ```

---

## 11. Accessibility & Usability (WCAG 2.2 AA)

1. **Color Independence**: Color is never the sole indicator of status. Every badge and rank combines an explicit textual label (e.g. `[S-RANK]`, `VERIFIED`, `OFFLINE`) with its corresponding accent color.
2. **High-Visibility Keyboard Focus Rings**:
   - Focus outline: $2\text{px}$ solid `#10B981` (Leaf green).
   - Offset: $2\text{px}$ gap (`outline-offset: 2px`).
   - Inner ring: $1\text{px}$ dark contrast ring to ensure visibility against all backgrounds.
3. **Touch Targets**: All interactive elements on touch screens adhere to the $44\text{px} \times 44\text{px}$ minimum bounding box.
4. **Accessible Skip Navigation**: A dedicated `Skip to main content` anchor is the first tab stop in the DOM, allowing keyboard users to bypass headers and awakening immediately.

---

## 12. Responsive Breakpoint Matrix

| Element / View | Mobile ($< 768\text{px}$) | Tablet ($768\text{px} - 1023\text{px}$) | Desktop ($\ge 1024\text{px}$) |
| :--- | :--- | :--- | :--- |
| **Tactical Dock** | Fixed bottom nav bar ($56\text{px}$), 5 icons | Floating bottom dock ($60\text{px}$) | Centered HUD dock ($64\text{px}$) |
| **Mission Grid** | 1 column, full-width cards | 2 columns | 3 columns ($1200\text{px}$ container) |
| **Jutsu Quadrants** | Accordion vertical stack | 2-column grid | $2 \times 2$ balanced quadrant grid |
| **Inspection Modals** | Full-screen bottom-sheet drawer | Centered modal ($85\text{vw}$) | Centered modal ($720\text{px}$ fixed) |
| **Terminal Console** | Simplified quick-command pills | Standard command window | Full command shell with split log |
| **3D Background** | Disabled (2D CSS radial mesh) | Static 2D or ultra-low particle | Low-poly interactive particle canvas |

---

## 13. Asset & Licensing Standards

1. **Original / Royalty-Free Media**: All vector iconography originates from the open-source `lucide-react` library (ISC License).
2. **No Trademark Infringements**: No official logos of Shueisha, Studio Pierrot, or TV Tokyo. All ninja symbols are original stylized geometric vectors.
3. **Texture Budgets**: The CRT scanline overlay texture is a single $4\text{px} \times 4\text{px}$ repeat PNG ($\le 1\text{ KB}$).
4. **Audio Budgets**: Sound effects are generated procedurally via the Web Audio API or utilize royalty-free CC0 micro-samples under $25\text{ KB}$.

---

## 14. Design Tokens Reference (Handoff Blueprint)

```css
:root {
  /* Surfaces */
  --color-bg-base: #07080C;
  --color-bg-elevated: #0B0E14;
  --color-surface-card: #111622;
  --color-surface-modal: #0E121A;
  --color-surface-hover: #161D2D;

  /* Borders */
  --color-border-subtle: #1B2232;
  --color-border-medium: #283347;
  --color-border-accent: #10B981;

  /* Typography */
  --color-text-primary: #F1F5F9;
  --color-text-secondary: #CBD5E1;
  --color-text-muted: #94A3B8;
  --color-text-faint: #64748B;

  /* Accents */
  --color-accent-leaf: #10B981;
  --color-accent-crimson: #E11D48;
  --color-accent-chakra: #06B6D4;
  --color-accent-amber: #F59E0B;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-quick: 180ms cubic-bezier(0.16, 1, 0.3, 1);
  --transition-standard: 260ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 15. Design Acceptance Criteria (Verification Checklist)

- [ ] **Cohesive Visual Identity**: The site conveys an authentic, disciplined shinobi atmosphere without bright neon clutter or generic anime tropes.
- [ ] **Portfolio Readability**: All project titles, descriptions, and technical tags are effortlessly legible with contrast ratios $\ge 4.5:1$.
- [ ] **Restrained Accent Discipline**: Leaf-green is limited to primary actions; Crimson is restricted to classified tags; accents never overpower content.
- [ ] **Mobile Excellence**: Every touch target measures $\ge 44\text{px} \times 44\text{px}$; modals adapt to smooth bottom-sheet drawers.
- [ ] **Accessible Focus Rings**: Every button, link, and input exhibits a high-contrast $2\text{px}$ focus ring on keyboard navigation.
- [ ] **Motion Inclusivity**: All motion is halted or simplified to zero duration when `prefers-reduced-motion` is active.
- [ ] **Graceful WebGL Fallback**: Site renders an elegant dark radial mesh gradient if 3D context is unavailable, without console errors.
- [ ] **Legitimate Asset Provenance**: Zero copyrighted media or uncredited trademarked imagery is present in the design system.

---

## 16. Open Design Decisions & Technical Handoff

The following design decisions are recorded as recommendations and flagged for confirmation in `TRD.md` and `Schema.md`:

1. **Terminal Scanline Implementation** *(To be confirmed in `TRD.md`)*:
   - *Recommendation*: Implement via a pure CSS SVG data-URI overlay with opacity `$0.03$` to eliminate HTTP texture requests.
2. **3D Scene Implementation Strategy** *(To be confirmed in `TRD.md`)*:
   - *Recommendation*: Use vanilla HTML5 2D/WebGL Canvas shader rather than bundling the full Three.js library, saving $\sim 140\text{ KB}$ of production bundle weight while delivering identical atmospheric fog and particles.
3. **Contact Submission UI** *(To be confirmed in `Schema.md`)*:
   - *Recommendation*: Direct clipboard copy button with visual checkmark feedback as the primary action, paired with an optional clean modal for formatted message generation.

---
*End of Design System & Visual Direction Document — SHINOBI OS*
