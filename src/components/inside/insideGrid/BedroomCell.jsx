import InfoBox from '../../InfoBox';

export default function BedroomCell({action}) {

  const body = (<>
    <h3>Bedroom</h3>
    <p>Double bed. Sheets changed weekly.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/maidenhead-bedroom.jpeg"
        alt="Double bed and TV"
        action={action}
        body={body}
    />
  );
}