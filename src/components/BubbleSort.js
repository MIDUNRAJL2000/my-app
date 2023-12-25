import React, { useState } from "react";

function BubbleSort() {
  const [inputArray, setInputArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortedArray, setSortedArray] = useState([]);
  const [visualSteps, setVisualSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const bubbleSort = async (arr, order) => {
    const n = arr.length;
    let tempArray = [...arr];
    let steps = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        const shouldSwap =
          order === "ascending"
            ? tempArray[j] > tempArray[j + 1]
            : tempArray[j] < tempArray[j + 1];
        if (shouldSwap) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
          steps.push([...tempArray]);
        }
      }
    }

    setVisualSteps(steps);
    await animateSorting(steps);
    setSortedArray(tempArray);
  };

  const animateSorting = async (steps) => {
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await delay(500);
    }
  };

  const onSortClick = () => {
    setCurrentStep(0);
    bubbleSort(inputArray, sortOrder);
  };

  return (
    <div className="container">
      <h1>Bubble sort</h1>
      <div className="input-container">
        <label>
          Enter the array
          <input
            type="text"
            onChange={(e) => {
              const newArray = e.target.value.split(",").map(Number);
              setInputArray(newArray);
            }}
          />
        </label>
        <label>
          Can you please sort the order
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>

        <button onClick={onSortClick}>Sort the array</button>
      </div>

      <div className="result">
        <h2>Sorted Array:</h2>
        <div className="visualization">
          {visualSteps.length > 0 &&
            visualSteps[currentStep]?.map((num, index) => (
              <div
                key={index}
                className={`array-box ${index === currentStep ? "active" : ""}`}
              >
                {num}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BubbleSort;
