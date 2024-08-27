import React from 'react';

const Sidebar = ({ onToggleCalendar }) => {
  return (
    <div className="w-80 bg-[#DDDDDD] p-4 rounded-lg">
      <div className="flex items-center mb-6">
        <div className="mr-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800">Darisi Priyatham</p>
          <p className="text-sm text-blue-500 cursor-pointer">view profile &gt;</p>
        </div>
      </div>
      <nav>
        <ul className="space-y-2 flex flex-col items-center justify-center">
          <li className="py-2 border-b border-black w-full text-center">Home</li>
          
          <li
            className="py-2 border-b border-black w-full text-center cursor-pointer"
            onClick={onToggleCalendar}
          >
            Calendar
          </li>
          <li className="py-2 border-b border-black w-full text-center">History</li>
          <li className="py-2 border-b border-black w-full text-center">Log Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;