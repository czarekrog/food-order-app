type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const CategoriesSidebar = ({ isOpen, toggle }: Props) => {
  return (
    <div
      className={`w-0 md:block md:w-80 md:px-8 md:py-4 border-r-2 h-screen sticky top-0 overflow-y-auto md:sticky md:top-0 transition-[width, display] duration-300 ${
        isOpen && "block flex-1 px-8 py-4"
      }`}
    >
      <span className="text-2xl">Categories</span>
      {/* Categories list */}
      <div className="cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl">
        <span>Category 1</span>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl">
        <span>Category 2</span>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl">
        <span>Category 3</span>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl">
        <span>Category 4</span>
      </div>
    </div>
  );
};
