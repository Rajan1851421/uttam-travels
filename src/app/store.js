import { configureStore } from "@reduxjs/toolkit";
import producrSlice from "../features/producrSlice";
export const store = configureStore({
    reducer: {
      productStore : producrSlice,
    },
  })