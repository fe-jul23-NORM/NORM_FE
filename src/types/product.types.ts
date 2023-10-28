export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface CurrentProduct {
  id: string,
  namespaceId: string,
  name: string,
  capacityAvailable: string[],
  capacity: string,
  priceRegular: number,
  priceDiscount: number,
  colorsAvailable: string[],
  color: string,
  images: string[],
  description: ProductDescription[],
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[],
}

export interface ProductDescription {
  title: string,
  text: string,
}

export enum SortProductByEnum {
  Age = 'age',
  Name = 'name',
  Price = 'price',
}

export enum ProductTypesEnum {
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories'
}

export interface ProductsQuery {
  page: number,
  perPage: number,
  productType: ProductTypesEnum,
  query?: string,
  sortBy?: SortProductByEnum
}
