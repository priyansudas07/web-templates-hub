export type Sport = 'football' | 'cricket' | 'basketball';

export type Category = 
  | 'club-teams' 
  | 'national-teams' 
  | 'retro-grails' 
  | 'special-edition';

export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Availability = 'available' | 'unavailable' | 'contact';

export interface Product {
  id: string;
  name: string;
  sport: Sport;
  category: Category;
  team?: string;
  player?: string;
  season?: string;
  price: number;
  currency: 'INR';
  images: string[];
  sizes: Size[];
  description: string;
  featured: boolean;
  newArrival: boolean;
  availability: Availability;
  badgeTag?: string; // e.g. "MATCH EDITION", "RETRO GRAIL", "LIMITED"
  archiveNo?: string; // e.g. "001"
  techSpec?: string; // e.g. "DRI-FIT ADV"
}
