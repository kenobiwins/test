import { selectFilterValue } from "redux/filterSlice/filter.selectors";
import {usersApi} from "./usersApi";
import { createSelector } from "@reduxjs/toolkit";
import { filterValues } from "types/filter";

const usersData = usersApi.endpoints.getUsers.select(); 

const selectFilteredUsersData = createSelector(
  [usersData, selectFilterValue],
  (users, selectFilterValue) => {
    if (!users.data || users.data.length === 0) return null; 

    switch (selectFilterValue) {
      case filterValues.follow:
        return users.data.filter((user) => !user.follow);
      case filterValues.followings:
        return users.data.filter((user) => user.follow);
      default:
        return users.data;
    }
  }
);

export { selectFilteredUsersData };
