import { RootState } from "../store/store";

const selectFilterValue = (state: RootState) => state.filter.filterBy


export { selectFilterValue };
