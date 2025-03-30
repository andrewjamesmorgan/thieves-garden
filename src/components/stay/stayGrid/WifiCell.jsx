import InfoBox from '../../InfoBox';

export default function WifiCell({action}) {
  const body = (<>
    <h3>Internet</h3>
    <p>The apartment has fast internet - wired and wireless (WiFi).</p>
    </>);

  return (
    <InfoBox 
        imageSrc="../../images/facilities/maidenhead-wifi.jpg"
        alt="Wifi symbols"
        action={action}
        body={body}
    />
  );
}