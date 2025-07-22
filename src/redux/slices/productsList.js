import { createSlice } from '@reduxjs/toolkit'
import { productsNames } from '../../products/productsNames'

const initialState = {
  initList: [...productsNames],
  filteredList: [...productsNames],
}

export const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    filteredList: (state, action) => {
      state.filteredList = state.initList.filter(product =>
        product.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addNewProduct: (state, action) => {
      state.initList.push(action.payload);
      state.filteredList.push(action.payload);
    },
  },
})

export const { filteredList, addNewProduct } = productsListSlice.actions

export default productsListSlice.reducer
