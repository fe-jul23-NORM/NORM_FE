import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate, axiosPublic } from '../../api/api';
import { RootState } from "..";
import { ORDER_ROUTES } from "../../constants/routes";
import { Order } from '../../types/product.types';

const MODULE_NAME = 'cart';

export const createOrderByGuest = createAsyncThunk(
  `${MODULE_NAME}/createByGuest`,
  async (email: string, { rejectWithValue, getState }) => {
    const cart = (getState() as RootState).cart.cart;
    const cartDTO = cart.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      }
    })

    try {
      const response = await axiosPublic.post(ORDER_ROUTES.CREATE_BY_GUEST, {products: cartDTO, email});
      
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const getOrders = createAsyncThunk(
  `${MODULE_NAME}/getOrders`,
  async (_,{ rejectWithValue }) => {
    try {
      const response = await axiosPrivate.get<Order[]>(ORDER_ROUTES.GET);
      
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);
