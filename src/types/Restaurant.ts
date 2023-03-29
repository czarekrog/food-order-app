import DeliveryOptions from "./DeliveryOption";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";
import PriceRange from "./PriceRange";

type Restaurant = {
  id: string;
  name: string;
  ratings: number[];
  deliveryOptions: DeliveryOptions[];
  mainPhotoUrl: string;
  deliveryTimeRange: string;
  deliveryPrice: number;
  categoryId: string;
  menuCategories: MenuCategory[];
  menuItems: MenuItem[];
  priceRange: PriceRange;
  foodCategories: string[];
  sale: boolean;
  topEat: boolean;
};

export default Restaurant;
