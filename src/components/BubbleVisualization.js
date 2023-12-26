import React from "react";

const BubbleVisualization = ({ visualSteps, currentStep }) => (
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
);

export default BubbleVisualization;
