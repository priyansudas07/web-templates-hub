# Asset Manifest & Media Registry: SHINOBI OS

## 1. Typography Fonts

| Font Family | Usage | Source / Format |
|---|---|---|
| **Fira Code** | Monospace, code viewer, terminal shell | Google Fonts (`woff2`) |
| **Inter** | System UI labels, buttons, windows | Google Fonts (`woff2`) |

---

## 2. Audio Effects (Synthesized & Audio Files)

| Sound Event | Description | Implementation |
|---|---|---|
| `boot_sound` | Cyberpunk synth chord on bootloader launch | Web Audio Oscillator / MP3 |
| `key_click` | Subtle tactical mechanical click on keydown | Web Audio Noise / Pulse |
| `window_open` | Whoosh sound when a window mounts | Synthesized sine sweep |
| `window_close` | Low frequency click when window terminates | Synthesized pitch decay |

---

## 3. Wallpapers & Textures

| Asset | Path | Description |
|---|---|---|
| `scanlines.png` | `public/textures/scanlines.png` | CRT scanline subtle overlay (3% opacity) |
| `shinobi-dark.webp` | `public/wallpapers/shinobi-dark.webp` | Default dark carbon/slate desktop background |
| `favicon.svg` | `public/favicon.svg` | Red shuriken ninja star vector favicon |
