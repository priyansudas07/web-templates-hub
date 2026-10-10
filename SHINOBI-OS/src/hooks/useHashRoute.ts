import { useState, useEffect, useCallback } from 'react';
import type { RouteKey, RouteState, PrimaryRouteKey } from '@/types/navigation';
import { VALID_ROUTES, PRIMARY_ROUTES } from '@/types/navigation';

export interface UseHashRouteReturn {
  route: RouteKey;
  subParam?: string;
  activePrimaryRoute: PrimaryRouteKey;
  navigate: (targetRoute: RouteKey, param?: string) => void;
  closeModal: () => void;
}

const DEFAULT_ROUTE: PrimaryRouteKey = 'terminal';

/**
 * Parses a window.location.hash string into a normalized RouteState.
 * Example: "#missions/sports-gear" -> { route: 'missions', subParam: 'sports-gear' }
 */
export function parseHash(hashStr: string): RouteState {
  if (!hashStr) {
    return { route: DEFAULT_ROUTE };
  }

  // Strip leading '#' and trim slashes
  const clean = hashStr.replace(/^#\/?/, '').trim();
  if (!clean) {
    return { route: DEFAULT_ROUTE };
  }

  const parts = clean.split('/').filter(Boolean);
  const rawRoute = parts[0]?.toLowerCase() as RouteKey;
  const subParam = parts[1] ? decodeURIComponent(parts[1]) : undefined;

  // Validate route
  if (VALID_ROUTES.includes(rawRoute)) {
    // If route is 'awakening' in Phase 3, fall back gracefully to default
    if (rawRoute === 'awakening') {
      return { route: DEFAULT_ROUTE };
    }
    return { route: rawRoute, subParam };
  }

  // Unknown route fallback
  return { route: DEFAULT_ROUTE };
}

/**
 * Reactive hook that synchronizes the application view with window.location.hash
 */
export function useHashRoute(): UseHashRouteReturn {
  const [routeState, setRouteState] = useState<RouteState>(() => {
    if (typeof window === 'undefined') {
      return { route: DEFAULT_ROUTE };
    }
    return parseHash(window.location.hash);
  });

  const [activePrimaryRoute, setActivePrimaryRoute] = useState<PrimaryRouteKey>(() => {
    const initial = typeof window !== 'undefined' ? parseHash(window.location.hash) : { route: DEFAULT_ROUTE };
    if (PRIMARY_ROUTES.includes(initial.route as PrimaryRouteKey)) {
      return initial.route as PrimaryRouteKey;
    }
    return DEFAULT_ROUTE;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseHash(window.location.hash);
      setRouteState(parsed);

      if (PRIMARY_ROUTES.includes(parsed.route as PrimaryRouteKey)) {
        setActivePrimaryRoute(parsed.route as PrimaryRouteKey);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = useCallback((targetRoute: RouteKey, param?: string) => {
    let nextHash = `#${targetRoute}`;
    if (param) {
      nextHash += `/${encodeURIComponent(param)}`;
    }

    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      // If hash is already the same, re-trigger state update to ensure sync
      const parsed = parseHash(nextHash);
      setRouteState(parsed);
      if (PRIMARY_ROUTES.includes(parsed.route as PrimaryRouteKey)) {
        setActivePrimaryRoute(parsed.route as PrimaryRouteKey);
      }
    }
  }, []);

  const closeModal = useCallback(() => {
    // If on a sub-param route like #missions/sports-gear, go back to #missions
    if (routeState.route === 'missions' && routeState.subParam) {
      navigate('missions');
      return;
    }
    // If on a modal route like #resume or #contact, go back to active primary route
    navigate(activePrimaryRoute);
  }, [routeState, activePrimaryRoute, navigate]);

  return {
    route: routeState.route,
    subParam: routeState.subParam,
    activePrimaryRoute,
    navigate,
    closeModal,
  };
}
