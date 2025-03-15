import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../css/topnav.css';

export default function Header() {
  const pathName = useLocation().pathname;
  const [showingBurger, setShowingBurger] = useState(false);
  const [username] = useState(localStorage.getItem("tg-username"));
  const [password] = useState(localStorage.getItem("tg-password"));
  const [isAdmin, setIsAdmin] = useState(false);

  function selectMenu() {
    setShowingBurger(!showingBurger);
  }

  function hideBurgerMenu() {
    var x = document.getElementById("myTopnav");
    if (showingBurger) {
      x.className = "topnav";
      setShowingBurger(false);
    }
  }

  useEffect(() => {
    setIsAdmin(username && password);
  }, [username, password]);

  return (
    <div className={showingBurger ? "topnav responsive" : "topnav"} id="myTopnav">
      <nav>
        <Link to="/" 
          onClick={hideBurgerMenu}
          className={pathName === "/home" || pathName === "/" ? "active" : "not-active"}>Home</Link>
        <Link to="/inside_apartment"
          onClick={hideBurgerMenu}
          className={pathName === "/inside_apartment" ? "active" : "not-active"}>Inside apartment</Link>
        <Link to="/outside_apartment"
          onClick={hideBurgerMenu}
          className={pathName === "/outside_apartment" ? "active" : "not-active"}>Outside apartment</Link>
        <Link to="/facilities"
          onClick={hideBurgerMenu}
          className={pathName === "/facilities" ? "active" : "not-active"}>Facilities</Link>
        <Link to="/location"
          onClick={hideBurgerMenu}
          className={pathName === "/location" ? "active" : "not-active"}>Location</Link>
        <Link to="/prices"
          onClick={hideBurgerMenu}
          className={pathName === "/prices" ? "active" : "not-active"}>Prices</Link>
        <Link to="/bookings"
          onClick={hideBurgerMenu}
          className={pathName === "/bookings" ? "active" : "not-active"}>Bookings</Link>
        <Link to="/contact"
          onClick={hideBurgerMenu}
          className={pathName === "/contact" ? "active" : "not-active"}>Contact us</Link>
        {isAdmin && <Link to="/logout"
          onClick={hideBurgerMenu}
          className={pathName === "/logout" ? "active" : "not-active"}>Log out</Link>}
        {/* eslint-disable-next-line */}
        <a href="#" className="icon" onClick={selectMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    </div>
  );
}