import React from 'react';
import type { Product, Size } from '../../types/product';
import { createWhatsAppLink } from '../../utils/whatsapp';
import { MessageCircle } from 'lucide-react';
import { Button } from '../common/Button';

export interface WhatsAppButtonProps {
  product?: Product;
  selectedSize?: Size | string;
  productName?: string;
  price?: number;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  product,
  selectedSize,
  productName,
  price,
  label = 'Enquire on WhatsApp',
  size = 'md',
  fullWidth = true,
  className = ''
}) => {
  let url = '';
  if (product) {
    url = createWhatsAppLink(product, selectedSize);
  } else if (productName && price !== undefined) {
    url = createWhatsAppLink(productName, price, selectedSize);
  } else {
    url = createWhatsAppLink(productName || 'Sports Gear Item', 0, selectedSize);
  }

  return (
    <Button
      variant="emerald"
      size={size}
      href={url}
      isExternal
      fullWidth={fullWidth}
      icon={<MessageCircle className="w-5 h-5" />}
      className={className}
    >
      {label}
    </Button>
  );
};
