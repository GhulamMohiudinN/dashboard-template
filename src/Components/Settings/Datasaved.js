import React from "react";
import tick from '../../assets/Images/Setting-icons/setting-nav/1.svg';
import cross from '../../assets/Images/Icons/Crossvector.svg';

const Banner = ({ onClose }) => {
  return (
    <div className="datasaved">
    
      <div className="left">
        <img src={tick} alt="Tick" />
        <p><span>Successfully Saved!</span> Your Profile settings saved</p>
      </div>

      <div className="right" onClick={onClose}>
        <img src={cross} alt="Close" />
      </div>

    </div>
  );
};

export default Banner;
