import InsideApartmentCell from './homeGrid/InsideApartmentCell';
import OutsideApartmentCell from './homeGrid/OutsideApartmentCell';
import LocationCell from './homeGrid/LocationCell';
import FacilitiesCell from './homeGrid/FacilitiesCell';
import PricesCell from './homeGrid/Prices';
import BookingCell from './homeGrid/BookingCell';
import ContactCell from './homeGrid/ContactCell';

export default function HomeGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <InsideApartmentCell action={action} />
      <OutsideApartmentCell action={action} />
      <FacilitiesCell action={action} />
    </div>
    <div className='responsive-grid'>
      <LocationCell action={action} />
      <BookingCell action={action} />
      <PricesCell action={action} />
    </div>
    <div className='responsive-grid'>
      <ContactCell action={action} />
    </div>
  </>
  );
}