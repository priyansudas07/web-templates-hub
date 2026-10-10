import type { RouteKey } from '@/types/navigation';

export type TerminalCommandType =
  | 'help'
  | 'about'
  | 'projects'
  | 'skills'
  | 'records'
  | 'resume'
  | 'contact'
  | 'clear'
  | 'history'
  | 'unknown';

export interface ParsedCommand {
  raw: string;
  commandType: TerminalCommandType;
  args: string[];
  routeNavigation?: {
    route: RouteKey;
    subParam?: string;
  };
}

const COMMAND_ALIASES: Record<string, TerminalCommandType> = {
  help: 'help',
  about: 'about',
  bio: 'about',
  whoami: 'about',
  projects: 'projects',
  missions: 'projects',
  ls: 'projects',
  skills: 'skills',
  jutsu: 'skills',
  records: 'records',
  experience: 'records',
  timeline: 'records',
  resume: 'resume',
  contact: 'contact',
  clear: 'clear',
  history: 'history',
};

/**
 * Deterministic parser for terminal commands and aliases
 */
export function parseTerminalCommand(rawInput: string): ParsedCommand {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return {
      raw: '',
      commandType: 'unknown',
      args: [],
    };
  }

  const parts = trimmed.split(/\s+/).filter(Boolean);
  const head = parts[0].toLowerCase();
  const args = parts.slice(1);

  const commandType = COMMAND_ALIASES[head] || 'unknown';

  let routeNavigation: ParsedCommand['routeNavigation'] = undefined;

  switch (commandType) {
    case 'projects':
      routeNavigation = {
        route: 'missions',
        subParam: args[0]?.toLowerCase(),
      };
      break;
    case 'skills':
      routeNavigation = { route: 'jutsu' };
      break;
    case 'records':
      routeNavigation = { route: 'records' };
      break;
    case 'resume':
      routeNavigation = { route: 'resume' };
      break;
    case 'contact':
      routeNavigation = { route: 'contact' };
      break;
  }

  return {
    raw: trimmed,
    commandType,
    args,
    routeNavigation,
  };
}
