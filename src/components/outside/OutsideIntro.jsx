export default function OutsideIntro() {
  return (
    <>
      <div id='outside-intro' className='banner-image-text'>
        <h1>Outside the apartment</h1>
        <img
          src="../../images/outside/maidenhead-apartment.jpeg"
          alt="Brick 2-floor building, sat amongst a garden. Terrace and picnic bench in the foreground"
          className='full-width-image'
        />
      </div>
      <div className='responsive-text'>
        <h2>What's available outside the apartment</h2> 
        <p>Outdoor dining on your terrace, shared laundry, and plenty of on-street parking.</p>
      </div>
    </>
  );
}