import { configureStore } from "@reduxjs/toolkit";
import bubbleSortReducer from "./redux/bubbleSortSlice";

const store = configureStore({
  reducer: {
    bubbleSort: bubbleSortReducer,
  },
});

export default store;
