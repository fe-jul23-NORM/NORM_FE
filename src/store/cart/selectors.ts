import { RootState } from '../index';
import { CartProduct, Order } from '../../types/product.types';

export const selectCart = (state: RootState): CartProduct[] => state.cart.cart;
export const selectCartLoading = (state: RootState): boolean => state.cart.isLoading;
export const selectOrders = (state: RootState): Order[] => state.cart.orders;
