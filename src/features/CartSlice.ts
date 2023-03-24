import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../app/store";
import MenuItem from "../types/MenuItem";

interface CartItem extends MenuItem {
  qty: number;
  restaurantId: string;
}

export interface CartState {
  items: CartItem[];
}

interface RestaurantCartItem {
  id: string;
  qty: number;
}

interface RestaurantCart {
  restaurantId: string;
  items: RestaurantCartItem[];
}

interface UpdateCountPayload {
  itemId: string;
  qty: number;
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
    },
    updateCount(state, action: PayloadAction<UpdateCountPayload>) {
      const item = state.items.find((i) => i.id === action.payload.itemId);
      if (item) {
        item.qty += action.payload.qty;
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, updateCount, deleteItem } = cartSlice.actions;

export const selectCartTotal = (state: RootState) => {
  return state.cartReducer.items.reduce(
    (acc, curr) =>
      acc +
      (curr.discountedPrice
        ? curr.discountedPrice * curr.qty
        : curr.price * curr.qty),
    0
  );
};

export const selectCartItemsCount = (state: RootState) => {
  return state.cartReducer.items.reduce((acc, curr) => acc + curr.qty, 0);
};

export const selectCartByRestaurants = (state: RootState): RestaurantCart[] => {
  const items = state.cartReducer.items;
  const result: { [key: string]: RestaurantCart } = {};

  // group cart items by restaurantId
  items.forEach((item) => {
    const { restaurantId, id, qty } = item;

    if (!result[restaurantId]) {
      result[restaurantId] = { restaurantId, items: [] };
    }

    result[restaurantId].items.push({ id, qty });
  });

  // convert result object to array
  return Object.values(result);
};

export default cartSlice.reducer;
