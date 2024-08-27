import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/Pages/LoginPage';
import Dashboard from '../src/Pages/Dashboard';
import Profile from '../src/Pages/Profile';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<h1>Home Page</h1> } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  );
};

export default App;
