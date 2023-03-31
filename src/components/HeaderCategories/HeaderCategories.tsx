import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Spinner from "../UI/Spinner";
import { CategoryItem } from "./CategoryItem";

export const HeaderCategories = () => {
  const { categories, loading } = useSelector(
    (state: RootState) => state.categoriesReducer
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-4">
        <Spinner />
      </div>
    );
  } else {
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
  }
};
