type Props = {
  id: string;
  name: string;
  price: number;
  discountedPrice: number | null;
  isPopular?: boolean;
  selectMenuItem: React.Dispatch<React.SetStateAction<string | null>>;
  photoUrl: string;
};

export const MenuItem = ({
  id,
  name,
  price,
  discountedPrice,
  isPopular = false,
  selectMenuItem,
  photoUrl,
}: Props) => {
  return (
    <div
      className="bg-white rounded-sm overflow-hidden shadow-sm cursor-pointer relative"
      onClick={() => selectMenuItem(id)}
    >
      {/* popular badge */}
      {isPopular && (
        <div className="absolute px-5 py-1 top-2 bg-green-600 text-white font-medium rounded-r-full">
          Popular
        </div>
      )}
      <img
        src={photoUrl}
        alt="menu position"
        className="w-full h-48 object-cover"
      />
      <div className="p-2 flex flex-col">
        <span className="text-lg">{name}</span>
        <div>
          <span
            className={`${
              discountedPrice ? "inline-block text-red-500" : "hidden"
            }`}
          >
            ${discountedPrice}
          </span>
          <span className={`${discountedPrice && "line-through ml-2"}`}>
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};
