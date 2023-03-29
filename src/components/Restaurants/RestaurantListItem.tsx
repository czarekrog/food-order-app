import { useNavigate } from "react-router-dom";
import Restaurant from "../../types/Restaurant";
import calculateAverage from "../../utils/calculateAverage";
import { MdOutlineDeliveryDining } from "react-icons/md";

type Props = Omit<
  Restaurant,
  "categoryId" | "menuCategories" | "menuItems" | "sale" | "topEat"
>;

export const RestaurantListItem = ({
  id,
  name,
  ratings,
  deliveryTimeRange,
  deliveryPrice,
  mainPhotoUrl,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col rounded-b-lg cursor-pointer hover:bg-gray-100"
      onClick={() => navigate(`restaurant/${id}`)}
    >
      <img
        src={mainPhotoUrl}
        alt="Restaurant"
        className="max-h-48 object-cover rounded-sm"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <span className="text-2xl">{name}</span>
          <div className="bg-gray-200 flex justify-center items-center p-2 rounded-full font-bold">
            {calculateAverage(ratings)}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineDeliveryDining className="text-xl" />
          {deliveryPrice === 0 ? "Free" : `$${deliveryPrice}`} ·
          {deliveryTimeRange}
        </div>
      </div>
    </div>
  );
};
