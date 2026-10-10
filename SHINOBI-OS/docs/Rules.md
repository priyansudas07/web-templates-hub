# Engineering, Design & Operational Discipline Rules
# SHINOBI OS — Classified Shinobi Intelligence

---

## 1. Document Metadata & Scope

| Attribute | Details |
| :--- | :--- |
| **Document Title** | Engineering, Design & Operational Discipline Rules: SHINOBI OS |
| **Document ID** | RULES-SHINOBI-001 |
| **Version** | 1.0.0 (Mandatory Governance Baseline) |
| **Status** | Active Enforcement (Binding on all implementation tasks) |
| **Last Updated** | 2026-10-10 |
| **Author** | Senior Engineering Lead & Technical Delivery Architect |
| **Primary References** | `docs/PRD.md`, `docs/AppFlow.md`, `docs/Design.md`, `docs/Schema.md`, `docs/TRD.md`, `docs/AssetManifest.md`, `docs/ImplementationPlan.md` |
| **Repository Path** | `SHINOBI-OS/docs/Rules.md` |

---

## 2. Source-of-Truth Hierarchy & Conflict Resolution

When evaluating design choices, interaction flows, or architectural decisions, all project participants and automated assistants must adhere to this strict hierarchy:

```
┌────────────────────────────────────────────────────────┐
│               SOURCE-OF-TRUTH HIERARCHY                │
├────────────────────────────────────────────────────────┤
│ 1. PRD.md            ──▶ Product Scope & Requirements  │
│ 2. AppFlow.md        ──▶ User Journeys & Navigation    │
│ 3. Design.md         ──▶ Visual Tokens & Motion System │
│ 4. Schema.md         ──▶ Entity Types & Data Models    │
│ 5. TRD.md            ──▶ Technical Stack & Architecture│
│ 6. AssetManifest.md  ──▶ Media Budgets & Provenance    │
│ 7. ImplementationPlan──▶ Delivery Phases & Tasks       │
│ 8. Rules.md          ──▶ Governance & Quality Standards│
│ 9. Tracker.md        ──▶ Live Progress & Checklists    │
│ 10. Workflow.md      ──▶ Daily Development Procedures  │
└────────────────────────────────────────────────────────┘
```

### 2.1 Conflict Resolution Protocol
1. **Never Take Implementation Shortcuts**: Requirements in `PRD.md` or `AppFlow.md` must never be altered or ignored simply to make coding easier.
2. **Mandatory Pause on Contradiction**: If two specification documents directly conflict (e.g., a routing choice in TRD vs. AppFlow), the developer or assistant must **immediately pause**, document the discrepancy, and propose a clean reconciliation before writing code.
3. **No Silent Mutations**: Upstream documents (`PRD.md`, `AppFlow.md`) cannot be modified during an implementation task without explicit user review.

---

## 3. Scope Control & Antigravity Discipline

To prevent scope creep, regression bugs, and codebase sprawl, the following rules are strictly enforced:

1. **Strict Task Isolation**: Implement *only* the specific task or phase explicitly requested by the user. Never jump ahead to subsequent phases.
2. **Zero Unsolicited Refactoring**: Do not refactor working components, reorder files, or replace established utility libraries unless explicitly instructed.
3. **No Speculative Backend Services**: The project scope is strictly client-side static. Never install backend servers, Express APIs, databases (Prisma, MongoDB), or authentication suites.
4. **Preserve Working Features**: Code changes must not break previously verified views (e.g. adding 3D canvas must not break the existing terminal or mission cards).
5. **Report Blockers Immediately**: If missing information or a failing build prevents task completion, report the exact error with logs rather than fabricating a workaround.

---

## 4. Software Architecture & Engineering Standards

1. **Strict TypeScript Compilation**:
   - Compiles under `strict: true` with `noImplicitAny: true`.
   - Explicit prop types for every React component (`interface ComponentProps { ... }`).
   - Shared data interfaces imported exclusively from `src/types/schema.ts`.
2. **Decoupled Data Layer**:
   - Component JSX must never contain hardcoded project titles, skill lists, or timeline dates. All data must be imported from `src/data/*.ts`.
   - Modifying portfolio content must only require updating arrays in `src/data/`, never altering React view components.
3. **Component Sizing & Granularity**:
   - Single Responsibility Principle: No giant monolithic components exceeding **250 lines of code**.
   - Extract micro-components into `src/components/ui/` (`Button`, `Badge`, `Card`, `Modal`).
