import React from "react";
import {Helmet} from "react-helmet";

// TODO: Update meta data

export default function ContactHeadFR() {
  return (
    <>
      <Helmet>
        <html lang="fr" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Découvrez notre location de vacances sur l'Île d'Oléron. Profitez d'un séjour inoubliable dans une maison confortable à proximité des plages, des pistes cyclables et des attractions locales. Réservez dès maintenant!"
        />
        <meta
          name="keywords"
          content="location de vacances, Île d'Oléron, maison de vacances, plages, séjour en France, hébergement, Oléron"
        />
        <meta name="author" content="Nom de l'Entreprise" />
        <meta name="robots" content="index, follow" />

        <title>Location de Vacances sur l'Île d'Oléron | Maison de Vacances</title>

        <link rel="stylesheet" href="styles.css" /> {/* Replace with your CSS file path */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" /> {/* Replace with your favicon path */}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Location de Vacances sur l'Île d'Oléron" />
        <meta
          property="og:description"
          content="Profitez d'un séjour inoubliable sur l'Île d'Oléron dans notre maison de vacances. À quelques pas des plages et des attractions locales. Réservez maintenant!"
        />
        <meta property="og:image" content="https://oleronvilla.com/Oleron_Villa_OG.jpg" />
        <meta property="og:url" content="http://oleronvilla.com/#/contact-fr" /> {/* Replace with your site URL */}
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Location de Vacances sur l'Île d'Oléron" />
        <meta
          name="twitter:description"
          content="Profitez d'un séjour inoubliable sur l'Île d'Oléron dans notre maison de vacances. À quelques pas des plages et des attractions locales. Réservez maintenant!"
        />
      </Helmet>
    </>
  );
}