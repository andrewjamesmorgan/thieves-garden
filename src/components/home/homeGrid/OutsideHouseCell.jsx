import InfoBox from '../../InfoBox';

export default function OutsideHouseCell({action}) {
  const body = (<>
    <h3>Outside the apartment</h3>
    <p>The house backs onto the woods and it's a short walk or cycle through those woods to get to a great beach.</p>
    <p>There is plenty of space to play in the garden and there is a large terrace for dining as well as a first floor solarium off the master bedroom.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/Oleron_Outside_House_1442.jpg"
        alt=""
        action={action}
        route="/outside_house"
        body={body}
    />
  );
}