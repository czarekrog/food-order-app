import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";
import Category from "../types/Category";

export interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: object | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: true,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3004/categories");
      return response.data as Category[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload!;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    });
  },
});

export const selectCategoryById = (state: RootState, categoryId: string) => {
  return state.categoriesReducer.categories.find(
    (category) => category.id === categoryId
  );
};

export default categoriesSlice.reducer;
