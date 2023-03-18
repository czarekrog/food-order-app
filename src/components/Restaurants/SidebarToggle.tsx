import React from "react";
import { BsSliders } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const SidebarToggle = ({ isOpen, toggle }: Props) => {
  return (
    <div
      className={`w-full pt-4 sticky top-0 md:hidden flex items-center justify-end bg-white ease-in-out transition-[padding] duration-300 ${
        isOpen ? "px-4" : "px-8"
      }`}
    >
      {/* Filters button and toggle */}
      <div className={`flex items-center ${isOpen && "hidden"}`}>
        <span className="mr-2">Filters</span>
        <div
          className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={toggle}
        >
          <BsSliders />
        </div>
      </div>
      {/* Close sidebar button */}
      <div className={`flex items-center ${!isOpen && "hidden"}`}>
        <div
          className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          onClick={toggle}
        >
          <IoClose />
        </div>
      </div>
    </div>
  );
};
