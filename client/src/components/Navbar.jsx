import React from 'react';
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="py-2 my-2 shadow-md px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-20" />
          <h1 className="text-black font-ubuntu text-3xl font-bold ">Placement Portal</h1>
        </div>
        <div>
          <a href="#about-placements" className="text-black font-ubuntu text-lg font-normal hover:underline px-6">
            About Placements
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
