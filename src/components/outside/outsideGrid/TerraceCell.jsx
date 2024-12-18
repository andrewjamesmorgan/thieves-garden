import InfoBox from '../../InfoBox';

export default function TerraceCell({action}) {

  const body = (<>
    <h3>Outdoor dining</h3>
    <p>The apartment comes with a terrace and picnic table.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/outside/maidenhead-terrace.jpeg"
        alt="Outdoor terrace with picnic table."
        action={action}
        body={body}
    />
  );
}