import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../api/api";
import { AUTH_ROUTES } from "../../constants/routes";

const MODULE_NAME = 'auth';

export const register = createAsyncThunk(
  `${MODULE_NAME}/registaration`,
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.post(AUTH_ROUTES.REGISTER, values);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message)
    }
  }
);

export const refresh = createAsyncThunk(
  `${MODULE_NAME}/refresh`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosPublic.get(AUTH_ROUTES.REFRESH);

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message)
    }
  }
);
