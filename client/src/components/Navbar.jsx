import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-2 mx-2 shadow-md px-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 sm:h-20" />
            <h1 className="text-black font-ubuntu text-xl font-bold sm:text-3xl">
              Placement Portal
            </h1>
          </div>
        </Link>
        <div className="hidden sm:block">
          <a
            href="#about-placements"
            className="text-black font-ubuntu  font-normal hover:underline px-6 sm:text-lg"
          >
            About Placements
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
