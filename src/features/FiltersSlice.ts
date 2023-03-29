import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DeliveryOption from "../types/DeliveryOption";
import PriceRange from "../types/PriceRange";

export interface FiltersState {
  deliveryOption: DeliveryOption;
  priceRange: PriceRange | null;
  foodCategory: string | null;
  sale: boolean;
  topEat: boolean;
}

const initialState: FiltersState = {
  deliveryOption: DeliveryOption.delivery,
  priceRange: null,
  foodCategory: null,
  sale: false,
  topEat: false,
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
  },
});

export const {
  resetFilters,
  setDeliveryOptionFilter,
  setPriceRangeFilter,
  setFoodCategoryFilter,
  toggleSaleFilter,
  toggleTopEatFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
