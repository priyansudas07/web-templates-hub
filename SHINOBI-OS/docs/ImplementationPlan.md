# Implementation Plan: SHINOBI OS

## Phase 1: Environment & Project Scaffolding
- [x] Configure Vite 8 + React 19 + TypeScript + Tailwind CSS v4 workspace.
- [x] Establish documentation suite (`docs/PRD.md`, `AppFlow.md`, `Design.md`, `Schema.md`, `TRD.md`, etc.).
- [x] Set up directory skeleton (`public/`, `src/`, `tests/`).
- [ ] Configure Vitest / unit test runner.

---

## Phase 2: Desktop Stage & Window Management Engine
- [ ] Implement `WindowManagerContext` and state reducer:
  - `OPEN_WINDOW`, `CLOSE_WINDOW`, `FOCUS_WINDOW`, `MINIMIZE_WINDOW`, `MAXIMIZE_WINDOW`.
  - Window drag handling with boundary constraint (within viewport bounds).
  - Window resizing across all 4 corners and edges.
  - Active focus z-index auto-promotion.
- [ ] Create Desktop wallpaper stage and right-click context menu.
- [ ] Create Taskbar with active application tabs, clock, and system telemetry indicators.

---

## Phase 3: Core Virtual Applications
- [ ] **Shinobi Terminal**:
  - Interactive bash input/output parser.
  - Built-in command library (`help`, `clear`, `neofetch`, `matrix`, `date`, `cat`).
- [ ] **Virtual Filesystem Explorer**:
  - Tree navigation and directory inspection.
  - Previewer for Markdown and text documents.
- [ ] **System Monitor & Telemetry**:
  - Visual CPU/RAM gauges and activity ticker.
- [ ] **Settings App**:
  - Theme switching (Crimson / Cyber Cyan / Toxic Emerald).

---

## Phase 4: Polish, Audio FX & Optimization
- [ ] Optional retro synth audio clicks for keypresses and window clicks via Web Audio API.
- [ ] Responsive design adjustments for mobile screens.
- [ ] Test coverage for window reducer and command parser.
- [ ] Production build and Vercel / GitHub Pages deployment verification.
