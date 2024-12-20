import InfoBox from '../../InfoBox';

export default function AVCell({action}) {
  const body = (<>
    <h3>TV</h3>
    <p>In the lounge/bedroom, there's a television.</p>
    <p>You have access to free-to-air satelite channels, as well as several streaming services such as Netflix.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-tv.png"
        alt="TV, satelite dish, remote control and Netflix logo"
        action={action}
        body={body}
    />
  );
}