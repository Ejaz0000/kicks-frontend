import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, size, color } = action.payload;
      const existing = state.items.find(
        (item) => item.id === id && item.size === size && item.color === color
      );
      if (existing) {
        existing.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    removeItem(state, action) {
      const { id, size, color } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      );
    },
    updateQuantity(state, action) {
      const { id, size, color, quantity } = action.payload;
      const item = state.items.find(
        (i) => i.id === id && i.size === size && i.color === color
      );
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Selectors
export const getSubtotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const getTotalQuantity = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
