import {createSlice} from "@reduxjs/toolkit";
//import Data from 'data';

const categories = {
  1:{
    name : "Featured",
    value : "1",
    sortName : "featured",
    sort : "desc",
  },
  2:{
    name : "Price",
    value : "2",
    sortName : "price",
    sort : "asc",
  },
  4:{
    name : "Title",
    value : "4",
    sortName : "title",
    sort : "asc",
  },
  5:{
    name : "Newest Arrivals",
    value : "5",
    sortName : "regDate",
    sort : "desc",
  }
};

const sortTypes = {
  1: {
    name : "Asc",
    value : "1",
    otherValue : "2",
  },
  2: {
    name : "Desc",
    value : "2",
    otherValue : "1",
  }
};

export const categorySlice = createSlice({
  name: "category",
  //initialState: 1,
  initialState: {category: 1, categorySortName: "featured", sortType: 1, sortName: "Asc"},
  //initialState: {category: 1, sortType: 1},
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.categorySortName = categories[action.payload]["sortName"];

    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
      state.sortName = sortTypes[action.payload]["name"];

    }
  }
});

export const {setCategory, setSortType} = categorySlice.actions;
export default categorySlice.reducer;