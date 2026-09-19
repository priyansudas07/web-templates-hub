import type { Product, Category, Sport } from '../types/product';
import { validateProducts } from '../utils/validation';

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
      '/kits/portugal-front.png',
      '/kits/portugal-back.png'
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
      'https://images.unsplash.com/photo-1760551732609-921e12e13a66?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1645956162922-7caf2bf54eec?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1671016233730-44258a88eb03?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1671016233853-5db7def7ff76?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1599982917650-21da4d09c437?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1623521602452-1a7cd695feca?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1561850865-b802611b72a1?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1745944756454-938dcb6e62ea?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1745944756494-eba8a8de1d5d?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1580149959218-3002c427a6dc?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1530279281203-4c60af01ee58?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=85'
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
      'https://images.unsplash.com/photo-1772474659559-7d009fef11df?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1557778358-9fb87328a7db?auto=format&fit=crop&w=1000&q=85'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Iconic 1999 Champions League treble final home kit featuring button-down collar and Sharp sponsorship graphic.',
    featured: true,
    newArrival: false,
    availability: 'available',
    badgeTag: 'RETRO GRAIL'
  }
];

// Execute data layer validation check on dataset
const validationErrors = validateProducts(products);
if (validationErrors.length > 0) {
  console.error('[Catalog Validation Failed]', validationErrors);
}

// Data access helpers
export const getAllProducts = (): Product[] => {
  return products;
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySport = (sport: Sport): Product[] => {
  return products.filter(p => p.sport === sport);
};
