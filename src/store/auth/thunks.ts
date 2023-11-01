import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../api/api";
import { AUTH_ROUTES } from "../../constants/routes";
import { getFavouritesProductsThunk } from "../products/thunks";

const MODULE_NAME = 'auth';

export const register = createAsyncThunk(
  `${MODULE_NAME}/register`,
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosPublic.post(AUTH_ROUTES.REGISTER, values);

      dispatch(initUser());

      return response.data;
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const refresh = createAsyncThunk(
  `${MODULE_NAME}/refresh`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(AUTH_ROUTES.REFRESH);
      return response.data;
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const login = createAsyncThunk(
  `${MODULE_NAME}/login`,
  async (values: any, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosPublic.post(AUTH_ROUTES.LOGIN, values);

      dispatch(initUser());

      return response.data;
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const initUser = createAsyncThunk(
  `${MODULE_NAME}/initUser`,
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(getFavouritesProductsThunk());
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);
