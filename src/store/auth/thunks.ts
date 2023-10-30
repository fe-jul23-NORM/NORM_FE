import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPrivate, axiosPublic } from "../../api/api";
import { AUTH_ROUTES } from "../../constants/routes";

const MODULE_NAME = 'auth';

export const registration = createAsyncThunk(
  `${MODULE_NAME}/registration`,
  async (values, { rejectWithValue }) => {
    try {
      const responce = await axiosPublic.post(AUTH_ROUTES.REGISTER, values);
      console.log(responce);
    } catch(e: any) {
      console.log(e);
    }
  },
)