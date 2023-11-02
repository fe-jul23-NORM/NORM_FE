import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate, axiosPublic } from '../../api/api';
import { PRODUCT_ROUTES } from '../../constants/routes';
import {
  CurrentProduct,
  Product,
  ProductsCount,
  ProductsQuery,
  ProductTypesEnum,
} from '../../types/product.types';
import { IGetAllProductsResponse } from '../../types/response.types';

const MODULE_NAME = 'product';

export const getProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getAll`,
  async (
    { page, perPage, productType, query, sortBy }: ProductsQuery,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosPublic.get<IGetAllProductsResponse>(
        `${PRODUCT_ROUTES.GET}?page=${page || 1}&perPage=${perPage || 4}&productType=${productType || ProductTypesEnum.Phones}&sortBy=${sortBy || ''}&query=${query || ''}
        `
      );
      return response.data;

    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getPhonesCountThunk = createAsyncThunk(
  `${MODULE_NAME}/getAll`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<IGetAllProductsResponse>(
        `${PRODUCT_ROUTES.GET}?productType=${ProductTypesEnum.Phones}`
      );
      return response.data;
      
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getCurrentProductThunk = createAsyncThunk(
  `${MODULE_NAME}/getCurrent`,
  async (id: number | string, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<CurrentProduct>(`${PRODUCT_ROUTES.GET}/${id}`);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getRecommendedProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getRecommended`,
  async (id: number | string, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<Product[]>(`${PRODUCT_ROUTES.GET}/${id}/recommended`);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getDiscountProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getDiscount`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<Product[]>(PRODUCT_ROUTES.GET_DISCOUNT);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getNewProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getNew`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<Product[]>(PRODUCT_ROUTES.GET_NEW);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getFoundProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getByName`,
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<Product[]>(`${PRODUCT_ROUTES.GET_BY_NAME}?name=${name}`);
            return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getFavouritesProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getFavourites`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get<Product[]>(PRODUCT_ROUTES.GET_FAVOURITES);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const addFavouriteThunk = createAsyncThunk(
  `${MODULE_NAME}/addFavourite`,
  async (id: number | string, { rejectWithValue }) => {
    try {
      const response = await axiosPrivate.post(`${PRODUCT_ROUTES.ADD_TO_FAVOURITES}/${id}`);
      
      return response.data.product;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const removeFavouriteThunk = createAsyncThunk(
  `${MODULE_NAME}/removeFavourite`,
  async (id: number | string, { rejectWithValue }) => {
    try {
      await axiosPrivate.delete<CurrentProduct>(`${PRODUCT_ROUTES.REMOVE_FROM_FAVORITES}/${id}`);
      
      return id;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getProductsCategoryCountThunk = createAsyncThunk(
  `${MODULE_NAME}/get-category-count`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<ProductsCount>(PRODUCT_ROUTES.GET_CATEGORY_COUNT);
      
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);
