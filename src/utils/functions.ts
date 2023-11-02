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

export function getScrollbarWidth(): number {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function hideScrollbar(): void {
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}

export function showScrollbar(): void {
  document.body.style.overflowY = 'auto';
  document.body.style.paddingRight = '0';
}
