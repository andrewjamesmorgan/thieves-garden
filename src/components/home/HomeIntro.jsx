import BookNow from "../buttons/BookNow";

export default function HomeIntro() {
  return (
    <>
      <div id='home-intro' className='banner-image-text'>
        <h1>Thieves Garden</h1>
        <img
          src="../../images/outside/maidenhead-apartment.jpeg"
          alt=""
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Welcome to Thieves Garden – a serviced apartment in Maidenhead, Berkshire</h2>
        <div>
          <p>Thieves Garden provides well equipped accommodation for anyone looking rooms to rent in Maidenhead. Ideal for those visiting the region who are looking for the comfort of a hotel but with the extra space and independence of a self-catering apartment - without the need for long term contracts or utility bills.</p>
          <p>You will be staying in a detached building with a private entrance, but with the advantage of the proprietors living right next door.</p>
          <p>We offer  flexible letting terms so we're ideal if you're looking to buy a new home and need somewhere to stay that doesn't insist on long notice periods.</p>
        </div>
      </div>
      <BookNow />
    </>
  );
}