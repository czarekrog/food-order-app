import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { selectMenuItemById } from "../../features/RestaurantsSlice";
import { addToCart } from "../../features/CartSlice";

type Props = {
  itemId: string | null;
  restaurantId: string | null;
  selectMenuItem: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MenuItemPopup = ({
  itemId,
  restaurantId,
  selectMenuItem,
}: Props) => {
  const [addToCartAmount, setAddToCartAmount] = useState(1);
  const closePopup = () => selectMenuItem(null);
  const dispatch = useDispatch();

  const menuItem = useSelector((state: RootState) =>
    selectMenuItemById(state, restaurantId!, itemId!)
  );

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/30 justify-center items-center overscroll-contain ${
        menuItem ? "flex" : "hidden"
      }`}
      onClick={closePopup}
    >
      <div
        className="w-[450px] mx-8 my-4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full min-h-[180px] md:min-h-[250px] shadow-md">
          <img
            src={menuItem?.photoUrl}
            alt="Menu item"
            className="absolute h-full w-full object-cover"
          />
          <div
            className="w-12 h-12 bg-gray-200 rounded-full cursor-pointer flex justify-center items-center absolute z-10 top-4 right-4"
            onClick={closePopup}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col p-4">
          <span className="text-xl">{menuItem?.name}</span>
          <div className="flex w-full justify-center items-center my-4">
            <button
              className="w-10 h-10 flex justify-center items-center bg-black text-white text-lg rounded-full"
              onClick={() =>
                addToCartAmount > 1 && setAddToCartAmount((prev) => prev - 1)
              }
            >
              <FaMinus />
            </button>
            <span className="w-12 text-center text-2xl mx-2">
              {addToCartAmount}
            </span>
            <button
              className="w-10 h-10 flex justify-center items-center bg-black text-white text-lg rounded-full"
              onClick={() => setAddToCartAmount((prev) => prev + 1)}
            >
              <FaPlus />
            </button>
            <button
              className="bg-black px-4 py-2 text-white ml-4 rounded-full hover:bg-gray-800"
              onClick={() => {
                dispatch(
                  addToCart({
                    ...menuItem!,
                    qty: addToCartAmount,
                    restaurantId: restaurantId!,
                  })
                );
                closePopup();
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
