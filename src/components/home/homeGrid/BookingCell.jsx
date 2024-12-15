import InfoBox from '../../InfoBox';

export default function BookingCell({action}) {

  const alt = 'A couple circling dates on a calendar. 2 suitcases.';
  const body = `
    <h3>Availability & bookings</h3>
    <p>See the current availability and prices - if you find what you need then use the on-line form to submit a booking request.</p>
  `;


  return (
    <InfoBox 
        imageSrc="../../images/booking/maidenhead-booking.png"
        alt={alt}
        action={action}
        route="/bookings"
        body={body}
    />
  );
}