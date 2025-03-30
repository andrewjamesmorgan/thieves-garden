import React from "react";
import { Helmet } from "react-helmet";

export default function FacilitiesHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Explore the facilities available at Thieves Garden, a serviced apartment in Maidenhead. Enjoy amenities such as TV, Wi-Fi, a fully equipped kitchen, shower, cleaner, bed linen, and laundry services."
        />
        <meta
          name="keywords"
          content="Thieves Garden, facilities, TV, Wi-Fi, kitchen, shower, cleaner, bed linen, laundry, serviced apartment, Maidenhead, Berkshire"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Facilities at Thieves Garden - Serviced Apartment in Maidenhead</title>
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Facilities at Thieves Garden - Serviced Apartment in Maidenhead" />
        <meta
          property="og:description"
          content="Discover the facilities at Thieves Garden, a serviced apartment in Maidenhead. Enjoy amenities such as TV, Wi-Fi, a fully equipped kitchen, shower, cleaner, bed linen, and laundry services."
        />
        <meta property="og:image" content="https://thievesgarden.co.uk/facilities-OG.jpg" />
        <meta property="og:url" content="https://thievesgarden.co.uk/#/facilities" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facilities at Thieves Garden - Serviced Apartment in Maidenhead" />
        <meta
          name="twitter:description"
          content="Learn about the facilities at Thieves Garden, including TV, Wi-Fi, kitchen, shower, cleaner, bed linen, and laundry services."
        />
        <meta name="twitter:image" content="https://thievesgarden.co.uk/facilities-OG.jpg" />
      </Helmet>
    </>
  );
}