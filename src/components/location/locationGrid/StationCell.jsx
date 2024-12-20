import InfoBox from '../../InfoBox';

export default function StationCell({action}) {
  const body = (<>
    <h3>Maidenhead Station and down</h3>
    <p>It's about 15 minutes' walk from the train station and the town center.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/location/maidenhead-train-station.jpg"
        alt="The front entrance of Maidenhead train station"
        action={action}
        body={body}
    />
  );
}