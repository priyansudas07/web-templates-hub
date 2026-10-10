import { describe, it, expect } from 'vitest';
import { parseTerminalCommand } from '../src/utils/terminalCommands';

describe('parseTerminalCommand utility', () => {
  it('parses empty or whitespace input safely', () => {
    expect(parseTerminalCommand('')).toEqual({
      raw: '',
      commandType: 'unknown',
      args: [],
      routeNavigation: undefined,
    });
    expect(parseTerminalCommand('   ')).toEqual({
      raw: '',
      commandType: 'unknown',
      args: [],
      routeNavigation: undefined,
    });
  });

  it('parses help command', () => {
    const res = parseTerminalCommand('help');
    expect(res.commandType).toBe('help');
    expect(res.args).toEqual([]);
    expect(res.routeNavigation).toBeUndefined();
  });

  it('parses about and its aliases (bio, whoami)', () => {
    expect(parseTerminalCommand('about').commandType).toBe('about');
    expect(parseTerminalCommand('bio').commandType).toBe('about');
    expect(parseTerminalCommand('whoami').commandType).toBe('about');
  });

  it('parses projects and its aliases (missions, ls) with route navigation', () => {
    const p1 = parseTerminalCommand('projects');
    expect(p1.commandType).toBe('projects');
    expect(p1.routeNavigation).toEqual({ route: 'missions', subParam: undefined });

    const p2 = parseTerminalCommand('missions sports-gear');
    expect(p2.commandType).toBe('projects');
    expect(p2.args).toEqual(['sports-gear']);
    expect(p2.routeNavigation).toEqual({ route: 'missions', subParam: 'sports-gear' });

    const p3 = parseTerminalCommand('ls');
    expect(p3.commandType).toBe('projects');
  });

  it('parses skills and jutsu aliases with route navigation', () => {
    expect(parseTerminalCommand('skills').commandType).toBe('skills');
    expect(parseTerminalCommand('jutsu').routeNavigation).toEqual({ route: 'jutsu' });
  });

  it('parses records, experience, and timeline aliases with route navigation', () => {
    expect(parseTerminalCommand('records').commandType).toBe('records');
    expect(parseTerminalCommand('experience').routeNavigation).toEqual({ route: 'records' });
    expect(parseTerminalCommand('timeline').routeNavigation).toEqual({ route: 'records' });
  });

  it('parses resume and contact commands with modal route navigation', () => {
    expect(parseTerminalCommand('resume').routeNavigation).toEqual({ route: 'resume' });
    expect(parseTerminalCommand('contact').routeNavigation).toEqual({ route: 'contact' });
  });

  it('parses clear and history commands', () => {
    expect(parseTerminalCommand('clear').commandType).toBe('clear');
    expect(parseTerminalCommand('history').commandType).toBe('history');
  });

  it('identifies unknown commands', () => {
    const res = parseTerminalCommand('rm -rf /');
    expect(res.commandType).toBe('unknown');
    expect(res.raw).toBe('rm -rf /');
  });

  it('handles casing and excess whitespace', () => {
    const res = parseTerminalCommand('   PROJECTS    sports-gear   ');
    expect(res.commandType).toBe('projects');
    expect(res.args).toEqual(['sports-gear']);
    expect(res.routeNavigation).toEqual({ route: 'missions', subParam: 'sports-gear' });
  });
});
