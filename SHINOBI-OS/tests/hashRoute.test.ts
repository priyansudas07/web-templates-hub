import { describe, it, expect } from 'vitest';
import { parseHash } from '../src/hooks/useHashRoute';

describe('parseHash router utility', () => {
  it('defaults to terminal for empty hash', () => {
    expect(parseHash('')).toEqual({ route: 'terminal' });
    expect(parseHash('#')).toEqual({ route: 'terminal' });
    expect(parseHash('#/')).toEqual({ route: 'terminal' });
  });

  it('correctly parses valid primary routes', () => {
    expect(parseHash('#terminal')).toEqual({ route: 'terminal', subParam: undefined });
    expect(parseHash('#missions')).toEqual({ route: 'missions', subParam: undefined });
    expect(parseHash('#jutsu')).toEqual({ route: 'jutsu', subParam: undefined });
    expect(parseHash('#records')).toEqual({ route: 'records', subParam: undefined });
  });

  it('correctly parses modal routes', () => {
    expect(parseHash('#resume')).toEqual({ route: 'resume', subParam: undefined });
    expect(parseHash('#contact')).toEqual({ route: 'contact', subParam: undefined });
  });

  it('correctly parses subParams for deep links', () => {
    expect(parseHash('#missions/sports-gear')).toEqual({
      route: 'missions',
      subParam: 'sports-gear',
    });
    expect(parseHash('#missions/samvad')).toEqual({
      route: 'missions',
      subParam: 'samvad',
    });
  });

  it('falls back safely to terminal for invalid/unknown routes', () => {
    expect(parseHash('#non-existent-route')).toEqual({ route: 'terminal' });
    expect(parseHash('#secret/admin')).toEqual({ route: 'terminal' });
  });

  it('handles awakening by falling back to terminal in Phase 3', () => {
    expect(parseHash('#awakening')).toEqual({ route: 'terminal' });
  });

  it('handles case-insensitivity and extra trailing slashes', () => {
    expect(parseHash('#MISSIONS/')).toEqual({ route: 'missions', subParam: undefined });
    expect(parseHash('#Jutsu')).toEqual({ route: 'jutsu', subParam: undefined });
  });
});
