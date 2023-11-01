import { RootState } from '../index';
import { CurrentProduct, Product, ProductsCount } from '../../types/product.types';

export const selectAllProducts = (state: RootState): Product[] => state.product.all;

export const selectRecommended = (state: RootState): Product[] => state.product.recommended;

export const selectNewProducts = (state: RootState): Product[] => state.product.new;

export const selectDiscountProducts = (state: RootState): Product[] => state.product.discount;

export const selectCurrentProduct = (state: RootState): CurrentProduct | null => state.product.currentProduct;

export const selectProductsIsLoading = (state: RootState): boolean => state.product.isLoading;

export const selectProductsCount = (state: RootState): number => state.product.totalCount;

export const selectProductsCategoryCount = (state: RootState): ProductsCount => state.product.productsCount;
