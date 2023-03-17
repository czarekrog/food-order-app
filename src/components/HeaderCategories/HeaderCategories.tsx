import { CategoryItem } from "./CategoryItem";

export const HeaderCategories = () => {
  return (
    <div className="md:justify-center flex gap-4 px-4 py-4 overflow-x-auto">
      <CategoryItem
        name="Sushi"
        imgSrc="https://cdn.pixabay.com/photo/2021/02/06/21/12/sushi-5989416_960_720.png"
      />
      <CategoryItem
        name="Burgers"
        imgSrc="https://cdn.pixabay.com/photo/2017/06/18/22/41/hamburger-2417493_960_720.png"
      />
      <CategoryItem
        name="Pizza"
        imgSrc="https://cdn.pixabay.com/photo/2022/10/06/22/22/pizza-7503664_960_720.png"
      />
      <CategoryItem
        name="Burrito"
        imgSrc="https://cdn.pixabay.com/photo/2017/10/24/10/10/taco-2883992_960_720.png"
      />
      <CategoryItem
        name="Pasta"
        imgSrc="https://cdn.pixabay.com/photo/2018/12/28/13/25/noodle-3899589_960_720.png"
      />
      <CategoryItem
        name="Fish"
        imgSrc="https://cdn.pixabay.com/photo/2015/10/24/17/43/fish-1004745_960_720.png"
      />
      <CategoryItem
        name="Coffee"
        imgSrc="https://cdn.pixabay.com/photo/2018/08/30/16/57/coffee-3642712_960_720.png"
      />
      <CategoryItem
        name="Ice Cream"
        imgSrc="https://cdn-icons-png.flaticon.com/512/1804/1804098.png"
      />
      <CategoryItem
        name="Donuts"
        imgSrc="https://cdn.pixabay.com/photo/2022/08/25/12/04/donut-7410114_960_720.jpg"
      />
      <CategoryItem
        name="Vegan"
        imgSrc="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/vegan-icon.png"
      />
      <CategoryItem
        name="Breakfasts"
        imgSrc="https://cdn-icons-png.flaticon.com/512/2913/2913181.png"
      />
      <CategoryItem
        name="Dumplings"
        imgSrc="https://cdn-icons-png.flaticon.com/512/6166/6166230.png"
      />
    </div>
  );
};
