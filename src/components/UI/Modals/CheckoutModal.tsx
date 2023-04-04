import { useDispatch, useSelector } from "react-redux";
import { toggleCheckoutModal } from "../../../features/UISlice";
import { RootState } from "../../../app/store";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../../features/CartSlice";

export const CheckoutModal = () => {
  const dispatch = useDispatch();
  const { checkoutModalOpen } = useSelector(
    (state: RootState) => state.uiReducer
  );

  const {} = useSelector((state: RootState) => state.cartReducer);

  const cartTotal = useSelector((state: RootState) => selectCartTotal(state));
  const cartItemsCount = useSelector((state: RootState) =>
    selectCartItemsCount(state)
  );

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/25 z-50 ${
        checkoutModalOpen ? "flex" : "hidden"
      }`}
      onClick={() => dispatch(toggleCheckoutModal())}
    >
      <div
        className="p-8 bg-white rounded-xl m-4 max-w-lg flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl text-center">Checkout</h2>
        <p className="mt-2 text-center underline">
          {cartItemsCount} cart {cartItemsCount > 1 ? "items" : "item"} for $
          {cartTotal} total
        </p>
        <div className="p-12">
          <p>
            Here would be a checkout form, but to avoid any misunderstandings
            from people that may visit this website, I didn't put one in here.
          </p>
          <p className="mt-4 text-right">Thank you!</p>
        </div>
        <button
          className="hover:underline"
          onClick={() => dispatch(toggleCheckoutModal())}
        >
          Close
        </button>
      </div>
    </div>
  );
};
