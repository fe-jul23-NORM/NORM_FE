import { createSlice } from '@reduxjs/toolkit';
import { ICartState } from './types';

const initialState: ICartState = {
  isLoading: true,
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);

      if (!itemInCart) {
        state.cart = [...state.cart, {...payload, quantity: 1}]
      }
    },

    removeFromCart: (state, { payload }) => {
      const removeFromCart = state.cart.filter((item) => item.id !== payload.id);
      state.cart = removeFromCart;
    },

    incrementQuantity: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      }
    },

    decrementQuantity: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        itemInCart.quantity--;
      }
    }
  }
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