4. **State Management Proportionality**:
   - Rely on React local state (`useState`, `useReducer`) and custom hooks for view-level logic.
   - Use React Context exclusively for global concerns: `RouterContext`, `AudioContext`, and `ThemeContext`.
   - Do not install heavy state libraries (Redux, MobX, Zustand) for simple static portfolio state.
5. **Routing Integrity**:
   - Use the documented hash-based router (`useHashRoute`).
   - Deep links (`/#missions`, `/#records`) must load their target view reliably without 404 errors.

---

## 5. Design Quality & Visual Polish Rules

1. **Design Token Enforcement**:
   - All colors must map to the semantic palette established in `Design.md` (`color-bg-base`, `color-accent-leaf`, `color-accent-crimson`, etc.).
   - Never use arbitrary Tailwind arbitrary hex classes (e.g., `bg-[#ff00ff]`) outside the approved design tokens.
2. **The 80-15-5 Accent Ratio**:
   - Maintain $80\%$ dark surfaces (`#07080C` to `#111622`), $15\%$ neutral typography (`#F1F5F9` to `#94A3B8`), and $\le 5\%$ vibrant accent color.
   - Never combine vibrant Leaf-green and Crimson on the same component unless indicating a binary status switch.
3. **Complete State Feedback**:
   - Every interactive element (buttons, tabs, cards, links) must have defined and tested styles for **default**, **hover**, **active**, **focus-visible**, and **disabled** states.
4. **Mobile Layout Integrity**:
   - Never merely shrink desktop screens. Modals on mobile ($< 768\text{px}$) must adapt into swipeable bottom sheets; project grids must become clean single-column cards with touch targets $\ge 44\text{px} \times 44\text{px}$.
5. **No Interface Clutter**:
   - No excessive glows, blur filters, or low-contrast frosted glass that obstructs reading. Content legibility is sacred.

---

## 6. Naruto-Inspired Thematic & IP Guardrails

1. **Original Interpretation Only**:
   - The theme is a stylized tribute to ninja intelligence aesthetics (shuriken, seals, scrolls, ciphers).
   - Strictly **zero copyrighted anime frames**, official studio logos (Pierrot, TV Tokyo, Shueisha), or extracted character models (Naruto, Sasuke, Kakashi).
2. **No Fictional Endorsement Claims**:
   - The site must never claim official partnership with or license from the copyright holders of Naruto or Shueisha.
3. **Fictional vs. Factual Demarcation**:
   - Shinobi ranks (`S-Rank`, `Chunin`) are thematic presentation labels only. They must never obscure real educational degrees or verified employment titles.
4. **Easter Egg Realism**:
   - The ANBU classified terminal experience is a theatrical Easter egg. It must never be represented as actual cryptographic security.

---

## 7. Content Integrity & Anti-Fabrication Rules

1. **Zero Content Fabrication**:
   - **Never invent** user employment history, academic degrees, GPA scores, hackathon awards, or project metrics.
   - If a project metric is not verified with real benchmarks, it must be omitted or left blank.
2. **Truth in Skills & Metrics**:
   - Never render arbitrary percentage bars (e.g., "React: 94%", "JavaScript: 98%").
   - Use objective tier badges: `Production Core`, `Proficient`, `Familiar`.
3. **Valid External Links**:
   - External links (GitHub, live demos, LinkedIn) must be valid URIs. Never render dummy placeholder links (`href="#"` or `href="https://example.com"`).
4. **Privacy & Confidentiality**:
   - Never publish confidential corporate codebases, proprietary internal endpoints, private phone numbers, or private street addresses.

---

## 8. Accessibility Rules (WCAG 2.2 AA Compliance)

1. **Contrast Standards**: All normal body text and interactive labels must maintain a contrast ratio $\ge 4.5:1$ against their background surface.
2. **Keyboard Operability**:
   - The entire website must be 100% navigable using `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape`.
   - Never disable the default outline without providing an unmistakable high-contrast focus indicator (`outline: 2px solid #10B981`).
3. **Dialog Focus Management**:
   - When a modal opens, focus must be trapped within the modal container.
   - Pressing `Escape` must close the modal immediately and return focus to the trigger element.
4. **Screen Reader Live Regions**:
   - Terminal outputs and dynamic filter updates must utilize `aria-live="polite"` and `role="log"`.
   - Icon-only buttons must have descriptive `aria-label` attributes (e.g., `aria-label="Download ATS Resume in PDF format"`).
