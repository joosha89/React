import {createSlice} from "@reduxjs/toolkit";
import Data from 'data';
//import { Data as TypesData } from 'types/data';

export const guitarSlice = createSlice({
  name: "guitar",
  initialState: Data,
  reducers: {
    filterList: (state, action) => {
      return action.payload;
    },

  }
});

export const {filterList} = guitarSlice.actions;
export default guitarSlice.reducer;