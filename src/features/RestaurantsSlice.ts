import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Restaurant from "../types/Restaurant";
import DeliveryOption from "../types/DeliveryOption";
import { RootState } from "../app/store";
import PriceRange from "../types/PriceRange";

export interface RestaurantsState {
  restaurants: Restaurant[];
}

const initialState: RestaurantsState = {
  restaurants: [
    {
      id: "sauhgas89fh89asd98uas98du9sa8ud98asu",
      name: "M.C. Chicken",
      ratings: [4, 5, 5, 3, 5, 5],
      deliveryOptions: [DeliveryOption.pickup],
      mainPhotoUrl:
        "https://cdn.pixabay.com/photo/2016/07/31/17/51/chicken-1559548_960_720.jpg",
      deliveryTimeRange: "25-35mins",
      deliveryPrice: 2.99,
      categoryId: "",
      menuCategories: [],
      menuItems: [
        {
          id: "daishd87ah9dashj9dja",
          name: "Pizza",
          isPopular: true,
          price: 9.99,
          categoryId: "",
          discountedPrice: 7.99,
        },
        {
          id: "dasdas87das8d87ash78",
          name: "Another pizza",
          isPopular: false,
          price: 7.99,
          categoryId: "",
          discountedPrice: null,
        },
      ],
      priceRange: PriceRange.low,
      foodCategories: ["wara8yg83grab3arar"],
      sale: false,
      topEat: false,
    },
    {
      id: "dashd87ashgcsahcsah98chasudsas",
      name: "Pizzastico",
      ratings: [4, 5, 5, 3, 4, 4],
      deliveryOptions: [DeliveryOption.pickup],
      mainPhotoUrl:
        "https://cdn.pixabay.com/photo/2018/04/11/03/13/food-3309418_960_720.jpg",
      deliveryTimeRange: "15-25mins",
      deliveryPrice: 1.99,
      categoryId: "",
      menuCategories: [],
      menuItems: [
        {
          id: "4gd4egegegbverghdgdf",
          name: "Pizza 123",
          isPopular: true,
          price: 9.99,
          categoryId: "",
          discountedPrice: 7.99,
        },
        {
          id: "g4gergh543gbeghe",
          name: "Pizza pizza",
          isPopular: false,
          price: 7.99,
          categoryId: "",
          discountedPrice: null,
        },
      ],
      priceRange: PriceRange.low,
      foodCategories: ["sdiashd9ahd9ajd8ass", "sdadaghs8fsah7fhs3q"],
      sale: false,
      topEat: false,
    },
    {
      id: "fcsa8fhsa9hf9sjf8s98j9sddfsdf",
      name: "Pasta & Pasta",
      ratings: [4, 5, 5, 5, 5, 5, 4],
      deliveryOptions: [DeliveryOption.delivery],
      mainPhotoUrl:
        "https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_960_720.jpg",
      deliveryTimeRange: "15-25mins",
      deliveryPrice: 4.99,
      categoryId: "",
      menuCategories: [],
      menuItems: [],
      priceRange: PriceRange.medium,
      foodCategories: ["sdadaghs8fsah7fhs3q"],
      sale: false,
      topEat: false,
    },
    {
      id: "fsdu8fhs897h9hfs9dhf98sh9jsdsfsd",
      name: "Schrimp",
      ratings: [4, 5, 5, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5],
      deliveryOptions: [DeliveryOption.delivery, DeliveryOption.pickup],
      mainPhotoUrl:
        "https://cdn.pixabay.com/photo/2017/01/19/05/14/korean-cuisine-1991580_960_720.jpg",
      deliveryTimeRange: "15-25mins",
      deliveryPrice: 0,
      categoryId: "",
      menuCategories: [],
      menuItems: [],
      priceRange: PriceRange.high,
      foodCategories: ["asda78h78shf7sahfa"],
      sale: false,
      topEat: true,
    },
  ],
};

type AddRatingActionPayload = {
  restaurantId: string;
  rating: number;
};

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
