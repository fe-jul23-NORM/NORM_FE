import { Product } from './product.types';

export interface IGetAllProductsResponse {
  result: Product[],
  total: number,
}
