import React, { useState } from 'react';
import { useCalendar } from './CalenderContext';

const Calendar = ({ onClose }) => {
  const { 
    selectedDate, 
    setSelectedDate, 
    events, 
    setEvents,
    currentMonth,
    setCurrentMonth
  } = useCalendar();
  
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEventDate, setSelectedEventDate] = useState(null);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentMonth(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentMonth(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const isSelectedDate = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const hasEvents = (date) => {
    return events[date.toDateString()] && events[date.toDateString()].length > 0;
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  const addEvent = (date) => {
    setSelectedEventDate(date);
    setShowEventModal(true);
  };

  const handleAddEvent = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const link = event.target.link.value;
    const dateString = selectedEventDate.toDateString();
    setEvents(prevEvents => ({
      ...prevEvents,
      [dateString]: [...(prevEvents[dateString] || []), { title, link }]
    }));
    setShowEventModal(false);
  };

  const EventModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <form onSubmit={handleAddEvent}>
          <input name="title" type="text" placeholder="Event Title" required className="block w-full mb-2 p-2 border rounded" />
          <input name="link" type="url" placeholder="Event Link (optional)" className="block w-full mb-2 p-2 border rounded" />
          <button type="submit" className="bg-red-400 text-white px-4 py-2 rounded">Add Event</button>
          <button type="button" onClick={() => setShowEventModal(false)} className="ml-2 px-4 py-2 rounded border">Cancel</button>
        </form>
      </div>
    </div>
  );

  const EventList = ({ events }) => (
    <div className="absolute z-10 bg-white border rounded shadow-lg p-2" onClick={(e) => e.stopPropagation()}>
      {events.map((event, index) => (
        <div key={index} className="mb-1">
          {event.link ? (
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{event.title}</a>
          ) : (
            <span>{event.title}</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-80">
      <div className="bg-red-400 text-white p-4 rounded-t-lg">
        <div className="flex justify-between items-center mb-2">
          <button onClick={prevMonth} className="text-2xl">&lt;</button>
          <span className='font-semibold'>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
          <button onClick={nextMonth} className="text-2xl">&gt;</button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-2xl font-bold">
            {selectedDate.getDate()}
            <span className="text-2xl font-bold"> {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}</span>
          </div>
          <button
            onClick={goToToday}
            className="bg-white text-red-400 hover:bg-red-100 font-bold py-1 px-3 rounded text-sm transition duration-300"
          >
            Today
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mt-2 text-center">
        {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
          <div key={day} className="text-xs font-semibold">{day}</div>
        ))}
        {[...Array(firstDayOfMonth)].map((_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
          const dateString = date.toDateString();
          const dateEvents = events[dateString] || [];
          return (
            <div
              key={i}
              className={`p-2 cursor-pointer relative group ${
                isSelectedDate(date) ? 'bg-red-400 text-white rounded-full' : ''
              } ${hasEvents(date) ? 'bg-violet-900 text-white rounded-full' : ''}`}
              onClick={() => setSelectedDate(date)}
              onDoubleClick={() => addEvent(date)}
            >
              {i + 1}
              {dateEvents.length > 0 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
              )}
              {dateEvents.length > 0 && (
                <div className="hidden group-hover:block">
                  <EventList events={dateEvents} />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showEventModal && <EventModal />}
      {onClose && (
        <button
          onClick={onClose}
          className="mt-4 bg-red-400 text-white px-4 py-2 rounded w-full"
        >
          Close Calendar
        </button>
      )}
    </div>
  );
};

export default Calendar;
