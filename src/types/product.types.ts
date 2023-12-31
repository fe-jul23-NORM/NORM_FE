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

export interface CartProduct extends Product{
  quantity: number;
}

export interface CurrentProduct {
  id: string,
  productPassport: Product;
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

export interface Order {
  id: number,
  createdAt: Date,
  status: OrderStatusEnum,
  user_email: string,
  products: OrderProduct[],
}

export interface OrderProduct {
  id: number,
  quantity: number,
  product: Product,
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

export interface ProductsCount {
  phones: number,
  tablets: number,
  accessories: number,
}

export enum OrderStatusEnum {
  Created = 'created',
  Processing = 'processing',
  Shipped = 'shipped',
  Refunded = 'refunded',
  Canceled = 'canceled',
}
