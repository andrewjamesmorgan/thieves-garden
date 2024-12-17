import InsideHouseCell from './homeGrid/InsideHouseCell';
import OutsideHouseCell from './homeGrid/OutsideHouseCell';
import LocationCell from './homeGrid/LocationCell';
import FacilitiesCell from './homeGrid/FacilitiesCell';
import PricesCell from './homeGrid/Prices';
import BookingCell from './homeGrid/BookingCell';
import ContactCell from './homeGrid/ContactCell';

export default function HomeGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <InsideHouseCell action={action} />
      <OutsideHouseCell action={action} />
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