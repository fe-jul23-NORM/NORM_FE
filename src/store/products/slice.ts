import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from './types';
import {
  addFavouriteThunk,
  getCurrentProductThunk,
  getDiscountProductsThunk, getFavouritesProductsThunk, getNewProductsThunk,
  getProductsThunk,
  getRecommendedProductsThunk,
  removeFavouriteThunk
} from './thunks';

const initialState: ProductState = {
  isLoading: true,
  totalCount: 0,
  all: [],
  new: [],
  currentProduct: null,
  discount: [],
  recommended: [],
  favourites: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setStateFavourites: (state, {payload}) => {
      state.favourites = payload;
    },
    addToFavourites: (state, {payload}) => {
      const item = state.favourites.find(({ id }) => id === payload.id);

      if(!item) {
        state.favourites = [...state.favourites, payload];
      }
    },
    removeFromFavourites: (state, { payload }) => {
      const removeFromFavourites = state.favourites.filter((item) => item.id !== payload.id);
      state.favourites = removeFromFavourites;
    },
  },
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
      })
      .addCase(getFavouritesProductsThunk.fulfilled, (state, {payload}) => {
        state.favourites = payload;
      })
      .addCase(addFavouriteThunk.fulfilled, (state, {payload}) => {
        state.favourites = [...state.favourites, payload];
      })
      .addCase(removeFavouriteThunk.fulfilled, (state, {payload}) => {
        state.favourites = state.favourites.filter(({ id }) => id !== payload);
      });
  }
})

export const { setStateFavourites, addToFavourites, removeFromFavourites } = productSlice.actions;
