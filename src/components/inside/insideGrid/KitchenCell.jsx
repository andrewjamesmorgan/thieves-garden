import InfoBox from '../../InfoBox';

export default function KitchenCell({action}) {
  const body = (<>
    <h3>Kitchen</h3>
    <p>The kitchen includes an oven, hob, microwave, fridge-freezer, kettle, and sink.</p>
    <p>Cooking utensils, crockery, and cutlery are all provided.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/inside/maidenhead-kitchen.jpeg"
        alt="kitchen containing oven, fridge-freezer, sink, microwave and kettle"
        action={action}
        body={body}
    />
  );
}