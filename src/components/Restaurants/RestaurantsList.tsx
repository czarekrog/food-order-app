import { RestaurantFiltersSideBar } from "./RestaurantFiltersSideBar";
import { RestaurantListItem } from "./RestaurantListItem";
import { useState } from "react";
import { SidebarToggle } from "./SidebarToggle";

export const RestaurantsList = () => {
  const [isFiltersSidebarOpen, setIsFiltersSidebarOpen] = useState(false);

  const toggleFiltersSidebar = () => {
    setIsFiltersSidebarOpen((prev) => !prev);
  };

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
          <RestaurantListItem id="1" />
          <RestaurantListItem id="2" />
          <RestaurantListItem id="3" />
          <RestaurantListItem id="4" />
          <RestaurantListItem id="5" />
          <RestaurantListItem id="6" />
          <RestaurantListItem id="7" />
          <RestaurantListItem id="8" />
        </div>
      </div>
    </div>
  );
};
