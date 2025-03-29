import InfoBox from '../../InfoBox';

export default function HeatingCell({action}) {
  const body = (<>
    <h3>Cleaning</h3>
    <p>The apartment is cleaned between each tenant, and on each Tuesday.</p>
    <p>Clean bedding and towels are provided every week.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-cleaner.jpg"
        alt="Cartoon cleaner mopping the floor"
        action={action}
        body={body}
    />
  );
}