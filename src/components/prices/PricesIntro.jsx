export default function PricesIntro() {
  return (
    <>
      <div id='prices-intro' className='banner-image-text'>
        <h1>Rental prices</h1>
        <img
          src="../../images/prices/maidenhead-apartment-prices-wide.png"
          alt="Rental prices, show on a calendar/cash register"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Rental prices are per-week, with discounts for longer stays.</h2>
      </div>
    </>
  );
}