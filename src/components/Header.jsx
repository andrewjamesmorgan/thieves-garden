import { useContext, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { UserContext } from '../App';
import '../css/topnav.css';
import LanguageButton from "./buttons/LanguageButton";

export default function Header() {
  const { language } = useContext(UserContext);
  const pathName = useLocation().pathname;
  const [showingBurger, setShowingBurger] = useState(false);

  function selectMenu() {
    setShowingBurger(!showingBurger);
  }

  function hideBurgerMenu() {
    console.log("Hiding the burger");
    var x = document.getElementById("myTopnav");
    if (showingBurger) {
      x.className = "topnav";
      setShowingBurger(false);
    }
  }

  return (
    <div className={showingBurger ? "topnav responsive" : "topnav"} id="myTopnav">
      {language === "en" && <nav>
          <Link to="/" 
            onClick={hideBurgerMenu}
            className={pathName === "/home" || pathName === "/" ? "active" : "not-active"}>Home</Link>
          <Link to="/inside_house"
            onClick={hideBurgerMenu}
            className={pathName === "/inside_house" ? "active" : "not-active"}>Inside house</Link>
          <Link to="/outside_house"
            onClick={hideBurgerMenu}
            className={pathName === "/outside_house" ? "active" : "not-active"}>Outside house</Link>
          <Link to="/facilities"
            onClick={hideBurgerMenu}
            className={pathName === "/facilities" ? "active" : "not-active"}>Facilities</Link>
          <Link to="/location"
            onClick={hideBurgerMenu}
            className={pathName === "/location" ? "active" : "not-active"}>Location</Link>
          <Link to="/bookings"
            onClick={hideBurgerMenu}
            className={pathName === "/bookings" ? "active" : "not-active"}>Bookings</Link>
          <Link to="/contact"
            onClick={hideBurgerMenu}
            className={pathName === "/contact" ? "active" : "not-active"}>Contact us</Link>
          <LanguageButton buttonLanguage={"fr"}/>
          {/* eslint-disable-next-line */}
          <a href="#" className="icon" onClick={selectMenu}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>}
      {language === "fr" && <nav>
          <Link to="/fr" 
            onClick={hideBurgerMenu}
            className={pathName === "/fr" || pathName === "/" ? "active" : "not-active"}>Accueil</Link>
          <Link to="/inside_house-fr" 
            onClick={hideBurgerMenu}
            className={pathName === "/inside_house-fr" ? "active" : "not-active"}>Intérieur</Link>
          <Link to="/outside_house-fr"
            onClick={hideBurgerMenu}
            className={pathName === "/outside_house-fr" ? "active" : "not-active"}>Extérieur</Link>
          <Link to="/facilities-fr"
            onClick={hideBurgerMenu}
            className={pathName === "/facilities-fr" ? "active" : "not-active"}>Facilities</Link>
          <Link to="/location-fr"
            onClick={hideBurgerMenu}
            className={pathName === "/location-fr" ? "active" : "not-active"}>Location</Link>
          <Link to="/bookings-fr"
            onClick={hideBurgerMenu}
            className={pathName === "/bookings-fr" ? "active" : "not-active"}>Réservations</Link>
          <Link to="/contact-fr"
            onClick={hideBurgerMenu}
            className={pathName === "/contact-fr" ? "active" : "not-active"}>Nous contacter</Link>
          <LanguageButton buttonLanguage={"en"}/>
          {/* eslint-disable-next-line */}
          <a href="#" className="icon" onClick={selectMenu}>
            <i className="fa fa-bars"></i>
          </a>
      </nav>}
    </div>
  );
}