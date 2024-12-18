import InfoBox from '../../InfoBox';

export default function PricesCell({action}) {
  const body = (<>
    <h3>Prices</h3>
    <p>Prices are per-week, with discounts for longer stays.</p>
  </>);

  return (
    <InfoBox 
        imageSrc="../../images/prices/maidenhead-apartment-prices.jpg"
        alt="Rental prices, show on a calendar/cash register"
        action={action}
        route="/prices"
        body={body}
    />
  );
}