import WifiCell from "./facilitiesGrid/WifiCell";
import AVCell from "./facilitiesGrid/AVCell";
import CleaningCell from "./facilitiesGrid/CleaningCell";
import BathroomCell from "../inside/insideGrid/BathroomCell";
import KitchenCell from "../inside/insideGrid/KitchenCell";
import ParkingCell from "../outside/outsideGrid/ParkingCell";
import HeatingCell from "./facilitiesGrid/HeatingCell";
import LaundryCell from "../inside/insideGrid/LaundryCell";

export default function FacilitiesGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <BathroomCell action={action} />
      <KitchenCell action={action} />
      <WifiCell action={action} />
      <AVCell action={action} />
    </div>
    <div className='responsive-grid'>
      <ParkingCell action={action} />
      <HeatingCell action={action} />
      <CleaningCell action={action} />
      <LaundryCell action={action} />
    </div>    
  </>
  );
}