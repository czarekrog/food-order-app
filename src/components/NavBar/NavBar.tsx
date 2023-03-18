import { BsCart4, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartSidebar } from "./CartSidebar";

export const NavBar = () => {
  const [activeDeliveryOption, setActiveDeliveryOption] = useState<
    "Delivery" | "Pickup"
  >("Delivery");
  const [isOpen, setIsOpen] = useState(false);

  const toggleCartSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="">
      <div className="w-full p-4 flex justify-between items-center gap-8 border-b-2 flex-wrap">
        <Link to="/" className="text-3xl md:order-1">
          Foodify
        </Link>
        <div className="h-12 hidden md:flex items-center gap-1 bg-gray-200 px-2 rounded-full md:order-1">
          <button
            className={`rounded-full px-5 py-2 font-medium transition-colors duration-500 ${
              activeDeliveryOption === "Delivery" && "bg-white font-bold"
            }`}
            onClick={() => setActiveDeliveryOption("Delivery")}
          >
            Delivery
          </button>
          <button
            className={`rounded-full px-5 py-2 font-medium transition-colors duration-500 ${
              activeDeliveryOption === "Pickup" && "bg-white font-bold"
            }`}
            onClick={() => setActiveDeliveryOption("Pickup")}
          >
            Pick Up
          </button>
        </div>
        <div className="h-12 flex-1 rounded-full px-4 flex items-center gap-2 bg-gray-200 order-3 md:order-2">
          <BsSearch className="text-gray-500 text-xl" />
          <input
            className="flex-1 outline-none bg-inherit text-xl"
            placeholder="Search your favorite restaurant..."
          />
        </div>
        <div className="flex gap-2 md:gap-6 order-2 md:order-3">
          <button
            className="flex px-6 py-1 bg-black hover:bg-gray-800 text-white rounded-full gap-2 items-center"
            onClick={toggleCartSidebar}
          >
            <BsCart4 />
            Cart · 0
          </button>
          <Link
            to=""
            className="px-8 py-1 bg-gray-200 hover:bg-gray-300 rounded-full hidden md:block"
          >
            Sign In
          </Link>
          <Link
            to=""
            className="px-8 py-1 bg-gray-200 hover:bg-gray-300 rounded-full hidden md:block"
          >
            Sign Up
          </Link>
          <Link
            to=""
            className="rounded-full md:hidden bg-gray-200 hover:bg-gray-300 w-8 aspect-square flex justify-center items-center"
          >
            <BiUser />
          </Link>
        </div>
      </div>
      <CartSidebar isOpen={isOpen} toggle={toggleCartSidebar} />
    </div>
  );
};