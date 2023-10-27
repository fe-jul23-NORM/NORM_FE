import { createSlice } from '@reduxjs/toolkit';
import { IProductState } from './types';
import {
  getCurrentProductThunk,
  getDiscountProductsThunk, getNewProductsThunk,
  getProductsThunk,
  getRecommendedProductsThunk
} from './thunks';

const initialState: IProductState = {
  isLoading: true,
  totalCount: 0,
  all: [],
  new: [],
  currentProduct: null,
  discount: [],
  recommended: [],
  favorites: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToFavorites: (state, {payload}) =>{
      state.favorites =  [...state.favorites, payload]
    }},

  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductsThunk.fulfilled, (state, {payload}) => {
        state.all = payload.result;
        state.totalCount = payload.total;
        state.isLoading = false;
      })
      .addCase(getCurrentProductThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentProductThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCurrentProductThunk.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.currentProduct = payload;
      })
      .addCase(getRecommendedProductsThunk.fulfilled, (state, {payload}) => {
        state.recommended = payload;
      })
      .addCase(getDiscountProductsThunk.fulfilled, (state, {payload}) => {
        state.discount = payload;
      })
      .addCase(getNewProductsThunk.fulfilled, (state, {payload}) => {
        state.new = payload;
      });
  }
})

export const { addToFavorites } = productSlice.actions;
