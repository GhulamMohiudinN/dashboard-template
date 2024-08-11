import React from 'react';
import dots from '../../assets/Images/Icons/dots.svg';
import search from '../../assets/Images/Icons/search.svg';
import arrow from '../../assets/Images/Icons/arrow.svg';

const DashboardNav = ({ currentComponent, setCurrentComponent, searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="dashboard-nav">
        <div className="menu">
          <a
            href="#"
            className={`nav-item ${currentComponent === 'Overview' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Overview')}
          >
            Overview
          </a>
          <a
            href="#"
            className={`nav-item ${currentComponent === 'Tasks' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Tasks')}
          >
            Tasks <span className="count">7</span>
          </a>
          <a
            href="#"
            className={`nav-item ${currentComponent === 'Documents' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Documents')}
          >
            Documents <span className="count">2</span>
          </a>
          <a
            href="#"
            className={`nav-item ${currentComponent === 'Team' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Team')}
          >
            Team <span className="count temp">99+</span>
          </a>
          <a
            href="#"
            className={`nav-item ${currentComponent === 'Reports' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Reports')}
          >
            Reports
          </a>
          <a
            href="#"
            className={`nav-item temp ${currentComponent === 'Admin' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Admin')}
          >
            Admin
          </a>
          <a
            href="#"
            className={`nav-item temp ${currentComponent === 'Dots' ? 'active' : ''}`}
            onClick={() => setCurrentComponent('Dots')}
          >
            <img src={dots} alt="Dots" />
          </a>
        </div>

        {(currentComponent === 'Overview' || currentComponent === 'Reports' || currentComponent === 'Team' || currentComponent === 'Admin') && (
          <div className="date-picker">
            <input type="date" placeholder="Start date" />
            <span className="calendar-icon"><img src={arrow} alt="Calendar" /></span>
            <input type="date" placeholder="End date" />
          </div>
        )}

        {(currentComponent === 'Tasks' || currentComponent === 'Documents') && (
          <div className="search-container">
            <img src={search} alt="Search Icon" className="search-icon" />
            <input
              type="text"
              placeholder="Search for..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardNav
