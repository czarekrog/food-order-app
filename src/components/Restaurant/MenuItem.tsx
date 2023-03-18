type Props = {
  isPopular?: boolean;
  selectMenuItem: React.Dispatch<React.SetStateAction<string | null>>;
};

export const MenuItem = ({ isPopular = false, selectMenuItem }: Props) => {
  return (
    <div
      className="bg-white rounded-sm overflow-hidden shadow-sm cursor-pointer relative"
      onClick={() => selectMenuItem("1")}
    >
      {/* popular badge */}
      {isPopular && (
        <div className="absolute px-5 py-1 top-2 bg-green-600 text-white font-medium rounded-r-full">
          Popular
        </div>
      )}
      <img
        src="https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_960_720.jpg"
        alt="menu position"
        className="w-full h-48 object-cover"
      />
      <div className="p-2 flex flex-col">
        <span className="text-lg">Menu item name</span>
        <span>$8.99</span>
      </div>
    </div>
  );
};
