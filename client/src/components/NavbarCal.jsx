import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/Placement Portal/IIITK-Logo.png";
import { FaAngleDown } from "react-icons/fa";

const NavbarCal = ({ toggleSidebar, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md relative w-full">
      <div className="flex items-center">
        <div>
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
        <div className="font-bold text-2xl ml-2">Placement Portal</div>
      </div>

      <div className="relative flex items-center w-full max-w-md mx-auto hidden custom:flex">
        <FaSearch className="absolute left-3 text-red-400" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#DDDDDD] placeholder-placeholder-red"
        />
      </div>

      <div className="hidden custom:flex space-x-10 items-center">
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleSidebar}
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="flex items-center custom:hidden">
        <FaSearch
          className="text-xl mr-4 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
        <FaBars className="text-xl cursor-pointer" onClick={toggleSidebar} />
      </div>

      {showSearch && (
        <div className="absolute top-full left-0 right-0 bg-white p-4 custom:hidden z-10">
          <div className="relative">
            <FaSearch className="absolute left-3 top-3 text-red-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#DDDDDD] placeholder-placeholder-red"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarCal;
