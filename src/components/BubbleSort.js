import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setInputArray,
  setSortOrder,
  setSortedArray,
  setVisualSteps,
  setCurrentStep,
  setTime,
  selectBubbleSort,
} from "../redux/bubbleSortSlice";
import BubbleVisualization from "./BubbleVisualization";

const BubbleSort = () => {
  const dispatch = useDispatch();
  const { inputArray, sortOrder, sortedArray, time, visualSteps, currentStep } =
    useSelector(selectBubbleSort);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const animateSorting = async (steps) => {
    for (let i = 0; i < steps.length; i++) {
      dispatch(setCurrentStep(i));
      await delay(600);
    }
  };

  const bubbleSort = async () => {
    const startTime = performance.now();
    console.log(startTime);
    const n = inputArray.length;
    let tempArray = [...inputArray];
    let steps = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        const shouldSwap =
          sortOrder === "ascending"
            ? tempArray[j] > tempArray[j + 1]
            : tempArray[j] < tempArray[j + 1];
        if (shouldSwap) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          steps.push([...tempArray]);
        }
      }
    }
    dispatch(setVisualSteps(steps));
    dispatch(setSortedArray(tempArray));
    await animateSorting(steps);
    const endTime = performance.now();
    console.log(endTime);
    const time = endTime - startTime;
    console.log(time);
    dispatch(setTime(time));
  };

  const onSortClick = () => {
    dispatch(setCurrentStep(0));
    bubbleSort();
  };

  return (
    <div className="container">
      <h1>Bubble sort</h1>
      <div className="input-container">
        <label>
          Enter the array:
          <input
            type="text"
            onChange={(e) => {
              const newArray = e.target.value
                .split(",")
                .map((num) => Number(num.trim()));
              dispatch(setInputArray(newArray));
            }}
          />
        </label>
        <label>
          Can you please sort the order
          <select onChange={(e) => dispatch(setSortOrder(e.target.value))}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>

        <button onClick={onSortClick}>Sort the array</button>
      </div>

      <div className="result">
        <h2>Sorted Array:</h2>
        <BubbleVisualization
          visualSteps={visualSteps}
          currentStep={currentStep}
          time={time}
        />
        <div className="sorted-array">
          {sortedArray.map((num, index) => (
            <span key={index}>{num} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BubbleSort;
