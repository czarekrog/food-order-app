import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  checkoutModalOpen: boolean;
  cartSidebarOpen: boolean;
}

const initialState: UIState = {
  checkoutModalOpen: false,
  cartSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCheckoutModal(state) {
      state.checkoutModalOpen = !state.checkoutModalOpen;
    },
    toggleCartSidebar(state) {
      state.cartSidebarOpen = !state.cartSidebarOpen;
    },
  },
});

export const { toggleCheckoutModal, toggleCartSidebar } = uiSlice.actions;

export default uiSlice.reducer;
