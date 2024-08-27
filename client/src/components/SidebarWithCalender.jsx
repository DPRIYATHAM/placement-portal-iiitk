import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Sidebar from './Side';
import Calendar from './Calender';
import { useCalendar } from './CalenderContext';

const SidebarWithCalendar = ({ isOpen, toggleSidebar }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const { selectedDate } = useCalendar();

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className={`fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-200 ease-in-out z-30 bg-[#DDDDDD] sidebar`}>
      <div className="p-6 h-full overflow-y-auto">
        <div className="flex justify-end mb-4">
          <FaTimes className="text-xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <Sidebar onToggleCalendar={toggleCalendar} />
        {showCalendar && (
          <div className="mt-4">
            <Calendar />
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarWithCalendar;