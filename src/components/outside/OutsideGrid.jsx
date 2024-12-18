import TerraceCell from "./outsideGrid/TerraceCell";
import ParkingCell from "./outsideGrid/ParkingCell";
import LaundryCell from "../inside/insideGrid/LaundryCell";

export default function InsideGrid({action}) {
  return (
    <>
    <div className='responsive-grid'>
      <TerraceCell action={action} />
      <LaundryCell action={action} />
      <ParkingCell action={action} />
    </div>
    <div className='responsive-grid'>
    </div>
  </>
  );
}