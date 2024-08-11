import React, { useState, useEffect } from 'react';

const Chooseteam = ({ onContinue }) => {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedTeam = localStorage.getItem('selectedTeam');
    if (storedTeam) {
      setSelectedTeam(storedTeam);
    }
  }, []);

  const handleChange = (event) => {
    setSelectedTeam(event.target.value);
    setError(''); 
  };

  const handleContinue = () => {
    if (selectedTeam === '') {
      setError('Please select a team');
    } else {
      localStorage.setItem('selectedTeam', selectedTeam);
      onContinue();
    }
  };

  return (
    <>

    <div className="chooseteam">

    <h1 className='chooseteamlabel'>Choose Team</h1>

    <div className="select">
      <select name="team" id="team" className="team" value={selectedTeam} onChange={handleChange}>
        <option value="">Select a team</option>
        <option value="Team A" className="teamname">Team A</option>
        <option value="Team B" className="teamname">Team B</option>
        <option value="Team C" className="teamname">Team C</option>
        <option value="Team D" className="teamname">Team D</option>
        <option value="Team E" className="teamname">Team E</option>
        <option value="Team F" className="teamname">Team F</option>
        <option value="Team G" className="teamname">Team G</option>
        <option value="Team H" className="teamname">Team H</option>
      </select>
    </div>
      {error && <p className="error-message">{error}</p>}

      <div className="settingbtns">
        <button type="button" className="submit-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>

    </div>
      
    </>
  );
};

export default Chooseteam;
