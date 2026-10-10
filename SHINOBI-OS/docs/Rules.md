# Engineering Rules & Guidelines: SHINOBI OS

## 1. Code Style & Architecture Standards

1. **Strict TypeScript**:
   - No implicit `any`. Always declare explicit prop types and interfaces.
   - Store all shared interfaces in `src/types/`.

2. **Component Modularity**:
   - Every virtual application must be fully isolated in `src/apps/<AppName>/`.
   - Applications must communicate with the OS solely through context hooks (`useWindowManager`, `useFileSystem`, `useSystemSettings`).

3. **Styling Guidelines**:
   - Utilize Tailwind CSS utility classes; avoid inline style objects except for dynamic pixel coordinate updates (`x`, `y`, `width`, `height`, `zIndex`).
   - Retain design system color tokens (`rose-500` / Crimson, `cyan-400` / Cyan, `emerald-400` / Emerald, dark slate backgrounds).

4. **Performance & Rendering**:
   - Memoize heavy window contents using `React.memo` or `useMemo` so inactive windows do not re-render when other windows are dragged or resized.
   - Use CSS `transform: translate3d(...)` or Framer Motion for hardware acceleration during window movements.

---

## 2. Git & Commit Guidelines

- Follow Conventional Commits:
  - `feat(<scope>): description`
  - `fix(<scope>): description`
  - `docs(<scope>): description`
  - `refactor(<scope>): description`
  - `test(<scope>): description`
- Never commit `dist/`, build logs, or unformatted dependencies.
