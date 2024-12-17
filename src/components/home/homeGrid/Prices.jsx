import InfoBox from '../../InfoBox';

export default function PricesCell({action}) {
  const body = (<>
    <h3>Prices</h3>
    <p>Prices are per-week, with discounts for longer stays.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/prices/maidenhead-prices.png"
        alt="An abstract image showing rental prices, with a beige landscape in the background"
        action={action}
        route="/prices"
        body={body}
    />
  );
}