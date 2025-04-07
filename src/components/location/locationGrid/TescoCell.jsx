import InfoBox from '../../InfoBox';

export default function TescoCell({action}) {
  const body = (<>
    <h3>Supermarket</h3>
    <p>There's a Tesco Metro just a couple of minutes' walk away.</p>
    <p>It's open 7am to 10pm Monday through Saturday, and from 8am to 10pm on Sundays.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/location/maidenhead-tesco.jpg"
        alt="The entrance to Tesco Metro"
        action={action}
        body={body}
        centerX = {30}
        centerY = {50}
    />
  );
}