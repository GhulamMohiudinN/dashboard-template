// src/Components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/logo.svg";
import user from "../../assets/Images/Icons/user.svg";
import setting from "../../assets/Images/Icons/cog.svg";
import bell from "../../assets/Images/Icons/bell.svg";
import search from "../../assets/Images/Icons/search.svg";
import eleven from "../../assets/Images/Icons/eleven.svg";
import twelve from "../../assets/Images/Icons/twelve.svg";
import thirteen from "../../assets/Images/Icons/thirteen.svg";
import fourteen from "../../assets/Images/Icons/fourteen.svg";
import fifteen from "../../assets/Images/Icons/fifteen.svg";
import sixteen from "../../assets/Images/Icons/sixteen.svg";
import vectordown from '../../assets/Images/Icons/vector-down.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/dashboard"><img src={logo} alt="logo" /></NavLink>
      </div>
      <div className="icons">
        <NavLink to="/settings"><img src={user} alt="user-icon" /></NavLink>
        <NavLink to="/settings"><img src={setting} alt="setting-icon" /></NavLink>
        <a href="#"><img src={bell} alt="bell-icon" /></a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for..." className="search-input" />
        <img src={search} alt="" />
      </div>
      <div className="menu">
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={eleven} alt="eleven" />
            <p className="temp">Eleven</p>
          </div>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={twelve} alt="Twelve" />
            <p>Twelve</p>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={thirteen} alt="Thirteen" />
            <p>Thirteen</p>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={fourteen} alt="Fourteen" />
            <p>Fourteen</p>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={fifteen} alt="fifteen" />
            <p>Fifteen</p>
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) => (isActive ? "item active" : "item")}>
          <div className="item-content">
            <img src={sixteen} alt="Sixteen" />
            <p>Sixteen</p>
            <div className="dropdown">
              <span>99+</span>
              <img src={vectordown} alt="vectordown" />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
