import { storeInfo } from '../data/store';

export const createWhatsAppLink = (
  productName: string,
  price: number,
  size?: string
): string => {
  const number = storeInfo.whatsapp;
  let text = `Hi Sports Gear! I am interested in ordering the ${productName}.\nPrice: ₹${price.toLocaleString('en-IN')}`;
  
  if (size) {
    text += `\nSize: ${size}`;
  }
  
  text += `\n\nIs this available for delivery or pickup?`;

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export const createGeneralWhatsAppLink = (): string => {
  const number = storeInfo.whatsapp;
  const text = `Hi Sports Gear! I am visiting your website and have a general inquiry about your sportswear collection.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};
