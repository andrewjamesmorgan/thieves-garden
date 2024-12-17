export default function BookingsIntro() {
  return (
    <>
      <div id='bookings-intro' className='banner-image-text'>
        <h1>Booking the apartment</h1>
        <img
          src="../../images/booking/maidenhead-booking.png"
          alt="A couple circling dates on a calendar. 2 suitcases."
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Check availability, select which weeks you're interested in booking, add your details, and then submit the form. We'll get in touch with you as soon as possible to answer any questions and confirm the booking.</h2>
      </div>
    </>
  );
}