import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../src/features/product';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
