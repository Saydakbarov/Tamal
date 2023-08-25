import { createSlice } from "@reduxjs/toolkit";
import { MenuData } from "../data";

const initialState = [];

const productClice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      const { img } = action.payload;

      if (action.payload.length !== 0) {
        state.push(action.payload);
      } else return state;

      // console.log(action.payload.length);
    },
  },
});

export const { addProduct } = productClice.actions;
export default productClice.reducer;
