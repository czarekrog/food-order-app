import { SingleHeaderFeature } from "./SingleHeaderFeature";

export const HeaderFeatures = () => {
  return (
    <div className="flex px-8 py-2 mt-8 gap-8 overflow-x-scroll">
      <SingleHeaderFeature
        bgColor="bg-green-400"
        imageUrl="https://cdn.pixabay.com/photo/2019/04/24/12/11/burger-4152013_960_720.jpg"
        title="Good burger is always a good idea"
        subtitle="Check out our sesonal menu 🍔"
        ctaTitle="Show more"
        ctaLink=""
      />
      <SingleHeaderFeature
        bgColor="bg-black"
        textColor="text-white"
        imageUrl="https://cdn.pixabay.com/photo/2020/12/25/15/45/coffee-cup-5859641_960_720.jpg"
        title="Tired? Order a fresh coffee!"
        subtitle="Pick your favorite from a wide variety of fresh cofee 😍"
        ctaTitle="Order now!"
        ctaLink=""
      />
      <SingleHeaderFeature
        bgColor="bg-orange-400"
        imageUrl="https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507_960_720.jpg"
        title="Free delivery?"
        subtitle="Check restaurants near you that can deliver food for free"
        ctaTitle="Show places!"
        ctaLink=""
      />
    </div>
  );
};
