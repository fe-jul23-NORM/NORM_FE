import { ProductTypesEnum, SortProductByEnum } from "../types/product.types";

export const isPlural = (number: number) => {
  const stringTotal = number.toString();

  if (stringTotal[stringTotal.length - 1] !== '1') {
    return true;
  }

  return false;
};

export const normalizeQuery = (query: string) => {
  return `${query[0].toUpperCase()}${query.slice(1)}`
};

export const setSortBy = (value: string) => {
  if (value === 'age') {
    return SortProductByEnum.Age;
  }
  if (value === 'name') {
    return SortProductByEnum.Name;
  }

  return SortProductByEnum.Price;
};

export const setProductsType = (product: string) => {
  if (product === ProductTypesEnum.Phones) {
    return ProductTypesEnum.Phones;
  }
  if (product === ProductTypesEnum.Accessories) {
    return ProductTypesEnum.Accessories;
  }

  return ProductTypesEnum.Tablets;
};