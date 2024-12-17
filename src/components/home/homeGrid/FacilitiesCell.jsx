import InfoBox from '../../InfoBox';

export default function FacilitiesCell({action}) {

  const body = (<>
    <h3>Facilities & services</h3>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/oleron_tv_1900.jpg"
        alt=""
        action={action}
        route="/facilities"
        body={body}
    />
  );
}