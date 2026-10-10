# Technical Requirements Document (TRD): SHINOBI OS

## 1. Technical Architecture & Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Core Framework** | React 19 + TypeScript | Declarative component model with end-to-end type safety |
| **Bundler & Dev Server** | Vite 8 | Near-instant HMR, ES module dev server, optimized rollup builds |
| **Styling Engine** | Tailwind CSS v4 | High-performance CSS engine with zero-runtime utility styling |
| **Motion & Gestures** | Framer Motion | Smooth hardware-accelerated drag-and-drop window mechanics |
| **Iconography** | Lucide React | Consistent, lightweight vector icon system |
| **Testing** | Vitest / Jest-compatible | Fast unit testing for virtual filesystem and window reducers |

---

## 2. Directory Layout Architecture

```
SHINOBI-OS/
├── docs/                   # System design, PRD, architecture, tracking
├── public/                 # Static assets, sounds, wallpapers, favicon
├── src/
│   ├── assets/             # Brand logos, scanline textures, SVG icons
│   ├── components/
│   │   ├── desktop/        # Desktop stage, wallpaper, grid, context menu
│   │   ├── dock/           # Bottom taskbar, start menu, tray telemetry
│   │   ├── window/         # Window shell, drag header, resize handles
│   │   └── common/         # Common buttons, modals, input elements
│   ├── apps/               # Virtual application modules (Terminal, Files, Monitor)
│   ├── context/            # Global React state (WindowManager, VFS, Settings)
│   ├── hooks/              # Custom hooks (useWindowDrag, useKeyboardShortcut)
│   ├── types/              # TypeScript interfaces and schemas
│   ├── utils/              # Command parsers, audio synth, formatting
│   ├── App.tsx             # Root desktop workspace container
│   ├── index.css           # Tailwind base styles and theme tokens
│   └── main.tsx            # DOM initialization
├── tests/                  # Unit and integration test suites
├── README.md               # Quickstart and overview
└── package.json            # Dependencies and npm scripts
```

---

## 3. Performance & Memory Constraints

- **Window State Immutability**: All window operations (reorder, minimize, move) executed via functional reducer state to avoid unnecessary DOM repaints.
- **Virtual DOM Throttling**: Terminal log outputs capped at 500 lines or virtualized to prevent memory bloat during prolonged sessions.
- **Bundle Budget**: Initial production gzip size maintained under **150 KB** (excluding optional audio files).
