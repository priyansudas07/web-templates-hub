import type { CategoryItem } from '../types/category';

export const categories: CategoryItem[] = [
  {
    id: 'all',
    name: 'All Collection',
    description: 'Browse all available kits across Football, Cricket, and Basketball.',
    countBadge: '12 KITS'
  },
  {
    id: 'football',
    name: 'Football Kits',
    sport: 'football',
    description: 'Authentic club and national team match kits from top European leagues and tournaments.',
    countBadge: '6 KITS'
  },
  {
    id: 'cricket',
    name: 'Cricket Jerseys',
    sport: 'cricket',
    description: 'Official national team jerseys and IPL franchise fan editions.',
    countBadge: '3 KITS'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    sport: 'basketball',
    description: 'NBA hardwood classics, city edition swingman jerseys, and iconic signature gear.',
    countBadge: '3 KITS'
  },
  {
    id: 'club-teams',
    name: 'Club Teams',
    description: 'Domestic and international club kits from Real Madrid, Arsenal, Barcelona, and more.',
    countBadge: '7 KITS'
  },
  {
    id: 'national-teams',
    name: 'National Teams',
    description: 'World Cup and international tournament jerseys for Portugal, Argentina, India, and more.',
    countBadge: '5 KITS'
  }
];
