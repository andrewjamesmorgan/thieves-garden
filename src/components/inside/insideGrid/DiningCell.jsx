import InfoBox from '../../InfoBox';

export default function DiningCell({action}) {

  const body = (<>
    <h3>Dining/study area</h3>
    <p>The dining room/study is at the top of the stairs.</p>
    <p>There's a dining/work table and four chairs.</p>
    </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/dining/maidenhead-dining-study.jpg"
        alt="Light room, lit by daylight through the window and an overhead lamp. Glass-topped table and four chairs. A pair of pictures are hanging from the wall."
        action={action}
        body={body}
    />
  );
}