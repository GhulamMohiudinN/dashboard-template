import React from "react";
import one from "../../assets/Images/Setting-icons/setting-nav/1.svg";
import two from "../../assets/Images/Setting-icons/setting-nav/2.svg";
import three from "../../assets/Images/Setting-icons/setting-nav/3.svg";
import four from "../../assets/Images/Setting-icons/setting-nav/4.svg";
import five from "../../assets/Images/Setting-icons/setting-nav/5.svg";

const Profileformnav = ({ activeStep, onStepClick }) => {
  const getStepClass = (step) => {
    if (step < activeStep) return "completed";
    if (step === activeStep) return "active";
    return "disabled";
  };


  return (
    <div className="setting-nav screen">
      <div
        className={`step ${getStepClass(1)}`}
      >
        <div className="step-header">
          <img src={one} alt="Step 1" />
          <span>1. Choose Team</span>
        </div>
        <p>Optional Label</p>
      </div>

      <div
        className={`step ${getStepClass(2)}`}
      >
        <div className="step-header">
          <img src={two} alt="Step 2" />
          <span>2. Company Details</span>
        </div>
        <p>Optional Label</p>
      </div>

      <div
        className={`step ${getStepClass(3)}`}
      >
        <div className="step-header">
          <img src={three} alt="Step 3" />
          <span>3. Profile Details</span>
        </div>
        <p>Optional Label</p>
      </div>

      <div
        className={`step ${getStepClass(4)}`}
      >
        <div className="step-header">
          <img src={four} alt="Step 4" />
          <span>4. Other Settings</span>
        </div>
        <p>Optional Label</p>
      </div>

      <div
        className={`step ${getStepClass(5)}`}
      >
        <div className="step-header">
          <img src={five} alt="Step 5" />
          <span>5. Submit</span>
        </div>
        <p>Optional Label</p>
      </div>
    </div>
  );
};

export default Profileformnav;
