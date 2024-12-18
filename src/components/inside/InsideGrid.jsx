import LoungeCell from './insideGrid/LoungeCell';
import BedroomCell from './insideGrid/BedroomCell';
import KitchenCell from './insideGrid/KitchenCell';
import BathroomCell from './insideGrid/BathroomCell';
import DiningCell from './insideGrid/DiningCell';
import LaundryCell from './insideGrid/LaundryCell';

export default function InsideGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <LoungeCell action={action} />
      <BedroomCell action={action} />
      <KitchenCell action={action} />
    </div>
    <div className='responsive-grid'>
      <BathroomCell action={action} />
      <DiningCell action={action} />
      <LaundryCell action={action} />
    </div>
  </>
  );
}