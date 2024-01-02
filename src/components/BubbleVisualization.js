import React from "react";
import { useSelector } from "react-redux";
import { selectBubbleSort } from "../redux/bubbleSortSlice";

const BubbleVisualization = () => {
  const { visualSteps, currentStep, time } = useSelector(selectBubbleSort);

  return (
    <div>
      <div className="visualization">
        {visualSteps.length > 0 &&
          visualSteps[currentStep]?.map((num, index) => (
            <div
              key={index}
              className={`array-box ${index === currentStep ? "active" : ""}`}
              style={{ height: `${num * 10}px` }}
            >
              {num}
            </div>
          ))}
      </div>

      {time !== null && (
        <div
          style={{
            border: "1px solid black",
            height: "50px",
            padding: "6px",
            width: "50%",
            margin: "auto",
          }}
        >
          Time: {time.toFixed(2)} milliseconds
        </div>
      )}
    </div>
  );
};

export default BubbleVisualization;
