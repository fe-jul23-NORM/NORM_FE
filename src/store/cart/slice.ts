import { createSlice } from '@reduxjs/toolkit';
import { ICartState } from './types';
import { createOrderByGuest, createOrderByUser, getOrders } from './thunks';

const initialState: ICartState = {
  isLoading: false,
  cart: [],
  orders: [],
  totalQuantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getTotalQuantity: (state) => {
      const numberOfProducts = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      
      state.totalQuantity = numberOfProducts;
    },
    
    setStateCart: (state, {payload}) => {
      state.cart = payload;
    },
    
    addToCart: (state, {payload}) => {
      state.cart.push({...payload, quantity: 1})
      state.totalQuantity++;
    },
    
    removeFromCart: (state, {payload}) => {
      const removeFromCart = state.cart.filter((item) => item.id !== payload.id);
      state.cart = removeFromCart;
      state.totalQuantity -= payload.quantity;
    },
    
    incrementQuantity: (state, {payload}) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
      state.totalQuantity++;
    },
    
    decrementQuantity: (state, {payload}) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
      }
      state.totalQuantity--;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, {payload}) => {
        state.orders = payload;
      })
      .addCase(createOrderByUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.cart = []
        state.orders = [...state.orders, payload];
        state.totalQuantity = 0;
      })
      .addCase(createOrderByGuest.fulfilled, (state) => {
        state.isLoading = false;
        state.cart = [];
        state.totalQuantity = 0;
      })
      .addCase(createOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderByUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createOrderByGuest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrderByGuest.rejected, (state) => {
        state.isLoading = false;
      })
  }
});

export const {
  getTotalQuantity,
  setStateCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;
