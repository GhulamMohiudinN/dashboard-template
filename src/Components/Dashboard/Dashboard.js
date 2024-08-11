import React, { useState } from 'react';
import Topnav from '../Navs/Topnav';
import Bottomnav from '../Navs/Bottomnav';
import DashboardNav from './DashboardNav';
import Overview from './Overview';
import Tasks from './Tasks';
import Documents from './Documents';
import Team from './Team';
import Reports from './Reports';
import Admin from './Admin';

const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState('Overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleNavClick = (component) => {
    if (component === 'Dots') {
      setShowModal(true);
    } else {
      setShowModal(false);
      setCurrentComponent(component);
    }
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Overview':
        return <Overview />;
      case 'Tasks':
        return <Tasks />;
      case 'Documents':
        return <Documents searchQuery={searchQuery} />;
      case 'Team':
        return <Team />;
      case 'Reports':
        return <Reports />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <Topnav />

      <div className="dashboard">
        <h1 className='dashname'>Dashboard</h1>

        <DashboardNav
          currentComponent={currentComponent}
          setCurrentComponent={handleNavClick}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {renderComponent()}

        <Admin showModal={showModal} setShowModal={setShowModal} />
        
      </div>

      <Bottomnav />
    </>
  );
};

export default Dashboard;
