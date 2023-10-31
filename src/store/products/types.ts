import { CurrentProduct, Product } from '../../types/product.types';

export interface ProductState {
  isLoading: boolean,
  totalCount: number,
  discount: Product[],
  new: Product[],
  recommended: Product[],
  all: Product[],
  currentProduct: CurrentProduct | null,
  favourites: Product[]
}
