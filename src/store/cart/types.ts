import { CartProduct } from "../../types/product.types";

export type ICartState = {
  isLoading: boolean,
  cart: CartProduct[],
  totalQuantity: number,
}
