import InfoBox from '../../InfoBox';

export default function LocationCell({ action }) {
  const body = (
    <>
      <h3>Location</h3>
      <p>See where Thieves Garden and Maidenhead are located.</p>
      <p>
        There are plenty of facilities close to the apartment, and Maidenhead
        station and town center are less than 20 minutes walk.
      </p>
    </>
  );

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