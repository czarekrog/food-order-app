import { RestaurantFiltersSideBar } from "./RestaurantFiltersSideBar";
import { RestaurantListItem } from "./RestaurantListItem";
import { useState } from "react";
import { SidebarToggle } from "./SidebarToggle";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const RestaurantsList = () => {
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);

  const toggleFiltersSidebar = () => {
    setIsFiltersSidebarOpen((prev) => !prev);
  };

  const restaurants = useSelector(
    (state: RootState) => state.restaurantsReducer.restaurants
  );

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
          {restaurants.map((restaurant) => (
            <RestaurantListItem
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              ratings={restaurant.ratings}
              deliveryOptions={restaurant.deliveryOptions}
              deliveryPrice={restaurant.deliveryPrice}
              deliveryTimeRange={restaurant.deliveryTimeRange}
              mainPhotoUrl={restaurant.mainPhotoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
