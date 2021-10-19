import { IProductData } from '../../../types/types';

export function addToCart(product: IProductData) {
  return {
    type: '@cart/ADD',
    product,
  };
}
export function removeFromCart(id: number) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id: number, amount: number) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}