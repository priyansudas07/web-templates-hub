# Design System & UI Specifications: SHINOBI OS

## 1. Visual Direction & Aesthetic Pillars

- **Stealth & Cyberpunk Synergy**: Deep onyx blacks and obsidian slate backgrounds paired with high-voltage neon accents (Crimson red, Cyber cyan, Emerald green).
- **Tactical Information Density**: Crisp monospaced typography, HUD indicators, subtle grid patterns, and technical telemetry.
- **Micro-Interactions**: Smooth spring physics for window minimization, glowing borders on focus, and subtle CRT scanline effects.

---

## 2. Color Palette

### Base Surfaces
- **Void Obsidian** (Background): `#07080C`
- **Stealth Black** (Surface): `#0B0E17`
- **Panel Slate** (Window Bodies): `#0F131F`
- **Border Subtle**: `#1E2638`
- **Border Highlight**: `#334155`

### Accent Colors
- **Crimson Katana** (Primary Accent): `#E11D48` / `#F43F5E`
- **Cyber Cyan** (Secondary Accent): `#06B6D4` / `#22D3EE`
- **Emerald Shinobi** (Status / Health): `#10B981` / `#34D399`
- **Amber Warning** (Alerts): `#F59E0B` / `#FBBF24`

### Typography Colors
- **Primary Text**: `#F1F5F9`
- **Muted Text**: `#94A3B8`
- **Subtle / Comment Text**: `#475569`

---

## 3. Typography Hierarchy

- **Display & Monospace**: `Fira Code`, `JetBrains Mono`, `IBM Plex Mono`
- **UI & System Font**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
- **Scale**:
  - `Display / Logo`: 18px - 24px (Bold, tracking 0.15em)
  - `Window Headers`: 12px - 14px (Medium/Semibold)
  - `Terminal Body`: 13px (Monospace, line-height 1.6)
  - `Taskbar & Tray`: 11px - 12px

---

## 4. Window Component Anatomy

```
┌────────────────────────────────────────────────────────┐
│ [●][●][●]  SHINOBI TERMINAL // PID: 1042        [_][□][✕] │ ◀── Header Drag Handle
├────────────────────────────────────────────────────────┤
│ shinobi@kernel:~$ status                               │
│ [OK] Memory Check: 16384 MB                            │
│ [OK] Encryption: Ed25519 Stealth Active                │ ◀── Viewport / Canvas
│                                                        │
├────────────────────────────────────────────────────────┤
│ READY | UTF-8 | LN 1, COL 24               [RESIZE ◢]  │ ◀── Status Footer
└────────────────────────────────────────────────────────┘
```
