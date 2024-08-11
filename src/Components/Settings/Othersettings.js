import React from 'react';

const Othersettings = ({ onBack, onContinue }) => {
  return (
    <>

      <h3>This is Other Settings Page</h3>

      <div className="settingbtns">
        <a href="#" className='back-btn' onClick={onBack}>Back</a>
        <button type="button" className="submit-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  );
};

export default Othersettings;
