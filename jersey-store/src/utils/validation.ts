import type { Product } from '../types/product';

export interface ProductValidationError {
  id: string;
  message: string;
}

/**
 * Lightweight data validation for catalog products
 */
export const validateProducts = (productList: Product[]): ProductValidationError[] => {
  const errors: ProductValidationError[] = [];
  const seenIds = new Set<string>();

  for (const p of productList) {
    if (!p.id || typeof p.id !== 'string') {
      errors.push({ id: p.id || 'unknown', message: 'Product missing valid ID string' });
    } else if (seenIds.has(p.id)) {
      errors.push({ id: p.id, message: `Duplicate product ID found: "${p.id}"` });
    } else {
      seenIds.add(p.id);
    }

    if (!p.name || typeof p.name !== 'string') {
      errors.push({ id: p.id, message: 'Product missing name' });
    }

    if (typeof p.price !== 'number' || isNaN(p.price) || p.price <= 0) {
      errors.push({ id: p.id, message: `Invalid price for product ${p.id}: ${p.price}` });
    }

    if (p.currency !== 'INR') {
      errors.push({ id: p.id, message: `Invalid currency for product ${p.id}: ${p.currency}` });
    }

    if (!Array.isArray(p.images) || p.images.length === 0) {
      errors.push({ id: p.id, message: `Product ${p.id} must have a non-empty images array` });
    }

    if (!Array.isArray(p.sizes) || p.sizes.length === 0) {
      errors.push({ id: p.id, message: `Product ${p.id} must have a non-empty sizes array` });
    }

    if (typeof p.featured !== 'boolean') {
      errors.push({ id: p.id, message: `Product ${p.id} featured must be boolean` });
    }

    if (typeof p.newArrival !== 'boolean') {
      errors.push({ id: p.id, message: `Product ${p.id} newArrival must be boolean` });
    }

    if (!['available', 'unavailable', 'contact'].includes(p.availability)) {
      errors.push({ id: p.id, message: `Invalid availability for product ${p.id}: ${p.availability}` });
    }
  }

  return errors;
};
