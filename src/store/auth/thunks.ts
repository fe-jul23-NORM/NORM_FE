import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../api/api";
import { AUTH_ROUTES } from "../../constants/routes";

const MODULE_NAME = 'auth';

export const register = createAsyncThunk(
    `${MODULE_NAME}/registration`,
    async (values, { rejectWithValue }) => {
        try {
            const response = await axiosPublic.post(AUTH_ROUTES.REGISTER, values);
            console.log(response);
            
        } catch (e: any) {
            console.log(e);
        }
    }
);
