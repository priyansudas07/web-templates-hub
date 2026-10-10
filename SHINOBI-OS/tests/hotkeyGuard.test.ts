import { describe, it, expect } from 'vitest';
import { shouldIgnoreHotkey, getHotkeyRoute } from '../src/utils/hotkeyGuard';

describe('hotkeyGuard utility', () => {
  describe('shouldIgnoreHotkey', () => {
    it('returns false for null or undefined target', () => {
      expect(shouldIgnoreHotkey(null)).toBe(false);
    });

    it('returns true when typing in INPUT, TEXTAREA, or SELECT elements', () => {
      expect(shouldIgnoreHotkey({ tagName: 'INPUT' })).toBe(true);
      expect(shouldIgnoreHotkey({ tagName: 'input' })).toBe(true);
      expect(shouldIgnoreHotkey({ tagName: 'TEXTAREA' })).toBe(true);
      expect(shouldIgnoreHotkey({ tagName: 'SELECT' })).toBe(true);
    });

    it('returns true when element is contentEditable', () => {
      expect(shouldIgnoreHotkey({ tagName: 'DIV', isContentEditable: true })).toBe(true);
    });

    it('returns false for regular elements like BUTTON, BODY, DIV, A', () => {
      expect(shouldIgnoreHotkey({ tagName: 'BUTTON' })).toBe(false);
      expect(shouldIgnoreHotkey({ tagName: 'DIV' })).toBe(false);
      expect(shouldIgnoreHotkey({ tagName: 'BODY' })).toBe(false);
      expect(shouldIgnoreHotkey({ tagName: 'A' })).toBe(false);
    });
  });

  describe('getHotkeyRoute', () => {
    it('maps Alt+1 through Alt+6 to correct RouteKeys', () => {
      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '1',
        })
      ).toBe('terminal');

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '2',
        })
      ).toBe('missions');

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '3',
        })
      ).toBe('jutsu');

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '4',
        })
      ).toBe('records');

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '5',
        })
      ).toBe('resume');

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '6',
        })
      ).toBe('contact');
    });

    it('rejects events when altKey is false', () => {
      expect(
        getHotkeyRoute({
          altKey: false,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: '1',
        })
      ).toBeNull();
    });

    it('rejects events with conflicting modifiers (Ctrl, Meta, Shift)', () => {
      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: true,
          metaKey: false,
          shiftKey: false,
          key: '1',
        })
      ).toBeNull();

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: true,
          shiftKey: false,
          key: '2',
        })
      ).toBeNull();

      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: true,
          key: '3',
        })
      ).toBeNull();
    });

    it('rejects non-numeric keys', () => {
      expect(
        getHotkeyRoute({
          altKey: true,
          ctrlKey: false,
          metaKey: false,
          shiftKey: false,
          key: 'a',
        })
      ).toBeNull();
    });
  });
});
