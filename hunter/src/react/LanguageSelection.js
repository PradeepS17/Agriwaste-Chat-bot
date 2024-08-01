// src/react/LanguageSelection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelection.css'; // Import the CSS file for styling

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    navigate('/chat', { state: { language } });
  };

  return (
    <div className="language-selection-page">
      <div className="language-selection-container">
        <h1 className="language-selection-title">Select your language</h1>
        <div className="language-buttons">
          <button onClick={() => handleLanguageSelect('English')} className="language-button">English</button>
          <button onClick={() => handleLanguageSelect('Tamil')} className="language-button">Tamil</button>
          <button onClick={() => handleLanguageSelect('Hindi')} className="language-button">Hindi</button>
          <button onClick={() => handleLanguageSelect('Telugu')} className="language-button">Telugu</button>
          <button onClick={() => handleLanguageSelect('Kannada')} className="language-button">Kannada</button>
          <button onClick={() => handleLanguageSelect('Malayalam')} className="language-button">Malayalam</button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
