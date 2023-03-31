import { RestaurantFiltersSideBar } from "./RestaurantFiltersSideBar";
import { RestaurantListItem } from "./RestaurantListItem";
import { useState } from "react";
import { SidebarToggle } from "./SidebarToggle";
import { useFilter } from "../../hooks/useFilter";
import Spinner from "../UI/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const RestaurantsList = () => {
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);
  const { filteredRestaurants } = useFilter();
  const { loading } = useSelector(
    (state: RootState) => state.restaurantsReducer
  );

  const toggleFiltersSidebar = () => {
    setIsFiltersSidebarOpen((prev) => !prev);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div className="flex">
        <RestaurantFiltersSideBar isOpen={isFiltersSidebarOpen} />
        {/* we use flex-1 here, only when the sidebar is not visible. this is specifically for mobile responsive purposes. when the sidebar is not open on mobile, we want it to use the whole available space */}
        <div className={`${!isFiltersSidebarOpen && "flex-1"}`}>
          <SidebarToggle
            isOpen={isFiltersSidebarOpen}
            toggle={toggleFiltersSidebar}
          />
          <div
            className={`flex-1 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
              isFiltersSidebarOpen && "hidden"
            }`}
          >
            {filteredRestaurants.map((restaurant) => (
              <RestaurantListItem
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                ratings={restaurant.ratings}
                deliveryOptions={restaurant.deliveryOptions}
                deliveryPrice={restaurant.deliveryPrice}
                deliveryTimeRange={restaurant.deliveryTimeRange}
                mainPhotoUrl={restaurant.mainPhotoUrl}
                priceRange={restaurant.priceRange}
                foodCategories={restaurant.foodCategories}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};
