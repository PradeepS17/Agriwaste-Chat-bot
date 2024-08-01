import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './react/Login';
import Register from './react/Register';
import ForgotPassword from './react/ForgotPassword';
import Home from './react/Home';
import LanguageSelection from './react/LanguageSelection';
import Chat from './react/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/language-selection" element={<LanguageSelection />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
