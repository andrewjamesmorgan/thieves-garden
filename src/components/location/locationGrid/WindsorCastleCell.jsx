import InfoBox from '../../InfoBox';

export default function WindsorCastleCell({action}) {
  const body = (<>
    <h3>Windsor Castle pub</h3>
    <p>The Windsor Castl is just down the road (turn right at the traffic lights).</p>
    <p>This is a good option if your looking for more of a gastro-pub.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/location/maidenhead-windsor-castle.jpg"
        alt="The front and beer garden of the Windsor Castle pub"
        action={action}
        body={body}
    />
  );
}