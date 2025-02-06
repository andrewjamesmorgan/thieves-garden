import React, { useState, useEffect } from 'react';
import CalendarFull from './CalendarFull';
import CalendarMobile from './CalendarMobile';
import { config } from '../../config';

function checkBooking(date, bookingData) {
  let status = 'available';
  bookingData.forEach((booking) => {
    if (date >= new Date(booking.startDate) && date < new Date(booking.endDate)) {
      status = booking.status;
    }
  });
  return status;
}

async function fetchBookings() {
  const response = await fetch(config.getBookingURL);
  const data = await response.json();
  console.log("Fetched bookings:", data); // Log the fetched data
  return data.bookings ? data.bookings : [];
}

function generateCalendarData(years, bookingData) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return years.map(year => {
    const today = new Date();
    if (year >= today.getFullYear()) {
      const months = [];
      
      for (let month = 0; month < 12; month++) {
        if (year > today.getFullYear() || 
            (year === today.getFullYear() && month >= today.getMonth())) {
          const days = [];
          const date = new Date(year, month, 1);

          // Add filler days for the first week
          for (let fillerDay = date.getDay(); fillerDay > 0; fillerDay--) {
            days.push({
              dayOfMonth: 1 - fillerDay,
              status: "filler"
            });
          }

          // Add actual days of the month
          while (date.getMonth() === month) {
            days.push({
              dayOfMonth: date.getDate(),
              dayOfWeek: date.getDay(),
              status: checkBooking(date, bookingData)
            });
            date.setDate(date.getDate() + 1);
          }

          months.push({
            monthName: monthNames[month],
            days
          });
        }
      }

      return {
        year,
        months
      };
    }
    return null;
  }).filter(yearData => yearData !== null);
}

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceWidth = () => {
      setIsMobile(window.innerWidth <= 1400); 
    };

    updateDeviceWidth();
    window.addEventListener('resize', updateDeviceWidth); // Update on resize

    return () => window.removeEventListener('resize', updateDeviceWidth); // Cleanup
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const bookings = await fetchBookings();
      const years = config.calendarYears;
      console.log("Running useEffect");
      const data = generateCalendarData(years, bookings);
      console.log("Generated YearData");
      setCalendarData(data);
    };

    fetchData();
  }, []);
  
  return (
    <div>
      {isMobile ? (
        <CalendarMobile calendar={calendarData} />
      ) : (
        <CalendarFull calendar={calendarData} />
      )}
    </div>
  );
}

export default Calendar;