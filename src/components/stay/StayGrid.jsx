import WifiCell from "./stayGrid/WifiCell";
import CleaningCell from "./stayGrid/CleaningCell";
import HotWaterCell from "./stayGrid/HotWaterCell";
import ParkingCell from "./stayGrid/ParkingCell";
import HeatingCell from "./stayGrid/HeatingCell";
import LaundryCell from "./stayGrid/LaundryCell";
import BinsCell from "./stayGrid/BinsCell";
import StationCell from "../location/locationGrid/StationCell";
import PondHouseCell from "../location/locationGrid/PondHouseCell";
import WindsorCastleCell from "../location/locationGrid/WindsorCastleCell";
import TescoCell from "../location/locationGrid/TescoCell";
import DehumidifierCell from "./stayGrid/DehumidifierCell";

export default function StayGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <WifiCell action={action} />
      <HeatingCell action={action} />
      <HotWaterCell action={action} />
      <BinsCell action={action} />
    </div>
    <div className='responsive-grid'>
      <DehumidifierCell action={action} />
      <ParkingCell action={action} />
      <CleaningCell action={action} />
      <LaundryCell action={action} />
    </div>
    <div className='responsive-grid'>
      <StationCell action={action} />
      <PondHouseCell action={action} />
      <WindsorCastleCell action={action} />
      <TescoCell action={action} />
    </div>
  </>
  );
}