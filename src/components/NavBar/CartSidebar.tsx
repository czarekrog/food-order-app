import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const CartSidebar = ({ isOpen, toggle }: Props) => {
  return (
    <div className={`${!isOpen && "hidden"}`}>
      {/* backdrop used to close sidebar when clicked */}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 z-10`}
        onClick={toggle}
      ></div>

      {/* cart sidebar */}
      <div
        className={`absolute opacity-0 right-0 top-0 bottom-0 bg-white border-l-2 transition-[width, padding, opacity] duration-300 z-20 ${
          isOpen && "opacity-100 w-full md:w-80 p-4"
        }`}
      >
        <div className="flex items-center">
          <IoClose className="text-4xl cursor-pointer" onClick={toggle} />
          <span className="flex-1 text-center text-2xl">Your Cart</span>
        </div>
        <div className="mt-8">
          <span>No items to display...</span>
        </div>
      </div>
    </div>
  );
};
