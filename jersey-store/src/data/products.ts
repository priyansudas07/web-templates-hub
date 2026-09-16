import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'portugal-home-2026',
    name: 'Portugal Home Jersey 2025/26',
    sport: 'football',
    category: 'national-teams',
    team: 'Portugal',
    player: 'Cristiano Ronaldo',
    season: '2025/26',
    price: 1499,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Official national team home edition featuring breathable Dri-FIT moisture-wicking fabric, authentic heat-applied crest, and ergonomic athletic side paneling.',
    featured: true,
    newArrival: true,
    availability: 'available',
    badgeTag: 'MATCH VERSION'
  },
  {
    id: 'real-madrid-home-2026',
    name: 'Real Madrid Home Jersey 2025/26',
    sport: 'football',
    category: 'club-teams',
    team: 'Real Madrid',
    player: 'Jude Bellingham',
    season: '2025/26',
    price: 1599,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Iconic crisp white kit with gold accents and houndstooth texture weave. Engineered for performance and durability.',
    featured: true,
    newArrival: false,
    availability: 'available',
    badgeTag: 'NEW'
  },
  {
    id: 'argentina-three-star-retro',
    name: 'Argentina 3-Star World Cup Edition',
    sport: 'football',
    category: 'national-teams',
    team: 'Argentina',
    player: 'Lionel Messi',
    season: '2022/23',
    price: 1699,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Legendary 3-star edition celebrating world championship victory with embroidered gold crest details and sky-blue albiceleste stripes.',
    featured: true,
    newArrival: false,
    availability: 'available',
    badgeTag: 'RETRO GRAIL'
  },
  {
    id: 'india-cricket-t20-jersey',
    name: 'India National T20 Match Jersey',
    sport: 'cricket',
    category: 'national-teams',
    team: 'India',
    player: 'Virat Kohli',
    season: '2024/25',
    price: 1399,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Pro-match edition in deep royal blue with tri-color collar accents and micro-mesh airflow inserts for tropical climate play.',
    featured: true,
    newArrival: true,
    availability: 'available',
    badgeTag: 'FEATURED'
  },
  {
    id: 'chicago-bulls-jordan-classic',
    name: 'Chicago Bulls #23 Hardwood Classic',
    sport: 'basketball',
    category: 'special-edition',
    team: 'Chicago Bulls',
    player: 'Michael Jordan',
    season: '1997/98',
    price: 1799,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    description: 'Hardwood classic swingman jersey featuring premium tackle-twill stitching, black-and-red pinstripe weave, and authentic Mitchell & Ness heritage tagging.',
    featured: true,
    newArrival: false,
    availability: 'available',
    badgeTag: 'LIMITED'
  },
  {
    id: 'arsenal-away-black-gold',
    name: 'Arsenal Away Black & Gold Edition',
    sport: 'football',
    category: 'club-teams',
    team: 'Arsenal',
    player: 'Bukayo Saka',
    season: '2024/25',
    price: 1499,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Stealth black kit with metallic bronze-gold cannon badge. Engineered for lightweight comfort and streetwear versatility.',
    featured: false,
    newArrival: true,
    availability: 'available',
    badgeTag: 'NEW'
  },
  {
    id: 'lakers-city-edition-2025',
    name: 'LA Lakers City Edition Purple & Gold',
    sport: 'basketball',
    category: 'special-edition',
    team: 'LA Lakers',
    player: 'LeBron James',
    season: '2024/25',
    price: 1649,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1574623135724-15552b7b3c03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'City Edition swingman with subtle snake-skin texture watermark and heat-sealed name and number graphics.',
    featured: false,
    newArrival: true,
    availability: 'available',
    badgeTag: 'SPECIAL EDITION'
  },
  {
    id: 'mumbai-indians-ipl-2025',
    name: 'Mumbai Indians Official IPL Jersey',
    sport: 'cricket',
    category: 'club-teams',
    team: 'Mumbai Indians',
    player: 'Rohit Sharma',
    season: '2025',
    price: 1299,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Official blue and gold franchise kit constructed from fast-drying performance polyester mesh.',
    featured: false,
    newArrival: false,
    availability: 'available',
    badgeTag: 'MATCH EDITION'
  },
  {
    id: 'manchester-united-retro-1999',
    name: 'Manchester United 1999 Treble Retro',
    sport: 'football',
    category: 'retro-grails',
    team: 'Manchester United',
    player: 'David Beckham',
    season: '1998/99',
    price: 1749,
    currency: 'INR',
    images: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Iconic 1999 Champions League treble final home kit featuring button-down collar and Sharp sponsorship graphic.',
    featured: true,
    newArrival: false,
    availability: 'available',
    badgeTag: 'RETRO GRAIL'
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
