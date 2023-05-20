import { combineReducers } from "@reduxjs/toolkit";
import { filterSlice } from "store/filterSlice";
import { usersApi } from "store/users";

export const rootReducer = combineReducers({
  [filterSlice.name]: filterSlice.reducer,
  [usersApi.reducerPath]:usersApi.reducer,
});
