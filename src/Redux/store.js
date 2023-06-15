import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducer.js";

const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});

export default store;