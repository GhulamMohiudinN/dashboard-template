import React, { useState } from 'react';
import Profileformnav from './Profileformnav';
import Chooseteam from './Chooseteam';
import Profileform from './Profileform';
import Companydetails from './Companydetails';
import Othersettings from './Othersettings';
import Finalsubmit from './Finalsubmit';
import Profileformmobnav from './Profileformmobnav';
import Topnav from '../Navs/Topnav';
import Bottomnav from '../Navs/Bottomnav';

const Settings = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const goToNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <Topnav />

      <div className="settings-container">
        <div className="top">
          <h1>Complete Profile</h1>
          <a href="#">Finish Later</a>
        </div>

        <div className="main-body">
          <Profileformnav activeStep={activeStep} onStepClick={handleStepClick} />
          <Profileformmobnav activeStep={activeStep} onStepClick={handleStepClick} />

          <div className="content">
            {activeStep === 1 && <Chooseteam onContinue={goToNextStep} />}
            {activeStep === 2 && (
              <Companydetails onBack={goToPreviousStep} onContinue={goToNextStep} />
            )}
            {activeStep === 3 && (
              <Profileform onBack={goToPreviousStep} onContinue={goToNextStep} />
            )}
            {activeStep === 4 && (
              <Othersettings onBack={goToPreviousStep} onContinue={goToNextStep} />
            )}
            {activeStep === 5 && (
              <Finalsubmit onBack={goToPreviousStep} onContinue={goToNextStep} />
            )}
          </div>
        </div>
      </div>

      <Bottomnav />
    </>
  );
};

export default Settings;
