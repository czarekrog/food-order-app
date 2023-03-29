import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CategoryItem } from "./CategoryItem";

export const HeaderCategories = () => {
  const categories = useSelector(
    (state: RootState) => state.categoriesReducer.categories
  );

  return (
    <div className="md:justify-center items-center flex gap-4 px-4 py-4 overflow-x-auto">
      <CategoryItem id={null} name="SHOW ALL" iconUrl="" />
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          iconUrl={category.iconUrl}
        />
      ))}
    </div>
  );
};
