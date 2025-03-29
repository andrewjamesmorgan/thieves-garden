import InfoBox from '../../InfoBox';

export default function BathroomCell({action}) {

  const body = (<>
    <h3>Bathroom</h3>
    <p>The bathroom contains a shower, toilet and sink.</p>
    <p>Clean towels are provided weekly.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/bathroom/maidenhead-bathroom.jpg"
        alt="Bathroom with white walls and blue and white tiles on the wall. Shower, toilet and wash baisin. Window reflected in a mirror."
        action={action}
        body={body}
    />
  );
}