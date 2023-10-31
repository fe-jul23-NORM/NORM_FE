import { createAsyncThunk } from "@reduxjs/toolkit";
import { refresh } from "../auth/thunks";
import { CartProduct } from "../../types/product.types";
import { setStateCart } from "../cart/slice";
import { RootState } from "..";
import { getFavouritesProductsThunk } from "../products/thunks";
import { setStateFavourites } from "../products/slice";

const MODULE_NAME = 'core';

export const initThunk = createAsyncThunk(
  `${MODULE_NAME}/appFirstLoad`,
  async (_, { rejectWithValue, dispatch, getState}) => {
    try {
      await dispatch(refresh());

      const cart: CartProduct[] = JSON.parse(localStorage.getItem('cart') || '[]');
      dispatch(setStateCart(cart));

      const user = (getState() as RootState).auth.user;
      console.log(user);

      if (user) {
        dispatch(getFavouritesProductsThunk());
      } else {
        dispatch(setStateFavourites(JSON.parse(localStorage.getItem('favourites') || '[]')));
      }

      } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);