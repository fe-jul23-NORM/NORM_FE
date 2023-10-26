import { ICurrentProduct, IProduct } from '../../types/product.types';

export interface IProductState {
  isLoading: boolean,
  totalCount: number,
  discount: IProduct[],
  new: IProduct[],
  recommended: IProduct[],
  all: IProduct[],
  currentProduct: ICurrentProduct | null,
  favorites: IProduct[]
}
