"use client";

import React, { useState } from "react";
import "./App.css"; // Import the CSS file

const Stepper = () => {
  const steps = {CART:"1",ADDRESS: "2",Payment: "3",CHECKOUT:"4"}; // Steps array
  const [currentStep, setCurrentStep] = useState(0); // State to track the current active step

  const handleStepClick = (index) => {
    setCurrentStep(index); // Set the clicked step as active
  };

  return (
    
    <div className="stepperContainer">
       <h1 className='text-setteper'>Steppper track  the status of application  </h1>
      <div className="stepperWrapper">
        {Object.entries(steps).map(([stepName, stepvalue], index) => (
          <div key={index} className="step">
            {/* Step Circle */}
            <div
              className={`stepCircle 
                ${index <= currentStep ? "bg-primary text-white" : "bg-white text-gray-500"} 
                ${index === currentStep ? "animateIcon" : ""}`}
              onClick={() => handleStepClick(index)} // Handle step click to change active step
            >
              {/* Dynamic SVG for active/inactive steps */}
              {index <= currentStep ? (
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 4.1368C13.5 4.1368 4.16667 13.4032 4.16667 24.8208C4.16667 36.2383 13.5 45.5048 25 45.5048C36.5 45.5048 45.8333 36.2383 45.8333 24.8208C45.8333 13.4032 36.5 4.1368 25 4.1368ZM20.8333 35.1628L10.4167 24.8208L13.3542 21.9043L20.8333 29.3092L36.6458 13.6101L39.5833 16.5472L20.8333 35.1628Z"
                    fill="#2563eb"
                  />
                </svg>
              ) : (
                <svg
                  width="50"
                  height="52"
                  viewBox="0 0 50 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 4.31351C13.5 4.31351 4.16666 13.9758 4.16666 25.8811C4.16666 37.7863 13.5 47.4486 25 47.4486C36.5 47.4486 45.8333 37.7863 45.8333 25.8811C45.8333 13.9758 36.5 4.31351 25 4.31351ZM25 43.1351C15.7917 43.1351 8.33332 35.4139 8.33332 25.8811C8.33332 16.3482 15.7917 8.62702 25 8.62702C34.2083 8.62702 41.6667 16.3482 41.6667 25.8811C41.6667 35.4139 34.2083 43.1351 25 43.1351Z"
                    fill="#2563eb"
                  />
                </svg>
              )}
              <p
                className={`stepLabel ${
                  index <= currentStep ? "text-primary" : "text-secondary"
                }`}
              >{stepName}
              
              <br/>
              <span className={`stepStatus ${index < currentStep ? 'completed' : index === currentStep ? 'pending' : ''}`}>
                  {index < currentStep ? "Completed" : index === currentStep ? "Pending" : ""}
                </span>
              </p>
              
            </div>

            {/* Connector Line */}
            {index < Object.keys(steps).length - 1 && (
              <div
                className={`connectorLine ${
                  index < currentStep
                    ? "connectorLineActive"
                    : "connectorLineInactive"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
