import InfoBox from '../../InfoBox';

export default function HeatingCell({action}) {
  const body = (<>
    <h3>Central heating</h3>
    <p>The apartment is heated by a dedicated gas boiler.</p>
    <p>You have control over the temperature from your own smart thermostat. Let us know if you'd like use to set up a heating schedule.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-heating.png"
        alt="Abstract arrangement, including a radiator"
        action={action}
        body={body}
    />
  );
}