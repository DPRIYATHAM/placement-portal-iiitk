import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1> } />
      <Route path="/login" element={<h1>Login Page</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
  );
};

export default App;
