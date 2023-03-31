import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Restaurant from "../types/Restaurant";
import { RootState } from "../app/store";
import PriceRange from "../types/PriceRange";
import axios from "axios";

export interface RestaurantsState {
  restaurants: Restaurant[];
  loading: boolean;
  error: {} | null;
}

const initialState: RestaurantsState = {
  restaurants: [],
  loading: true,
  error: null,
};

type AddRatingActionPayload = {
  restaurantId: string;
  rating: number;
};

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3004/restaurants");
      const restaurants = response.data as Restaurant[];
      return restaurants.map((restaurant) => {
        return {
          ...restaurant,
          priceRange:
            (restaurant.priceRange === 0 && PriceRange.low) ||
            (restaurant.priceRange === 1 && PriceRange.medium) ||
            (restaurant.priceRange === 2 && PriceRange.high) ||
            0,
        };
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addRating: (state, action: PayloadAction<AddRatingActionPayload>) => {
      const restaurant = state.restaurants.find(
        (i) => i.id === action.payload.restaurantId
      );
      if (restaurant) {
        restaurant.ratings.push(action.payload.rating);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.restaurants = action.payload!;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchRestaurants.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload!;
    });
  },
});

export const { addRating } = restaurantsSlice.actions;

export const selectRestaurantById = (state: RootState, restaurantId: string) =>
  state.restaurantsReducer.restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

export const selectMenuItemById = (
  state: RootState,
  restaurantId: string,
  menuItemId: string
) => {
  const restaurant = state.restaurantsReducer.restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );
  const menuItem = restaurant?.menuItems.find((item) => item.id === menuItemId);
  return menuItem;
};

export default restaurantsSlice.reducer;
