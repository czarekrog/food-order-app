type MenuItem = {
  id: string;
  name: string;
  price: number;
  isPopular: boolean;
  discountedPrice: number | null;
  categoryId: string;
  photoUrl: string;
};

export default MenuItem;
