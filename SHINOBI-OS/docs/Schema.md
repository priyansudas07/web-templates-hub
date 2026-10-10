# System State & Data Schemas: SHINOBI OS

## 1. Window Instance Model

```typescript
export interface WindowInstance {
  id: string;                      // Unique window instance ID (e.g., 'terminal-1')
  appId: string;                   // App descriptor key (e.g., 'terminal', 'files')
  title: string;                   // Display title in title bar
  icon?: string;                   // Icon identifier
  position: { x: number; y: number }; // Pixel coordinates relative to viewport
  size: { width: number; height: number }; // Dimensions
  minSize?: { width: number; height: number };
  zIndex: number;                  // Stacking order
  isMinimized: boolean;            // Minimized to taskbar
  isMaximized: boolean;            // Occupying full screen
  isFocused: boolean;              // Current active window
}
```

---

## 2. Virtual File System (VFS) Node

```typescript
export type VFSNodeType = 'file' | 'directory' | 'symlink';

export interface VFSNode {
  id: string;
  name: string;
  path: string;
  type: VFSNodeType;
  size?: number;                   // Size in bytes
  createdAt: string;               // ISO 8601 string
  updatedAt: string;
  permissions?: string;            // e.g., 'rwxr-xr-x'
  content?: string;                // Raw file text/markdown or base64 for assets
  children?: VFSNode[];            // Nested nodes for directories
}
```

---

## 3. Terminal History & Command Stream

```typescript
export interface TerminalCommand {
  command: string;
  args: string[];
  raw: string;
  timestamp: number;
}

export interface TerminalOutputLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  content: string;
  timestamp: number;
}
```

---

## 4. System Settings & Personalization State

```typescript
export interface SystemSettings {
  theme: 'crimson' | 'cyan' | 'emerald' | 'monochrome';
  soundEnabled: boolean;
  soundVolume: number;             // 0.0 to 1.0
  wallpaper: string;               // Preset ID or URL
  crtScanlineEffect: boolean;
  desktopIconsVisible: boolean;
  dockPosition: 'bottom' | 'top';
}
```
