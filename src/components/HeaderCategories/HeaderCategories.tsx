import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CategoryItem } from "./CategoryItem";

export const HeaderCategories = () => {
  const categories = useSelector(
    (state: RootState) => state.categoriesReducer.categories
  );
  return (
    <div className="md:justify-center flex gap-4 px-4 py-4 overflow-x-auto">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          iconUrl={category.iconUrl}
        />
      ))}
    </div>
  );
};
