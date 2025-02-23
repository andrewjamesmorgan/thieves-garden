import React, { useState, useEffect } from "react";
import { config } from '../../config';
import BookingsIntro from "./BookingsIntro";
import BookingForm from "./BookingForm";
import AdminBookingForm from "./admin/AdminBookingForm";
import Calendar from './Calendar';

function checkBooking(date, bookingData) {
  let dayBooking = { status: 'available'};
  bookingData.forEach((booking) => {
    if (date >= new Date(booking.startDate) && date < new Date(booking.endDate)) {
      dayBooking = booking;
    }
  });
  return dayBooking;
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
          const date = new Date(Date.UTC(year, month, 1));

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

async function fetchBookings() {
  const username = localStorage.getItem("tg-username");
  const password = localStorage.getItem("tg-password");
  const isAdmin = username && password;
  const url = isAdmin ? config.getBookingsDetailsURL : config.getbookingsURL;
  if (isAdmin) {
    const body = {
      username,
      password
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
      });
      const data = await response.json();
      if (response.status === 200) {
        console.log("Fetched full bookings:", data);
        return data.bookings ? data.bookings : []; 
      } else {
        console.error(`Failed to fetch full bookings: ${data.message}`);
        return [];
      }
    } catch (error) {
      console.error(`Failed to fetch full bookings: ${error.message}`);
      return [];
    }
  } else {
    try {
      console.log(`Fetching bookings from ${config.getbookingsURL}`);
      const response = await fetch(config.getbookingsURL);
      const data = await response.json();
      if (response.status === 200) {
        console.log("Fetched bookings:", data);
        return data.bookings ? data.bookings : [];
      } else {
        console.error(`Failed to fetch bookings: ${data.message}`);
        return [];
      }
    } catch (error) {
      console.error(`Failed to fetch bookings: ${error.message}`);
      return [];
    }
  }
}

export default function BookingsContent() {
  const [calendarData, setCalendarData] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);
  
  const username = localStorage.getItem("tg-username");
  const password = localStorage.getItem("tg-password");
  const isAdmin = username && password;

  const fetchData = async () => {
    console.log("Fetching data...");
    const bookings = await fetchBookings();
    // Check that it includes the info that only admins see
    if (bookings && bookings.length > 0 && 
      bookings[0].property === 'Thieves Garden') {
      setBookingDetails(bookings);
    }
    const years = config.calendarYears;
    const data = generateCalendarData(years, bookings);
    console.log("Generated YearData");
    setCalendarData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='space-above'>
      <BookingsIntro />
      <Calendar 
        calendarData={calendarData}
        bookingDetails={bookingDetails}
        selectBooking={setSelectedBooking}
      />
      {isAdmin ? (
        <AdminBookingForm 
          booking={selectedBooking} 
          refresh={fetchData}
        />
      ) : (
        <BookingForm/> 
      )}
    </div>
  );
}