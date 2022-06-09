import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value = [ ...state.value, action.payload]
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter((v, i) => action.payload != i);
    }
  },
});

export const { addProduct, deleteProduct } = shoppingCartSlice.actions;

export const selectShoppingCart = (state) => state.shoppingCart.value;

export default shoppingCartSlice.reducer;