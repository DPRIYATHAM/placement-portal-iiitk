import React, { useState } from "react";
import NavbarCal from "../../src/components/NavbarCal";
import Filter from "../../src/components/Filter";
import Main from "../../src/components/Main";
import SidebarWithCalendar from "../../src/components/SidebarWithCalender";
import Calendar from "../../src/components/Calender";
import { FaFilter, FaCalendarAlt } from "react-icons/fa";
import { CalendarProvider } from "../../src/components/CalenderContext";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <CalendarProvider>
      <div className="App">
        <NavbarCal toggleSidebar={toggleSidebar} onSearch={handleSearch} />
        <hr />
        <div className="md:hidden p-4 mx-7 flex justify-between">
          <button
            onClick={toggleFilter}
            className="flex items-center gap-2 bg-white border-black border-2 text-black p-2 px-4 rounded-full"
          >
            <FaFilter /> {filterOpen ? "Hide Filters" : "Show Filters"}
          </button>
          <button
            onClick={toggleCalendar}
            className="flex items-center gap-2 bg-white border-black border-2 text-black p-2 px-4 rounded-full"
          >
            <FaCalendarAlt /> {calendarOpen ? "Hide Calendar" : "Show Calendar"}
          </button>
        </div>
        <div className="flex flex-col md:flex-row mx-5">
          <div className={`${filterOpen ? "block" : "hidden"} md:block`}>
            <Filter />
          </div>
          <div className="flex-grow">
            <Main searchTerm={searchTerm} />
          </div>
          <div>
            <Calendar />
          </div>
          <SidebarWithCalendar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        {calendarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
              <Calendar onClose={() => setCalendarOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </CalendarProvider>
  );
}

export default Dashboard;
