import BookNow from "../buttons/BookNow";

export default function LocationIntro() {
  return (
    <>
      <div id='contact-intro' className='banner-image-text'>
        <h1>Location</h1>
        <img
          src="../../images/location/maidenhead-sat-view.png"
          alt="Satelit immage showing Thieves Garden on Boyn Hill Road"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>Where to find Thieves Garden</h2>
        <p>Thieves Garden is located in a quiet area, on the western side of Maidenhead.</p>
      </div>
      <BookNow />
    </>
  );
}