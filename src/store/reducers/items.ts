import { createSlice } from "@reduxjs/toolkit";

const initialState = "[]";

const itemsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
});

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
