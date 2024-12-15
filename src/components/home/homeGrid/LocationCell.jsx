import InfoBox from '../../InfoBox';

export default function LocationCell({action}) {

  const body = `
    <h3>Location</h3>
    <p>See where Thieves Garden and Maidenhead are located.</p>
  `;
  
  return (
    <InfoBox 
        imageSrc="../../images/location/maidenhead-map.png"
        alt="Map with Maidenhead in the center. Reading to the west, London to the east"
        action={action}
        route="/location"
        body={body}
    />
  );
}