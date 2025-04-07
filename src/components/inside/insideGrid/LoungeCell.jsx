import InfoBox from '../../InfoBox';

export default function LoungeCell({action}) {

  const body = (<>
    <h3>Lounge</h3>
    <p>The lounge has a sofa bed and TV - complete with satelite channels and on-demand streaming.</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/maidenhead-lounge.jpg"
        alt="Beige sofa with cushoins. Coffee table. TV. Stairs leading upstairs."
        action={action}
        body={body}
        centerX = {30}
        centerY = {60}
    />
  );
}