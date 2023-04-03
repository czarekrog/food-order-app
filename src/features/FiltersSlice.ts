import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeliveryOption from "../types/DeliveryOption";
import PriceRange from "../types/PriceRange";

export interface FiltersState {
  deliveryOption: DeliveryOption;
  priceRange: PriceRange | null;
  foodCategory: string | null;
  sale: boolean;
  topEat: boolean;
  freeDelivery: boolean;
  searchTerm: string;
}

const initialState: FiltersState = {
  deliveryOption: DeliveryOption.delivery,
  priceRange: null,
  foodCategory: null,
  sale: false,
  topEat: false,
  freeDelivery: false,
  searchTerm: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    resetFilters: (state) => {
      state.deliveryOption = initialState.deliveryOption;
      state.priceRange = initialState.priceRange;
      state.foodCategory = initialState.foodCategory;
      state.sale = initialState.sale;
      state.topEat = initialState.topEat;
      state.freeDelivery = initialState.freeDelivery;
      state.searchTerm = initialState.searchTerm;
    },
    setDeliveryOptionFilter: (state, action: PayloadAction<DeliveryOption>) => {
      state.deliveryOption = action.payload;
    },
    setPriceRangeFilter: (state, action: PayloadAction<PriceRange | null>) => {
      state.priceRange = action.payload;
    },
    setFoodCategoryFilter: (state, action: PayloadAction<string | null>) => {
      state.foodCategory = action.payload;
    },
    toggleSaleFilter: (state) => {
      state.sale = !state.sale;
    },
    toggleTopEatFilter: (state) => {
      state.topEat = !state.topEat;
    },
    toggleFreeDeliveryFilter: (state) => {
      state.freeDelivery = !state.freeDelivery;
    },
    searchRestaurants: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  resetFilters,
  setDeliveryOptionFilter,
  setPriceRangeFilter,
  setFoodCategoryFilter,
  toggleSaleFilter,
  toggleTopEatFilter,
  toggleFreeDeliveryFilter,
  searchRestaurants,
} = filtersSlice.actions;

export default filtersSlice.reducer;
