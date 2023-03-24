import { useNavigate, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { CategoriesSidebar } from "./CategoriesSidebar";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuItemPopup } from "./MenuItemPopup";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../features/RestaurantsSlice";
import { RootState } from "../../app/store";
import calculateAverage from "../../utils/calculateAverage";

export const Restaurant = () => {
  const [isCategoriesSidebarOpen, setIsCategoriesSidebarOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const toggleCategoriesSidebar = () => {
    setIsCategoriesSidebarOpen((prev) => !prev);
  };

  const restaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, id!)
  );

  useEffect(() => {
    if (!restaurant) {
      navigate("/");
    }
  }, [navigate, restaurant]);

  return (
    <div>
      <MenuItemPopup
        itemId={selectedMenuItem}
        restaurantId={restaurant!.id}
        selectMenuItem={setSelectedMenuItem}
      />
      <img
        src={restaurant?.mainPhotoUrl}
        alt="Restaurant header"
        className="w-screen h-48 md:h-80 object-cover"
      />
      <div className="flex flex-col p-8">
        <span className="text-3xl font-bold">{restaurant?.name}</span>
        <div className="font-medium flex items-center my-1">
          <BsStarFill />
          <span className="ml-2">{`${calculateAverage(restaurant?.ratings!)} (${
            restaurant?.ratings.length! > 100
              ? "100+"
              : restaurant?.ratings.length
          } ratings)`}</span>
        </div>
        <span className="text-gray-500">
          Delivery in: {restaurant?.deliveryTimeRange}
        </span>
      </div>
      <div className="flex">
        <CategoriesSidebar
          isOpen={isCategoriesSidebarOpen}
          toggle={toggleCategoriesSidebar}
        />
        <div className={`${!isCategoriesSidebarOpen && "flex-1"}`}>
          <div
            className={`w-full pt-4 sticky top-0 md:hidden flex items-center justify-end bg-white ease-in-out transition-[padding] duration-300 ${
              isCategoriesSidebarOpen ? "px-4" : "px-8"
            }`}
          >
            {!isCategoriesSidebarOpen && (
              <span className="mr-2 text-lg">Categories:</span>
            )}
            <div
              onClick={toggleCategoriesSidebar}
              className="flex justify-center items-center bg-gray-200 p-3 rounded-full text-2xl"
            >
              {isCategoriesSidebarOpen ? <IoClose /> : <BiCategoryAlt />}
            </div>
          </div>
          <div
            className={`flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isCategoriesSidebarOpen && "hidden"
            }`}
          >
            {restaurant?.menuItems.map((menuItem) => (
              <MenuItem
                key={menuItem.id}
                selectMenuItem={setSelectedMenuItem}
                id={menuItem.id}
                name={menuItem.name}
                price={menuItem.price}
                discountedPrice={menuItem.discountedPrice}
                isPopular={menuItem.isPopular}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
