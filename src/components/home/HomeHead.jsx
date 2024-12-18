import React from "react";
import { Helmet } from "react-helmet";

export default function HomeHead() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Thieves Garden. Self-catered/services apartment in Maidenhead, Berkshire."
        />
        <meta
          name="keywords"
          content="Maidenhead, Thieves Garden, apartment, rental, serviced, flat, Berkshire"
        />
        <meta name="author" content="Andrew Morgan" />
        <meta name="robots" content="index, follow" />

        <title>Thieves Garden - serviced apartmet in Maidenhead</title>

        <link rel="stylesheet" href="styles.css" /> 
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> 

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thieves Garden - serviced apartmet in Maidenhead" />
        <meta
          property="og:description"
          content="Discover Thieves Garden, a serviced apartment in Maidenhead"
        />
        <meta property="og:image" content="https://thievesgarden.co.uk/maidenhead-apartment-OG.jpeg" />
        <meta property="og:url" content="https://thievesgarden.co.uk" /> 
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thieves Garden, a serviced apartment in Maidenhead" />
        <meta
          name="twitter:description"
          content="Discover Thieves Garden, a serviced apartment in Maidenhead."
        />
      </Helmet>
    </>
  );
}