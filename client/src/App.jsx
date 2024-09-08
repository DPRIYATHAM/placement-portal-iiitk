import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/Pages/LoginPage';
import Dashboard from '../src/Pages/Dashboard';
import Profile from '../src/Pages/Profile';
import DriveStudent from '../src/Pages/DriveStudent';
import DriveCoordinator from '../src/Pages/DriveCoordinator';


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<h1>Home Page</h1> } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/studentDrive" element={<DriveStudent />} />
      <Route path="/coordinatorDrive" element={<DriveCoordinator />} />
    </Routes>
  );
};

export default App;
