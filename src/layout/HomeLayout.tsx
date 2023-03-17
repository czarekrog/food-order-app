import { HeaderCategories } from "../components/HeaderCategories/HeaderCategories";
import { HeaderFeatures } from "../components/HeaderFeatures/HeaderFeatures";
import { RestaurantsList } from "../components/Restaurants/RestaurantsList";

export const HomeLayout = () => {
  return (
    <>
      <HeaderCategories />
      <HeaderFeatures />
      <RestaurantsList />
    </>
  );
};
