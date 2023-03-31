import { useDispatch } from "react-redux";
import {
  setFoodCategoryFilter,
  toggleFreeDeliveryFilter,
} from "../../features/FiltersSlice";
import { SingleHeaderFeature } from "./SingleHeaderFeature";

export const HeaderFeatures = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex px-8 py-2 gap-8 overflow-x-scroll">
      <SingleHeaderFeature
        bgColor="bg-green-400"
        imageUrl="https://cdn.pixabay.com/photo/2019/04/24/12/11/burger-4152013_960_720.jpg"
        title="Good burger is always a good idea"
        subtitle="Check out sesonal menu 🍔"
        ctaTitle="Show more"
        cta={() =>
          dispatch(
            setFoodCategoryFilter("563120e3-d63b-45db-92eb-1ea468581d41")
          )
        }
      />
      <SingleHeaderFeature
        bgColor="bg-black"
        textColor="text-white"
        imageUrl="https://cdn.pixabay.com/photo/2020/12/25/15/45/coffee-cup-5859641_960_720.jpg"
        title="Tired? Order a fresh coffee!"
        subtitle="Pick your favorite from a wide variety of fresh cofee 😍"
        ctaTitle="Order now!"
        cta={() =>
          dispatch(
            setFoodCategoryFilter("d8699c52-5743-4fee-8291-012af701c5fb")
          )
        }
      />
      <SingleHeaderFeature
        bgColor="bg-orange-400"
        imageUrl="https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507_960_720.jpg"
        title="Free delivery?"
        subtitle="Check restaurants near you that can deliver food for free"
        ctaTitle="Show places!"
        cta={() => dispatch(toggleFreeDeliveryFilter())}
      />
    </div>
  );
};
