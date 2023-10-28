import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../api/api";
import { RootState } from "..";
import { ORDER_ROUTES } from "../../constants/routes";

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
