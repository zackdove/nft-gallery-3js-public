import { configureStore } from "@reduxjs/toolkit";
import viewedNftsSlice from "./nfts/viewedNftsSlice";

const store = configureStore({
  reducer: {
    viewedNfts: viewedNftsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
