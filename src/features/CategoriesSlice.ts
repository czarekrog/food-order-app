import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Category from "../types/Category";

export interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [
    {
      id: "idufnas9j9asdjas09da",
      name: "Sushi",
      iconUrl:
        "https://cdn.pixabay.com/photo/2021/02/06/21/12/sushi-5989416_960_720.png",
    },
    {
      id: "idasj9asdhj9asdjhad",
      name: "Burgers",
      iconUrl:
        "https://cdn.pixabay.com/photo/2017/06/18/22/41/hamburger-2417493_960_720.png",
    },
    {
      id: "sdiashd9ahd9ajd8ass",
      name: "Pizza",
      iconUrl:
        "https://cdn.pixabay.com/photo/2022/10/06/22/22/pizza-7503664_960_720.png",
    },
    {
      id: "daudhh3rrwefsfsdfsfs",
      name: "Burrito",
      iconUrl:
        "https://cdn.pixabay.com/photo/2017/10/24/10/10/taco-2883992_960_720.png",
    },
    {
      id: "sdadaghs8fsah7fhs3q",
      name: "Pasta",
      iconUrl:
        "https://cdn.pixabay.com/photo/2018/12/28/13/25/noodle-3899589_960_720.png",
    },
    {
      id: "asda78h78shf7sahfa",
      name: "Fish",
      iconUrl:
        "https://cdn.pixabay.com/photo/2015/10/24/17/43/fish-1004745_960_720.png",
    },
    {
      id: "dayg8a7sfa8h3wafass",
      name: "Coffee",
      iconUrl:
        "https://cdn.pixabay.com/photo/2018/08/30/16/57/coffee-3642712_960_720.png",
    },
    {
      id: "safd8a7h873hr8qadw",
      name: "Ice Cream",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1804/1804098.png",
    },
    {
      id: "aweda87g87h3rwsfsw",
      name: "Donut",
      iconUrl:
        "https://cdn.pixabay.com/photo/2022/08/25/12/04/donut-7410114_960_720.jpg",
    },
    {
      id: "waduayguy3ra33332d3",
      name: "Vegan",
      iconUrl:
        "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegan-icon.png",
    },
    {
      id: "wara8yg83grab3arar",
      name: "Breakfasts",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913181.png",
    },
    {
      id: "ra8hs87h3r7h23rheu",
      name: "Dumplings",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/6166/6166230.png",
    },
  ],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const selectCategoryById = (state: RootState, categoryId: string) => {
  return state.categoriesReducer.categories.find(
    (category) => category.id === categoryId
  );
};

export default categoriesSlice.reducer;