5. **Motion Inclusivity**:
   - Honor `prefers-reduced-motion: reduce`. When active, clamp animation durations to $0.01\text{ms}$ and bypass the awakening sequence.

---

## 9. Performance & Resource Rules

1. **Budget Enforcement**:
   - Initial core production bundle: $\le 180\text{ KB}$ gzipped (excluding on-demand 3D).
   - Core Web Vitals targets: LCP $\le 2.0\text{s}$, INP $\le 100\text{ms}$, CLS $\le 0.05$.
2. **Non-Blocking 3D Scene**:
   - React Three Fiber must be dynamically imported via `React.lazy()` inside a `<Suspense>` boundary.
   - Core portfolio views must render instantaneously without waiting for Three.js.
3. **Resource Capping**:
   - 3D particle count capped at $\le 35$ instances on desktop, disabled on mobile.
   - Device Pixel Ratio (DPR) strictly clamped to `Math.min(window.devicePixelRatio, 1.5)`.
4. **Clean Disposal**:
   - All Three.js geometries and materials must invoke `.dispose()` when unmounted to prevent GPU memory leaks.
5. **Measure, Never Guess**:
   - Performance claims must be supported by real build outputs (`dist/` asset sizes) or Lighthouse audit telemetry.

---

## 10. Motion, Audio & 3D Interaction Rules

1. **Restrained Kinetic Motion**: Interaction animations (clicks, hovers, tab switches) must never exceed $200\text{ms}$.
2. **Zero Scroll Hijacking**: Never override native browser scroll wheels or touch gestures with synthetic smooth-scroll scripts.
3. **Zero Forced Delays**:
   - The Awakening boot sequence must have a visible `[SKIP AWAKENING >>]` button from frame 0 ($t=0$).
   - Pressing `Escape` or `Space` must bypass the intro immediately ($\le 200\text{ ms}$).
4. **Strict Audio Autoplay Compliance**:
   - Audio must be **strictly muted by default**.
   - Sound synthesis (Web Audio API) initializes *only* after explicit user interaction with the audio toggle.
   - Sound volume must be clamped below $0.05$ gain to prevent audio distortion.

---

## 11. Security & Privacy Rules

1. **Zero Secrets in Code**: No API keys, private tokens, passwords, or credentials in client-side repositories or environment variables.
2. **Safe Link Targets**: All external outbound links must include `target="_blank" rel="noopener noreferrer"`.
3. **No Dynamic Code Evaluation**: Never use `eval()`, `new Function()`, or `dangerouslySetInnerHTML` for terminal command inputs.
4. **Zero Third-Party Trackers**: No invasive analytics scripts, marketing pixels, or tracking cookies.

---

## 12. Coding Conventions & Syntax Standards

1. **File & Directory Naming**:
   - Folders: lowercase kebab-case (`src/components/layout/`, `src/data/`).
   - React Components: PascalCase (`TerminalView.tsx`, `MissionCard.tsx`).
   - Hooks & Utilities: camelCase (`useHashRoute.ts`, `soundSynth.ts`).
   - Data files: camelCase (`projects.ts`, `siteConfig.ts`).
2. **Import Organization**: Group imports cleanly:
   ```typescript
   // 1. External dependencies (React, Lucide, Framer)
   import React, { useState, useEffect } from 'react';
   import { Terminal, Shield } from 'lucide-react';
   // 2. Internal components & hooks
   import { Badge } from '@/components/ui/Badge';
   import { useHashRoute } from '@/hooks/useHashRoute';
   // 3. Types and data
   import type { Project } from '@/types/schema';
   import { projects } from '@/data/projects';
   ```
3. **No Magic Numbers**: Extract layout dimensions, timing constants, and keycodes into descriptive constants.

---

## 13. Testing & Verification Rules

Before declaring any implementation task complete, the following verification checks must be executed:

1. **Type Check**: Execute `tsc -b` or `npm run build` with zero compile errors.
2. **Console Cleanliness**: Zero uncaught JavaScript exceptions or React hydration warnings.
3. **Responsive Verification**: Verified layout stability across mobile ($375\text{px}$), tablet ($768\text{px}$), and desktop ($1200\text{px}$).
4. **Keyboard & Modal Traps**: Verify `Tab` navigation order, focus containment in modals, and `Escape` dismissal.
5. **Fallback Checks**: Verify that turning off WebGL renders the 2D CSS mesh gradient cleanly.
6. **Diff Inspection**: Inspect `git status` and `git diff` to ensure no unintended files were modified.

