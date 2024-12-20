import StationCell from "./locationGrid/StationCell";

export default function LocationGrid({action}) {
  return (
  <>
    <div className='responsive-grid'>
      <StationCell action={action} />
    </div>
  </>
  );
}