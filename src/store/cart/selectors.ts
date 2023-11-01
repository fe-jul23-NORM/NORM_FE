import { RootState } from '../index';
import { CartProduct } from '../../types/product.types';

export const selectCart = (state: RootState): CartProduct[] => state.cart.cart;
