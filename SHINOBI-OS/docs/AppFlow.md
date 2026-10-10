# Application Flow & User Journey: SHINOBI OS

## 1. Boot & Initialization Sequence

```
[Browser Request]
       │
       ▼
[Bootloader Screen] ──▶ Displays BIOS / Ninja Kernel POST Telemetry (Optional Skip)
       │
       ▼
[Desktop Stage Initialized]
       ├── Taskbar & System Tray Rendered
       ├── Desktop Icons & Wallpaper Loaded
       └── Default Window (Welcome Terminal / Dashboard) Opened
```

---

## 2. Window Management Lifecycle

```
[User Action: Click App Icon / Command in Terminal]
       │
       ▼
[Process Spawner] ──▶ Assigns PID, allocates initial viewport coordinates & z-index
       │
       ├── State: Active (Focused, highest z-index)
       ├── State: Minimized (Stored in Taskbar)
       ├── State: Maximized (Full screen bounds above taskbar)
       └── State: Closed (Process destroyed, window unmounted)
```

---

## 3. Terminal Execution Flow

1. **Prompt Display**: Displays `shinobi@kernel:~$` with customizable user handle and current path.
2. **Key Capture**:
   - `Enter`: Parse input into command and arguments.
   - `Up/Down Arrow`: Navigate bash history buffer.
   - `Tab`: Auto-complete file paths and system commands.
   - `Ctrl+C`: Abort ongoing prompt or process.
   - `Ctrl+L`: Clear screen.
3. **Command Dispatcher**:
   - Built-ins (`help`, `clear`, `exit`, `theme`, `echo`)
   - Filesystem (`ls`, `cd`, `cat`, `mkdir`, `rm`)
   - Applications (`open <app>`, `monitor`, `settings`)
   - Network simulation (`ping`, `curl`, `whoami`)
4. **Output Rendering**: Formatted ANSI/monospace log stream with syntax-highlighted responses.

---

## 4. Mobile & Responsive Flow

- **Screen Width >= 768px**: Full multi-window desktop with draggable floating panels.
- **Screen Width < 768px**: Automatically adapts into Mobile Tactical Mode:
  - Windows automatically expand to full screen.
  - Taskbar transforms into a touch-optimized bottom navigation drawer.
  - Swipe gestures toggle between active running apps.
