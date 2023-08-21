import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Change to type of NFT from Alchemy (or make own)
interface ViewedNftsState {
  value: string[];
}

const initialState: ViewedNftsState = {
  value: [],
};

export const viewedNftsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { push } = viewedNftsSlice.actions;

export const selectCount = (state: RootState) => state.viewedNfts.value;

export default viewedNftsSlice.reducer;
