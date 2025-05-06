import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Importing components
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />   
          <Route path="/login" element={<LoginPage />} />     
        </Routes>
      </div>
    </Router>
  );
}

export default App;
