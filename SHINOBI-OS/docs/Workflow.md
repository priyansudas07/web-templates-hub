# Development Workflow & CI/CD: SHINOBI OS

## 1. Local Development Commands

```bash
# Navigate to the template directory
cd SHINOBI-OS

# Install dependencies
npm install

# Start development server with hot-module replacement
npm run dev

# Run typechecks and production build
npm run build

# Preview production build locally
npm run preview
```

---

## 2. Feature Addition Workflow

1. **Creating a New Virtual Application**:
   - Create a folder under `src/apps/<AppIdentifier>/` (e.g. `src/apps/TextEditor/`).
   - Create the main view component `index.tsx`.
   - Register the application in the system registry (`src/config/apps.ts`) with default window dimensions, icon, and title.
2. **Adding Terminal Commands**:
   - Add command definition in `src/utils/commands.ts`.
   - Define command execution handler returning string, JSX, or triggering window actions.

---

## 3. Production Deployment

SHINOBI OS compiles down to static HTML/CSS/JS assets in `dist/`.

- **Vercel**: Pre-configured for zero-config static deployment.
- **GitHub Pages**: Static export ready.
- **Netlify**: Deploy using `npm run build` and publish directory `dist`.
