import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLanguageSelection = () => {
    navigate('/language-selection');
  };

  return (
    <div>
      <h1>Hello User,</h1>
      <button onClick={handleLanguageSelection}>Select your language</button>
    </div>
  );
};

export default Home;
