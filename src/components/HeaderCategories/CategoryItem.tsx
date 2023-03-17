type Props = {
  name: string;
  imgSrc: string;
};

export const CategoryItem = ({ name, imgSrc }: Props) => {
  return (
    <div className="flex flex-col w-20 items-center justify-center p-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200">
      <img
        src={imgSrc}
        alt="Category icon"
        className="w-full aspect-square object-cover"
      />
      <span className="text-xs font-medium mt-2">{name}</span>
    </div>
  );
};
