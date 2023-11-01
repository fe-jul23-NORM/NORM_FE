import { CartProduct, Order } from '../../types/product.types';

export type ICartState = {
  isLoading: boolean,
  cart: CartProduct[],
  orders: Order[],
  totalQuantity: number,
}
