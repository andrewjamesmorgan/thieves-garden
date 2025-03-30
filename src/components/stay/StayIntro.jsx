import BookNow from "../buttons/BookNow";

export default function StayIntro() {
  return (
    <>
      <div id='stay-intro' className='banner-image-text'>
        <h1>During your stay</h1>
        <img
          src="../../images/facilities/maidenhead-facilities-wide.jpg"
          alt="Nothing too useful. Mix of TV, WiFi, parking, cooking. cleaning, etc."
          className='full-width-image'
        />  
      </div>
      <div className='responsive-text'>
        <h2>Everything you need for a comfortable stay</h2>
        <p>Our aim is to provide everything you need during your stay, all included in the headline price.</p>
        <p>That includes WiFi, streaming TV, somewhere to cook, linen and cleaning, parking, ...</p>
      </div>
      <BookNow />
    </>
  );
}