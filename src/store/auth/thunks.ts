import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../api/api";
import { AUTH_ROUTES } from "../../constants/routes";

const MODULE_NAME = 'auth';

export const registration = createAsyncThunk(
  `${MODULE_NAME}/registration`,
  async (values: any, { rejectWithValue }) => {
    try {
      const responce = await axiosPublic.post(AUTH_ROUTES.REGISTER, values);
      return responce.data;
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);

export const refresh = createAsyncThunk(
  `${MODULE_NAME}/refresh`,
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axiosPublic.get(AUTH_ROUTES.REFRESH);
      return responce.data;
    } catch(e: any) {
      return rejectWithValue(e?.response?.data?.message);
    }
  },
);