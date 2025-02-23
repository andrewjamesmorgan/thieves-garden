import React, { useState, useEffect } from 'react';
import CalendarFull from './CalendarFull';
import CalendarMobile from './CalendarMobile';
import BookingsInfo from './admin/BookingsInfo';

function Calendar({calendarData, bookingDetails, selectBooking}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceWidth = () => {
      setIsMobile(window.innerWidth <= 1400); 
    };

    updateDeviceWidth();
    window.addEventListener('resize', updateDeviceWidth); // Update on resize

    return () => window.removeEventListener('resize', updateDeviceWidth); // Cleanup
  }, []);
  
  return (
    <div>
      {isMobile ? (
        <CalendarMobile calendar={calendarData} />
      ) : (
        <CalendarFull calendar={calendarData} />
      )}
      {bookingDetails && <BookingsInfo
        bookings={bookingDetails} 
        selectBooking={selectBooking}
      />}
    </div>
  );
}

export default Calendar;