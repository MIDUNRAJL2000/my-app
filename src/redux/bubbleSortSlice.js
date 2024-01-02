import { createSlice } from "@reduxjs/toolkit";

export const bubbleSortSlice = createSlice({
  name: "bubbleSort",
  initialState: {
    inputArray: [],
    sortOrder: "ascending",
    sortedArray: [],
    visualSteps: [],
    currentStep: 0,
    time: null,
  },
  reducers: {
    setInputArray: (state, action) => {
      state.inputArray = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setSortedArray: (state, action) => {
      state.sortedArray = action.payload;
    },
    setVisualSteps: (state, action) => {
      state.visualSteps = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const {
  setInputArray,
  setSortOrder,
  setSortedArray,
  setVisualSteps,
  setCurrentStep,
  setTime,
} = bubbleSortSlice.actions;

export const selectBubbleSort = (state) => state.bubbleSort;

export default bubbleSortSlice.reducer;
