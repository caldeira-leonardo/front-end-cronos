import { createSlice } from "@reduxjs/toolkit";

const initialState = "[]";

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
});

export const {} = groupsSlice.actions;

export default groupsSlice.reducer;
