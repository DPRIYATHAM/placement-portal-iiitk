import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/Pages/LoginPage";
import Dashboard from "../src/Pages/Dashboard";
import Profile from "../src/Pages/Profile";
import StudentDrive from "./Pages/StudentDrive";
import AddDrive from "./Pages/AddDrive";
import CoordinatorDrive from "./Pages/CoordinatorDrive";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/drive/:id" element={<StudentDrive />} />
      <Route path="coordinator/add-drive" element={<AddDrive />} />
      <Route path="/coordinator/drive/:id" element={<CoordinatorDrive />} />
    </Routes>
  );
};

export default App;