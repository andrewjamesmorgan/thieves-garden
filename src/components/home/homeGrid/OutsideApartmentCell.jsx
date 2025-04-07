import InfoBox from '../../InfoBox';

export default function OutsideApartmentCell({action}) {
  const body = (<>
    <h3>Outside the apartment</h3>
    <p>The apartment is set in our house's garden. It's below street level, and so it's nice and quiet.</p>
    <p>You have your own terrace area with table and benches.</p>
    <p>There's plenty of free on-street parking available.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/maidenhead-terrace.jpg"
        alt=""
        action={action}
        route="/outside_apartment"
        body={body}
        centerX = {40}
        centerY = {50}
    />
  );
}