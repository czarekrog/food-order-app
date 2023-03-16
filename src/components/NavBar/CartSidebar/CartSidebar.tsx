import { IoClose } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const CartSidebar = ({ isOpen, toggle }: Props) => {
  console.log(isOpen);
  return (
    <>
      {/* backdrop used to close sidebar when clicked */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 ${
          !isOpen && "hidden"
        }`}
        onClick={toggle}
      ></div>

      {/* cart sidebar */}
      <div
        className={`absolute w-full md:w-80 top-0 bottom-0 bg-white p-4 border-l-2 transition-[right] duration-300 z-10 ${
          isOpen ? "right-0" : "-right-full md:-right-80"
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
    </>
  );
};
