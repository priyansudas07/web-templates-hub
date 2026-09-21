import type { CategoryItem } from '../types/category';

export const categories: CategoryItem[] = [
  {
    id: 'all',
    name: 'ALL',
    description: 'All authentic match kits, retro grails, and player editions.',
  },
  {
    id: 'football',
    name: 'FOOTBALL',
    sport: 'football',
    description: 'European leagues, Champions League editions, and national kits.',
  },
  {
    id: 'cricket',
    name: 'CRICKET',
    sport: 'cricket',
    description: 'International test, ODI, and T20 pro-match jerseys.',
  },
  {
    id: 'basketball',
    name: 'BASKETBALL',
    sport: 'basketball',
    description: 'Hardwood classics, city editions, and signature jerseys.',
  },
  {
    id: 'clubs',
    name: 'CLUBS',
    description: 'Domestic and international club match kits.',
  },
  {
    id: 'national',
    name: 'NATIONAL',
    description: 'World Cup and international tournament national team kits.',
  }
];
