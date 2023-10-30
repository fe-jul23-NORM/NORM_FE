import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { refresh, register } from "./thunks";

const initialState: AuthState = { 
  isLoading: true,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      });
  },
});