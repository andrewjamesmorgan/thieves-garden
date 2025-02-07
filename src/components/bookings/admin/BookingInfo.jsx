export default function BookingInfo({ booking }) {
  function formatDate(dateString) {
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  }
  
  function bookingStatus() {
    if (new Date(booking.startDate) > new Date()) {
      return 'future';
    }
    if (new Date(booking.endDate) < new Date()) {
      return 'past';
    }
    return 'present';
  }

  return (
    <>
      <div id='booking-info' className={`booking-info ${bookingStatus()}`}>
        <p><b>{formatDate(booking.startDate)} → {formatDate(booking.endDate)}</b></p>
        <p>
          {booking.booking && booking.booking.name && <span>{booking.booking.name}</span>}
          {booking.booking && booking.booking.source && <span> ({booking.booking.source})</span>}
        </p>
        {booking.comments && <p><i>{booking.comments}</i></p>}
      </div>
    </>
  );
}