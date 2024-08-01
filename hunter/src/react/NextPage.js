// src/components/NextPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const NextPage = () => {
  const location = useLocation();
  const { language } = location.state || { language: 'Unknown' };

  return (
    <div>
      <h1>Next Page</h1>
      <p>Selected Language: {language}</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default NextPage;
