import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Restaurant from "../types/Restaurant";

export const useFilter = () => {
  const restaurants = useSelector(
    (state: RootState) => state.restaurantsReducer.restaurants
  );

  const {
    deliveryOption,
    priceRange,
    foodCategory,
    topEat,
    sale,
    freeDelivery,
  } = useSelector((state: RootState) => state.filtersReducer);

  const filteredRestaurants = useMemo((): Restaurant[] => {
    const filtered = restaurants
      .filter((restaurant) =>
        // Filtering based on delivery option
        restaurant.deliveryOptions.includes(deliveryOption)
      )
      .filter((restaurant) =>
        // Filtering based on price range
        priceRange !== null ? restaurant.priceRange === priceRange : restaurant
      )
      .filter((restaurant) =>
        // Filtering based on food categories
        foodCategory !== null
          ? restaurant.foodCategories.includes(foodCategory)
          : restaurant
      )
      .filter((restaurant) =>
        topEat ? restaurant.topEat === true : restaurant
      )
      .filter((restaurant) => (sale ? restaurant.sale === true : restaurant))
      .filter((restaurant) =>
        freeDelivery ? restaurant.deliveryPrice === 0 : restaurant
      );
    return filtered;
  }, [
    restaurants,
    deliveryOption,
    priceRange,
    foodCategory,
    topEat,
    sale,
    freeDelivery,
  ]);

  return { filteredRestaurants };
};
