import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/Pages/LoginPage';

const App = () => {
  return (
    <Routes>

      <Route path="/" element={<h1>Home Page</h1> } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
  );
};

export default App;
