import { useState } from "react";
import BookingsInfo from "./BookingsInfo";
import BookingForm from "./BookingForm";

// TODO: Complete this and use from Calendar.jsx
export default function AdminBooking({bookings, refresh}) {
  const [bookingId, setBookingId] = useState(null);

  return (
    <>
      <BookingsInfo 
        bookings={bookings}
        pickBookingId={setBookingId}
      />
      <BookingForm 
        bookingId={bookingId} 
        refresh={refresh}
      />
    </>
  );
}