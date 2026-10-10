import type { RouteKey } from '@/types/navigation';

export interface HotkeyEventLike {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  key: string;
}

export interface TargetElementLike {
  tagName?: string;
  isContentEditable?: boolean;
}

/**
 * Returns true if an event's target element is an editable field, input, or textarea.
 * Used to ensure global navigation hotkeys do not interfere with typing.
 */
export function shouldIgnoreHotkey(target: TargetElementLike | null): boolean {
  if (!target) return false;

  const tag = target.tagName ? target.tagName.toUpperCase() : '';
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
    return true;
  }

  if (target.isContentEditable === true) {
    return true;
  }

  return false;
}

/**
 * Identifies if a keyboard event corresponds to an Alt+1..6 tactical navigation hotkey.
 * Returns the target RouteKey, or null if not a matching hotkey.
 */
export function getHotkeyRoute(event: HotkeyEventLike): RouteKey | null {
  // Must have Alt, and must NOT have Ctrl, Meta, or Shift
  if (!event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
    return null;
  }

  switch (event.key) {
    case '1':
      return 'terminal';
    case '2':
      return 'missions';
    case '3':
      return 'jutsu';
    case '4':
      return 'records';
    case '5':
      return 'resume';
    case '6':
      return 'contact';
    default:
      return null;
  }
}
