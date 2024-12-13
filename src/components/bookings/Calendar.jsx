import React, { useState, useEffect } from 'react';
import CalendarFull from './CalendarFull';
import CalendarMobile from './CalendarMobile';
import { config } from '../../config';
import { bookingData } from '../../data/bookingData';

function checkBooking(date) {
  let status = 'available';
  bookingData.forEach ((booking) => {
    if (date >= booking.startDate && date < booking.endDate) {
      status = booking.status;
    }
  });
  return status;
}

function generateCalendarData(years) {
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
              status: checkBooking(date),
            });
            date.setDate(date.getDate() + 1);
          }

          // Add filler days for the last week
          for (let fillerDay = days.length; fillerDay < 37; fillerDay++) {
            days.push({
              dayOfMonth: fillerDay + 1,
              status: "filler"
            });
          }

          // Add the month object with its name and days
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
    } else {
      return [];
    }
  }).filter(Boolean); // Remove any undefined values (years before the current year)
}

export default function Calendar() {
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
      const years = config.calendarYears;
      console.log("Running useEffect");
      const data = generateCalendarData(years);
      console.log("Generated YearData");
      setCalendarData(data);
  }, []);
  
  return(
    <div>
      {isMobile ? (
          <CalendarMobile calendar={calendarData} />
      ) : (
          <CalendarFull calendar={calendarData} />
      )}
    </div>
  )
}