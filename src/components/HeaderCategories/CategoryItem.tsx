import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setFoodCategoryFilter } from "../../features/FiltersSlice";

type Props = {
  id: string | null;
  name: string;
  iconUrl: string;
};

export const CategoryItem = ({ id, name, iconUrl }: Props) => {
  const { foodCategory } = useSelector(
    (state: RootState) => state.filtersReducer
  );
  const dispatch = useDispatch();
  return (
    <div
      className={`flex flex-col h-24 w-20 items-center justify-center p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
        id === foodCategory && "bg-gray-100"
      } ${id === null && foodCategory === null && "hidden"}`}
      onClick={() => dispatch(setFoodCategoryFilter(id))}
    >
      <img
        src={iconUrl}
        alt="Category icon"
        className={`h-full aspect-square object-cover ${
          id === null && "hidden"
        }`}
      />
      <span
        className={`font-medium text-center mt-2 ${
          id === null ? "text-sm" : "text-xs"
        }`}
      >
        {name}
      </span>
    </div>
  );
};
