import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { CategoriesSidebar } from "./CategoriesSidebar";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuItemPopup } from "./MenuItemPopup";

export const Restaurant = () => {
  const [isCategoriesSidebarOpen, setIsCategoriesSidebarOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);
  const { id } = useParams();

  const toggleCategoriesSidebar = () => {
    setIsCategoriesSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <MenuItemPopup
        itemId={selectedMenuItem}
        selectMenuItem={setSelectedMenuItem}
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg"
        alt="Restaurant header"
        className="w-screen h-48 md:h-80 object-cover"
      />
      <div className="flex flex-col p-8">
        <span className="text-3xl font-bold">Restaurant name {id}</span>
        <div className="font-medium flex items-center my-1">
          <BsStarFill />
          <span className="ml-2">{`4.6 (100+ ratings)`}</span>
        </div>
        <span className="text-gray-500">Delivery in: 15 · 25 mins</span>
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
            <MenuItem selectMenuItem={setSelectedMenuItem} isPopular={true} />
            <MenuItem selectMenuItem={setSelectedMenuItem} />
            <MenuItem selectMenuItem={setSelectedMenuItem} />
            <MenuItem selectMenuItem={setSelectedMenuItem} />
            <MenuItem selectMenuItem={setSelectedMenuItem} />
          </div>
        </div>
      </div>
    </div>
  );
};
