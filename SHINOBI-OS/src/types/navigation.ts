/**
 * Navigation and Routing types for SHINOBI OS
 */

export type RouteKey = 
  | 'terminal' 
  | 'missions' 
  | 'jutsu' 
  | 'records' 
  | 'resume' 
  | 'contact' 
  | 'awakening';

export interface RouteState {
  route: RouteKey;
  subParam?: string;
}

export type PrimaryRouteKey = 'terminal' | 'missions' | 'jutsu' | 'records';

export const VALID_ROUTES: readonly RouteKey[] = [
  'terminal',
  'missions',
  'jutsu',
  'records',
  'resume',
  'contact',
  'awakening',
] as const;

export const PRIMARY_ROUTES: readonly PrimaryRouteKey[] = [
  'terminal',
  'missions',
  'jutsu',
  'records',
] as const;
