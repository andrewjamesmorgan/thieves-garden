import BookNow from "../buttons/BookNow";

export default function FacilitiesIntro() {
  return (
    <>
      <div id='facilities-intro' className='banner-image-text'>
        <h1>Facilities & Services</h1>
        <img
          src="../../images/facilities/maidenhead-facilities-wide.png"
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