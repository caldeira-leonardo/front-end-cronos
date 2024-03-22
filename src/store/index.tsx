import { configureStore } from "@reduxjs/toolkit";
import groupsSlice from "./reducers/groups";
import itemsSlice from "./reducers/items";
import { IGroupProps } from "types/group";
import { IPayerProps } from "types/payer";

export const store = configureStore({
  reducer: {
    groups: groupsSlice,
    itens: itemsSlice,
  },
});

export default store;

export interface IStoreProps {
  groups: IGroupProps[];
  itens: IPayerProps[];
}
