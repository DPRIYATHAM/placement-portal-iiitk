// CalendarContext.js
import React, { createContext, useState, useContext } from 'react';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <CalendarContext.Provider value={{ 
      selectedDate, 
      setSelectedDate, 
      events, 
      setEvents,
      currentMonth,
      setCurrentMonth
    }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);