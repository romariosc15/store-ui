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
    }
  },
});

export const { addProduct } = shoppingCartSlice.actions;

export const selectShoppingCart = (state) => state.shoppingCart.value;

export default shoppingCartSlice.reducer;