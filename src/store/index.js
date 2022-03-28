import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from '../features/ShoppingCartSlice';

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  },
});