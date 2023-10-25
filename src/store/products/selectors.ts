import { RootState } from '../index';
import { ICurrentProduct, IProduct } from '../../types/product.types';

export const selectAllProducts = (state: RootState): IProduct[] => state.product.all;

export const selectRecommended = (state: RootState): IProduct[] => state.product.recommended;

export const selectNewProducts = (state: RootState): IProduct[] => state.product.new;

export const selectDiscountProducts = (state: RootState): IProduct[] => state.product.discount;

export const selectCurrentProduct = (state: RootState): ICurrentProduct | null => state.product.currentProduct;

export const selectProductsIsLoading = (state: RootState): boolean => state.product.isLoading;

export const selectProductsCount = (state: RootState): number => state.product.totalCount;
