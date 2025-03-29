import InfoBox from '../../InfoBox';

export default function ParkingCell({action}) {

  const body = (<>
    <h3>Parking</h3>
    <p>There is plenty of un-restricted, free on-street parking (no yellow lines).</p>
    <p>Areas with a yellow line should not be parked on from 7:00 to 9:00 on weekday mornings.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/maidenhead-parking.jpg"
        alt="Wide, tree-lined street with lots of free parking spaces on either side."
        action={action}
        body={body}
    />
  );
}