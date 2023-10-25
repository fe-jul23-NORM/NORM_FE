import { IProduct } from './product.types';

export interface IGetAllProductsResponse {
  result: IProduct[],
  total: number,
}
