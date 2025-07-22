
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from "../../api/postsApi";


export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(fetchApi);
      if (!response.ok) {
        throw new Error('відсутній зв\'язок із сервером');
      }
      return await response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const postsListSlice = createSlice({
  name: 'posts',
  initialState: {
    postsList: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.postsList = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Помилка завантаження постів';
      });
  },
});


export default postsListSlice.reducer;
