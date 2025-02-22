import { useState } from "react";
import BookingsIntro from "./BookingsIntro";
import BookingForm from "./BookingForm";
import AdminBookingForm from "./admin/AdminBookingForm";
import Calendar from './Calendar';

export default function BookingsContent() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const username = localStorage.getItem("tg-username");
  const password = localStorage.getItem("tg-password");
  const isAdmin = username && password;

  return (
    <div className='space-above'>
      <BookingsIntro />
      <Calendar selectBooking={setSelectedBooking}/>
      {isAdmin ? (
        <AdminBookingForm booking={selectedBooking} />
      ) : (
        <BookingForm/> 
      )}
    </div>
  );
}