import { createSlice } from "@reduxjs/toolkit";

const initialState = "[]";

const itemsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    newItem: () => {},
  },
});

export const { newItem } = itemsSlice.actions;

export default itemsSlice.reducer;
