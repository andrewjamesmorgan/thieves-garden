import BookingInfo from "./BookingInfo";

export default function BookingsInfo({bookings, selectBooking}) {
  return (
    <>
      <div id='bookings-info' className='bookings-info'>
        <h1>Existing Bookings</h1>
      </div>
      <div className='responsive-text'>
        <div className='responsive-grid'>
          {bookings.map((booking, index) => (
            <div 
              onClick={() => selectBooking(booking)}
              key={index}
            >  
              <BookingInfo key={index} booking={booking} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}