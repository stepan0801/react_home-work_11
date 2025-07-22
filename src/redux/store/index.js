import { configureStore } from '@reduxjs/toolkit'
import productsListReducer from '../slices/productsList'
import postsListReducer from "../slices/postsList";

export const store = configureStore({
  reducer: {
    productsList: productsListReducer,
	 postsList: postsListReducer,
  },
})