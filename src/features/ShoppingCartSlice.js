import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = [ ...state.value, action.payload]
    }
  },
});

export const { add } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;