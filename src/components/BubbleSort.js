import React, { useState } from "react";

function BubbleSort() {
  const [inputArray, setInputArray] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortedArray, setSortedArray] = useState([]);

  const bubbleSort = (arr, order) => {
    const n = arr.length;
    let tempArray = [...arr];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        const shouldSwap =
          order === "ascending"
            ? tempArray[j] > tempArray[j + 1]
            : tempArray[j] < tempArray[j + 1];
        if (shouldSwap) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
        }
      }
    }
    setSortedArray(tempArray);
  };

  const onSortClick = () => {
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
          Can u please sort the order
          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>

        <button onClick={onSortClick}>Sort the array</button>
      </div>

      <div className="result">
        <h2>Sorted Array:</h2>
        <p>{sortedArray.join(", ")}</p>
      </div>
    </div>
  );
}

export default BubbleSort;
