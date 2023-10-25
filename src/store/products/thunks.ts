import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPublic } from '../../api/api';
import { PRODUCT_ROUTES } from '../../constants/routes';
import {
  ICurrentProduct,
  IProduct,
  IProductsQuery,
  ProductTypesEnum,
} from '../../types/product.types';
import { IGetAllProductsResponse } from '../../types/response.types';

const MODULE_NAME = 'product';

export const getProductsThunk = createAsyncThunk(
  `${MODULE_NAME}/getAll`,
  async (
    {page, perPage, productType, query, sortBy}: IProductsQuery,
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

export const getCurrentProductThunk = createAsyncThunk(
  `${MODULE_NAME}/getCurrent`,
  async (id: number | string, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get<ICurrentProduct>(`${PRODUCT_ROUTES.GET}/${id}`);
      
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
      const response = await axiosPublic.get<IProduct[]>(`${PRODUCT_ROUTES.GET}/${id}/recommended`);
      
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
      const response = await axiosPublic.get<IProduct[]>(PRODUCT_ROUTES.GET_DISCOUNT);
      
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
      const response = await axiosPublic.get<IProduct[]>(PRODUCT_ROUTES.GET_NEW);
      
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);
