import { createSlice } from '@reduxjs/toolkit';

export type ProductTypes = {
  image: string;
  title: string;
  price: number;
  id: number;
};

const productSlice = createSlice({
  name: 'products',
  initialState: <null | ProductTypes[]>null,
  reducers: {
    addProduct: (state, action) => {
      state?.push(action.payload);
    },
    setProducts: (state, action) => {
      return action.payload !== null ? [...action.payload] : [];
    },
  },
});

export const { addProduct, setProducts } = productSlice.actions;

export default productSlice.reducer;
