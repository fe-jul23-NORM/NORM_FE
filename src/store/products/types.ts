import { CurrentProduct, Product, ProductsCount } from '../../types/product.types';

export interface ProductState {
  isLoading: boolean,
  totalCount: number,
  discount: Product[],
  new: Product[],
  recommended: Product[],
  all: Product[],
  currentProduct: CurrentProduct | null,
  favorites: Product[],
  productsCount: ProductsCount,
}
