import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { login, refresh, register } from './thunks';

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
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      });
  },
});