---

## 14. Git & Change-Management Rules

1. **Atomic, Conventional Commits**:
   - Format: `<type>(<scope>): <concise description>`.
   - Examples: `feat(missions): add rank filter tabs`, `fix(terminal): sanitize command input`.
2. **No Generated Artifacts**: Never commit `dist/`, `.vite/`, or temporary logs.
3. **Inspect Before Commit**: Always verify staged diffs with `git diff --staged` before finalizing commits.

---

## 15. Documentation Maintenance Rules

When implementation progresses, documentation must be synchronized immediately:

| Document | Trigger for Update | Required Action |
| :--- | :--- | :--- |
| `docs/Tracker.md` | Task started or completed | Update status badges, verification evidence, and dates |
| `docs/ImplementationPlan.md`| Milestone phase finished | Update phase completion gates and checklists |
| `docs/AssetManifest.md` | New media asset ingested | Record asset ID, license, file size, and fallback status |
| `docs/TRD.md` | Material architectural shift | Propose formal technical decision register amendment |

---

## 16. Mandatory Antigravity Task Workflow

For every coding step, the assistant must follow this 10-step protocol:

```
┌────────────────────────────────────────────────────────┐
│             ANTIGRAVITY EXECUTION PROTOCOL             │
├────────────────────────────────────────────────────────┤
│ 1. Inspect Task & Docs  ──▶ Review specs & constraints │
│ 2. Check Existing Code  ──▶ Inspect current file state │
│ 3. State Intended Scope ──▶ Declare files to touch     │
│ 4. Identify Risks       ──▶ Note potential regressions │
│ 5. Implement Minimally  ──▶ Write targeted changes only│
│ 6. Run Verification     ──▶ Execute build and tests    │
│ 7. Audit Results        ──▶ Check console & layouts    │
│ 8. Resolve Regressions  ──▶ Fix errors immediately     │
│ 9. Update Documentation ──▶ Record progress in tracker │
│ 10. Present Evidence    ──▶ Report command outputs     │
└────────────────────────────────────────────────────────┘
```

---

## 17. Explicitly Prohibited Shortcuts

The following practices are **STRICTLY PROHIBITED**:
- ❌ **One-Shot Monolith Generation**: Attempting to generate the entire application in a single unverified turn.
- ❌ **Wholesale File Replacement**: Replacing an entire multi-component codebase when only a minor bug fix was requested.
- ❌ **Fabricated Test Claims**: Claiming "all tests pass" or "Lighthouse is 100" without executing actual commands and showing output.
- ❌ **Inventing Project Data**: Putting fake metrics or imaginary accomplishments into developer profiles.
- ❌ **Hiding Broken Code Behind Visuals**: Using dark backgrounds or animations to disguise broken layouts or non-functional links.
- ❌ **Disabling Accessibility for Style**: Removing focus rings or keyboard handlers to achieve an unencumbered aesthetic.

---

## 18. Rule Precedence & Exception Protocol

### 18.1 Priority Order
When trade-offs arise, adherence is prioritized in this order:
$$\text{Security} > \text{Accessibility} > \text{Content Integrity} > \text{Core Utility} > \text{Performance} > \text{Visual Atmosphere}$$

### 18.2 Exception Documentation
If a rule must be temporarily bypassed (e.g. mock project data during local testing):
1. **Document the Rule**: State the exact rule ID being bypassed.
2. **Document the Justification**: State why the exception is necessary.
3. **Document the Mitigation**: State how the risk is contained.
4. **Document the Expiration**: Define the exact task/milestone where the exception expires.

---

## 19. Task Acceptance Checklist

Every completed task must satisfy this verification checklist before moving forward:

- [ ] Implemented *only* the approved scope; zero unrequested refactorings.
- [ ] TypeScript compiles cleanly with zero `any` types (`npm run build` exits with code 0).
- [ ] No hardcoded content in view JSX; all data imported from `src/data/`.
- [ ] Verified on mobile ($375\text{px}$) and desktop ($1200\text{px}$) viewports.
- [ ] Full keyboard navigation verified (`Tab`, focus indicators, `Escape` handlers).
- [ ] WCAG 2.2 AA contrast verified ($\ge 4.5:1$).
- [ ] Zero unhandled JavaScript errors in the browser console.
- [ ] Changes committed with clean, descriptive Git commit messages.

---
*End of Engineering, Design & Operational Discipline Rules — SHINOBI OS*
