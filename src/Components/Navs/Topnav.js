import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../assets/Images/Icons/user.svg";
import setting from "../../assets/Images/Icons/cog.svg";
import bell from "../../assets/Images/Icons/bell.svg";
import logo from '../../assets/Images/logo2.svg';

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="logo">
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="menu-icons">
        <a href="#"> <img src={bell} alt="bell-icon" /> </a>
        <Link to="/settings">
          <img src={setting} alt="setting-icon" />
        </Link>
        <Link to="/settings">
          <img src={user} alt="user-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
