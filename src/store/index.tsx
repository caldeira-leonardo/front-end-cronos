import { configureStore } from "@reduxjs/toolkit";
import groupsSlice from "./reducers/groups";
import itemsSlice from "./reducers/items";

export const store = configureStore({
  reducer: {
    groups: groupsSlice,
    itens: itemsSlice,
  },
});

export default store;
