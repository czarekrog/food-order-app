import { BsCart4, BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartSidebar } from "./CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectCartItemsCount } from "../../features/CartSlice";
import { setDeliveryOptionFilter } from "../../features/FiltersSlice";
import DeliveryOption from "../../types/DeliveryOption";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const cartItemsCount = useSelector((state: RootState) =>
    selectCartItemsCount(state)
  );

  const { deliveryOption } = useSelector(
    (state: RootState) => state.filtersReducer
  );

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
              deliveryOption === DeliveryOption.delivery && "bg-white font-bold"
            }`}
            onClick={() => {
              dispatch(setDeliveryOptionFilter(DeliveryOption.delivery));
            }}
          >
            Delivery
          </button>
          <button
            className={`rounded-full px-5 py-2 font-medium transition-colors duration-500 ${
              deliveryOption === DeliveryOption.pickup && "bg-white font-bold"
            }`}
            onClick={() => {
              dispatch(setDeliveryOptionFilter(DeliveryOption.pickup));
            }}
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
            Cart · {cartItemsCount}
          </button>
          <Link
            to="auth/sign-in"
            className="px-8 py-1 bg-gray-200 hover:bg-gray-300 rounded-full hidden md:block"
          >
            Sign In
          </Link>
          <Link
            to="auth/sign-up"
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
