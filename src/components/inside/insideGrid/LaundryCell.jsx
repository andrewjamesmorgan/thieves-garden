import InfoBox from '../../InfoBox';

export default function LaundryCell({action}) {

  const body = (<>
    <h3>Laundry</h3>
    <p>This is the one room which you'll share with the our house. The laundry is at the back of the  garage, and you enter it through thise side door.</p>
    <p>There's a washing machine, drier and a clothes airer.</p>  
    <p>In the summer, there's a washing line in the  garden which you're welcome to use.</p>
  </>);
  
  return (
    <InfoBox 
        imageSrc="../../images/laundry/maidenhead-laundry.jpeg"
        alt="Black door, halfway up some outdoor steps."
        action={action}
        body={body}
    />
  );
}