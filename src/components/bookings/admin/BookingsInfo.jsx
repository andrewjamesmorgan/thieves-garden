import BookingInfo from "./BookingInfo";

export default function BookingsInfo({bookings}) {
  return (
    <>
      <div id='bookings-info' className='bookings-info'>
        <h1>Bookings Info</h1>
      </div>
      <div className='responsive-text'>
        <div className='responsive-grid'>
          {bookings.map((booking, index) => (
            <BookingInfo key={index} booking={booking} />
          ))}
          </div>
      </div>
    </>
  );
}