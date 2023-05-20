import { createSlice } from "@reduxjs/toolkit";
import { filterValues, filterValuesType } from "types/filter";

type filterStateType = {
  filterBy: filterValuesType;
};

const initialState: filterStateType = {
  filterBy: filterValues.showAll,
};

 const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterField(state, action) {
      state.filterBy = action.payload;
    },
    refreshFilterField(state) {
      state.filterBy = filterValues.showAll;
    },
  },
});

export const { changeFilterField, refreshFilterField } = filterSlice.actions;
export { filterSlice };

