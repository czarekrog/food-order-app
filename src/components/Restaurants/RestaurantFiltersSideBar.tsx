type Props = {
  isOpen: boolean;
};

export const RestaurantFiltersSideBar = ({ isOpen }: Props) => {
  return (
    <div
      className={`w-0 md:block md:w-80 md:p-8 border-r-2 h-screen overflow-y-auto md:sticky md:top-0 transition-[width, display] duration-300 ${
        isOpen && "block flex-1 p-8"
      }`}
    >
      <span className="text-lg underline underline-offset-2 hover:underline-offset-4 cursor-pointer">
        Clear all filters
      </span>
      {/* Sorting */}
      <section className="text-xl mt-2">
        <span className="text-2xl">Sort by</span>
        <div>
          <input
            type="radio"
            id="most-popular"
            value="Most popular"
            name="sort-by"
            className="mr-2 w-4 h-4 my-3"
          />
          <label htmlFor="most-popular">Most popular</label>
        </div>
        <div>
          <input
            type="radio"
            id="rating"
            value="Rating"
            name="sort-by"
            className="mr-2 w-4 h-4 my-3"
          />
          <label htmlFor="rating">Rating</label>
        </div>
        <div>
          <input
            type="radio"
            id="delivery-time"
            value="Delivery time"
            name="sort-by"
            className="mr-2 w-4 h-4 my-3"
          />
          <label htmlFor="delivery-time">Delivery time</label>
        </div>
      </section>
      {/* Price Range */}
      <section className="my-4">
        <span className="text-2xl">Price range</span>
        <div className="flex justify-between gap-4 mt-2">
          <span className="flex-1 text-center text-2xl bg-gray-200 hover:bg-gray-100 cursor-pointer rounded-full text-gray-400 hover:text-gray-500">
            $
          </span>
          <span className="flex-1 text-center text-2xl bg-gray-200 hover:bg-gray-100 cursor-pointer rounded-full text-gray-400 hover:text-gray-500">
            $$
          </span>
          <span className="flex-1 text-center text-2xl bg-gray-200 hover:bg-gray-100 cursor-pointer rounded-full text-gray-400 hover:text-gray-500">
            $$$
          </span>
        </div>
      </section>
      {/* recommended by us */}
      <section className="my-4">
        <span className="text-2xl">Recommended by us</span>
        <label className="relative flex justify-between items-center p-2">
          <span>Top Eats</span>
          <input
            type="checkbox"
            className="absolute left-0 top-0 w-full h-full peer appearance-none"
          />
          <span className="cursor-pointer bg-gray-300 w-11 h-7 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-500 peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300"></span>
        </label>
        <label className="relative flex justify-between items-center p-2">
          <span>On sale</span>
          <input
            type="checkbox"
            className="absolute left-0 top-0 w-full h-full peer appearance-none"
          />
          <span className="cursor-pointer bg-gray-300 w-11 h-7 rounded-full flex flex-shrink-0 items-center after:bg-white after:w-5 after:h-5 after:rounded-full p-1 peer-checked:bg-green-500 peer-checked:after:translate-x-4 ease-in-out duration-300 after:duration-300"></span>
        </label>
      </section>
    </div>
  );
};
