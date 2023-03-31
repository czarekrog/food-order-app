import MenuCategory from "../../types/MenuCategory";

type Props = {
  isOpen: boolean;
  toggle: () => void;
  categories: MenuCategory[];
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
};

export const CategoriesSidebar = ({
  isOpen,
  toggle,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div
      className={`w-0 md:block md:w-80 md:px-8 md:py-4 border-r-2 h-screen sticky top-0 overflow-y-auto md:sticky md:top-0 transition-[width, display] duration-300 ${
        isOpen && "block flex-1 px-8 py-4"
      }`}
    >
      <span className="text-2xl">Categories</span>
      <div
        className={`cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl ${
          selectedCategory === null && "bg-gray-100"
        }`}
        onClick={() => setSelectedCategory(null)}
      >
        <span>Show all</span>
      </div>
      {/* Categories list */}
      {categories.map((category) => (
        <div
          key={category.id}
          className={`cursor-pointer hover:bg-gray-100 p-2 my-2 rounded-md font-medium text-xl ${
            category.id === selectedCategory && "bg-gray-100"
          }`}
          onClick={() => setSelectedCategory(category.id)}
        >
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};
