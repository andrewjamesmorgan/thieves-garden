export default function PricesIntro() {
  return (
    <>
      <div id='prices-intro' className='banner-image-text'>
        <h1>Rental prices</h1>
        <img
          src="../../images/prices/maidenhead-prices.png"
          alt="Rental prices, with a beige landscape in the background"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Rental prices are per-week, with discounts for longer stays.</h2>
      </div>
    </>
  );
}