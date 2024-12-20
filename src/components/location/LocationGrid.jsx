import StationCell from "./locationGrid/StationCell";
import TescoCell from "./locationGrid/TescoCell";
import PondHouseCell from "./locationGrid/PondHouseCell";
import WindsorCastleCell from "./locationGrid/WindsorCastleCell";

export default function LocationGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <StationCell action={action} />
      <TescoCell action={action} />
      <PondHouseCell action={action} />
      <WindsorCastleCell action={action} />
    </div>
  </>
  );
}