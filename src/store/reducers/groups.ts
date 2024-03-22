import { createSlice } from "@reduxjs/toolkit";
import { IGroupProps } from "types/group";

const initialState: IGroupProps[] = [];

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    updateGroup: (_, { payload }) => payload,
    removeGroup: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { updateGroup, removeGroup } = groupsSlice.actions;

export default groupsSlice.reducer;
