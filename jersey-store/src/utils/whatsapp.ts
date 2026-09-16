import { storeInfo } from '../data/store';
import type { Product, Size } from '../types/product';

/**
 * Creates a centralized WhatsApp inquiry URL for a specific product or custom message.
 * Supports passing either a Product object or (productName, price, size) parameters.
 */
export function createWhatsAppLink(
  product: Product,
  selectedSize?: Size | string
): string;
export function createWhatsAppLink(
  productName: string,
  price: number,
  selectedSize?: Size | string
): string;
export function createWhatsAppLink(
  productOrName: Product | string,
  priceOrSize?: number | Size | string,
  selectedSize?: Size | string
): string {
  const number = storeInfo.whatsapp;
  let productName: string;
  let price = 0;
  let size: string | undefined;

  if (typeof productOrName === 'object') {
    productName = productOrName.name;
    price = productOrName.price;
    size = typeof priceOrSize === 'string' ? priceOrSize : undefined;
  } else {
    productName = productOrName;
    price = typeof priceOrSize === 'number' ? priceOrSize : 0;
    size = selectedSize;
  }

  let text = `Hi Sports Gear! I am interested in ordering the ${productName}.`;
  if (price > 0) {
    text += `\nPrice: ₹${price.toLocaleString('en-IN')}`;
  }
  
  if (size) {
    text += `\nSize: ${size}`;
  }
  
  text += `\n\nIs this available for delivery or pickup?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export const createGeneralWhatsAppLink = (): string => {
  const number = storeInfo.whatsapp;
  const text = `Hi Sports Gear! I am visiting your website and have a general inquiry about your sportswear collection.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
