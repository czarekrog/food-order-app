import DeliveryOptions from "./DeliveryOption";
import MenuCategory from "./MenuCategory";
import MenuItem from "./MenuItem";

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
};

export default Restaurant;
