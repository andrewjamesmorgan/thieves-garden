import InfoBox from '../../InfoBox';

export default function PondHouseCell({action}) {
  const body = (<>
    <h3>Pond House pub</h3>
    <p>The Pond House is just down the road (turn left at the traffic lights).</p>
    <p>It's a friendly local pub with a good selection of beers and a menu of pub classics.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/location/maidenhead-pond-house.jpg"
        alt="The front and beer garden of the Pond House pub"
        action={action}
        body={body}
    />
  );
}