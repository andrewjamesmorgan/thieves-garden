import InfoBox from '../../InfoBox';

export default function InsideApartmentCell({action}) {
  const body = (<>
    <h3>Inside the apartment</h3>
    <p>The apartment is laid out over two floors.</p>
    <p>Downstairs is a large lounge/bedroom with a double bed and a sofa bed. Upstairs is the kitchen, bathroom, and dining/study area.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/inside/maidenhead-lounge-bed.jpeg"
        alt=""
        action={action}
        route="/inside_apartment"
        body={body}
    />
  );
}