import InfoBox from '../../InfoBox';

export default function FacilitiesCell({action}) {

  const body = (<>
    <h3>Facilities & services</h3>
    <p>Learn about what's facilities are available in the apartment, what services to expect, and where to park.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-facilities.png"
        alt=""
        action={action}
        route="/facilities"
        body={body}
    />
  );
}