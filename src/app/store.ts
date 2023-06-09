import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import restaurantsReducer from "../features/RestaurantsSlice";
import categoriesReducer from "../features/CategoriesSlice";
import cartReducer from "../features/CartSlice";
import filtersReducer from "../features/FiltersSlice";
import uiReducer from "../features/UISlice";

export const store = configureStore({
  reducer: {
    restaurantsReducer,
    categoriesReducer,
    cartReducer,
    filtersReducer,
    uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
