import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  checkoutModalOpen: boolean;
}

const initialState: UIState = {
  checkoutModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCheckoutModal(state) {
      state.checkoutModalOpen = !state.checkoutModalOpen;
    },
  },
});

export const { toggleCheckoutModal } = uiSlice.actions;

export default uiSlice.reducer;
