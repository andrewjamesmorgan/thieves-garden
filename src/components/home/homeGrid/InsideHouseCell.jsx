import InfoBox from '../../InfoBox';

export default function InsideHouseCell({action}) {
  const body = (<>
    <h3>Inside the apartment</h3>
    <p>The house is laid out over two floors. There are four bedrooms (can sleep up to 13 people) - two of which have en-suite bathrooms. The ground floor is dominated by the large open plan kitchen, dining area and lounge.</p>
    <p>The decoration and furnishings are comfortable and modern.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/inside/Oleron_Lounge_1900.jpg"
        alt=""
        action={action}
        route="/inside_house"
        body={body}
    />
  );
}