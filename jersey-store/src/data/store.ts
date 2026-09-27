import type { StoreInfo, NavItem } from '../types/store';

export const storeInfo: StoreInfo = {
  name: "SPORTS GEAR",
  tagline: "Authentic Match Kits, Retro Grails & Premium Sportswear",
  description: "Sports Gear is a boutique sportswear catalog bringing authentic match kits, rare retro grails, and premium athletic apparel for true fans of the game.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "123 Stadium Road, Sports Hub District, Mumbai, Maharashtra 400001",
  openingHours: "Monday – Saturday: 10:00 AM – 9:00 PM | Sunday: 11:00 AM – 7:00 PM",
  instagram: "@sportsgear_official",
  locationUrl: "https://maps.google.com/?q=Sports+Gear+Mumbai",
  email: "inquiries@sportsgear.in"
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Collection', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
