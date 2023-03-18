import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

type Props = {
  itemId: string | null;
  selectMenuItem: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MenuItemPopup = ({ itemId, selectMenuItem }: Props) => {
  const [addToCartAmount, setAddToCartAmount] = useState(1);
  const closePopup = () => selectMenuItem(null);
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/30 justify-center items-center overscroll-contain ${
        itemId ? "flex" : "hidden"
      }`}
      onClick={closePopup}
    >
      <div
        className="w-[450px] mx-8 my-4 h-3/4 bg-white rounded-2xl flex flex-col overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end w-full p-4 min-h-[180px] md:min-h-[250px] shadow-md bg-cover bg-[url('https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg')]">
          <div
            className="w-12 h-12 bg-gray-200 rounded-full cursor-pointer flex justify-center items-center"
            onClick={closePopup}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col p-4 overflow-y-scroll">
          <span className="text-xl">Menu position name</span>
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
            <button className="bg-black px-4 py-2 text-white ml-4 rounded-full hover:bg-gray-800">
              Add to order
            </button>
          </div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
        </div>
      </div>
    </div>
  );
};
