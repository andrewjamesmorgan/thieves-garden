import { useState, useEffect } from 'react';
import InsideApartmentCell from './homeGrid/InsideApartmentCell';
import OutsideApartmentCell from './homeGrid/OutsideApartmentCell';
import LocationCell from './homeGrid/LocationCell';
import FacilitiesCell from './homeGrid/FacilitiesCell';
import PricesCell from './homeGrid/Prices';
import BookingCell from './homeGrid/BookingCell';
import ContactCell from './homeGrid/ContactCell';
import StayCell from './homeGrid/StayCell';

export default function HomeGrid({action}) {
  const [tgTenant] = useState(localStorage.getItem("tg-tenant"));
  const [isTenant, setIsTenant] = useState(false);
  
  useEffect(() => {
    setIsTenant(tgTenant === "true");
  }, [tgTenant]);

  return (
  <>
    <div className='responsive-grid'>
      <InsideApartmentCell action={action} />
      <OutsideApartmentCell action={action} />
      <LocationCell action={action} />
      {isTenant && <StayCell action={action} />}
    </div>
    <div className='responsive-grid'>
      <FacilitiesCell action={action} />
      <BookingCell action={action} />
      <PricesCell action={action} />
      <ContactCell action={action} />
    </div>
  </>
  );
}