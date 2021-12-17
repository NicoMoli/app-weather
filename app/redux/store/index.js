import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";

import weatherSlice from "./../slices/weather";

const reducer = combineReducers({
  weatherSlice,
});

const store = configureStore({
  reducer,
});

export default store;
