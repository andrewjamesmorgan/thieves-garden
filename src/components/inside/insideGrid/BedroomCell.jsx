import InfoBox from '../../InfoBox';

export default function BedroomCell({action}) {

  const body = (<>
    <h3>Bedroom</h3>
    <p>Double bed. Sheets changed weekly.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/maidenhead-bedroom.jpg"
        alt="Double bed and TV"
        action={action}
        body={body}
        centerX = {100}
        centerY = {60}
    />
  );
}