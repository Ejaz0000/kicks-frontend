import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

function loadCartFromStorage() {
  if (typeof window === 'undefined') return undefined;
  try {
    const serialized = localStorage.getItem('kicks-cart');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
}

const preloadedCart = loadCartFromStorage();

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: preloadedCart ? { cart: preloadedCart } : undefined,
});

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('kicks-cart', JSON.stringify(store.getState().cart));
    } catch {
      // Ignore write errors
    }
  }
});

export default store;
