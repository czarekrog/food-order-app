import { IoClose } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  deleteItem,
  selectCartByRestaurants,
  selectCartTotal,
  updateCount,
} from "../../../features/CartSlice";
import Restaurant from "../../../types/Restaurant";
import { BsTrash } from "react-icons/bs";
import {
  toggleCartSidebar,
  toggleCheckoutModal,
} from "../../../features/UISlice";

export const CartSidebar = () => {
  const dispatch = useDispatch();

  const { cartSidebarOpen } = useSelector(
    (state: RootState) => state.uiReducer
  );

  const items = useSelector((state: RootState) =>
    selectCartByRestaurants(state)
  );

  const restaurants = useSelector(
    (state: RootState) => state.restaurantsReducer.restaurants
  );

  const cartTotal = useSelector((state: RootState) => selectCartTotal(state));

  const getRestaurantById = (restaurantId: string) => {
    const restaurant = restaurants.find(
      (restaurant) => restaurant.id === restaurantId
    );
    return restaurant;
  };

  const getMenuItemById = (restaurant: Restaurant, menuItemId: string) => {
    return restaurant.menuItems.find((menuItem) => menuItem.id === menuItemId);
  };

  const renderItems = () => {
    return (
      <div>
        {items.map((item) => {
          const restaurant = getRestaurantById(item.restaurantId);
          return (
            <div className="mt-4">
              <span className="text-xl font-medium">{restaurant?.name}</span>
              {item.items.map((item) => {
                const menuItem = getMenuItemById(restaurant!, item.id);
                return (
                  <div className="border border-gray-100 rounded-lg p-2 my-1 flex items-center justify-between">
                    <span>{menuItem?.name}</span>
                    <div className="flex items-center gap-2">
                      <button
                        className="cursor-pointer text-xl"
                        disabled={item.qty <= 1}
                        onClick={() =>
                          dispatch(
                            updateCount({ itemId: menuItem?.id!, qty: -1 })
                          )
                        }
                      >
                        -
                      </button>
                      <span className="text-xl">{item.qty}</span>
                      <button
                        className="cursor-pointer text-xl"
                        onClick={() =>
                          dispatch(
                            updateCount({ itemId: menuItem?.id!, qty: 1 })
                          )
                        }
                      >
                        +
                      </button>
                      <BsTrash
                        className="text-xl text-red-500 cursor-pointer"
                        onClick={() => dispatch(deleteItem(menuItem?.id!))}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`${!cartSidebarOpen && "hidden"}`}>
      {/* backdrop used to close sidebar when clicked */}
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-25 z-10`}
        onClick={() => dispatch(toggleCartSidebar())}
      ></div>

      {/* cart sidebar */}
      <div
        className={`fixed opacity-0 right-0 top-0 bottom-0 bg-white border-l-2 transition-[width, padding, opacity] duration-300 z-20 ${
          cartSidebarOpen && "opacity-100 w-full md:w-80 p-4"
        }`}
      >
        <div className="relative h-full">
          <div className="flex">
            <IoClose
              className="text-4xl cursor-pointer"
              onClick={() => dispatch(toggleCartSidebar())}
            />
            <span className="flex-1 text-center text-2xl">Your Cart</span>
          </div>
          <div className="mt-8">
            {items.length === 0 ? (
              <span>No items to display...</span>
            ) : (
              <>
                <div>
                  {renderItems()}
                  <p className="mt-8 text-right text-xl font-medium">
                    Total: ${cartTotal.toFixed(2)}
                  </p>
                </div>
                <div className="w-full py-4 absolute bottom-0 left-0 right-0 flex justify-center items-center">
                  <button
                    className="bg-black text-white text-lg px-8 py-2 rounded-lg outline-none hover:mb-4 transition-[margin-bottom] duration-300"
                    onClick={() => dispatch(toggleCheckoutModal())}
                  >
                    Fast checkout
                    <HiOutlineRocketLaunch className="inline ml-2 text-lg" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
