import './css/App.css';
import { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import InsideApartment from './pages/InsideApartment';
import OutsideApartment from './pages/OutsideApartment';
import Prices from './pages/Prices';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Location from './pages/Location';
import Login from './pages/Login';

export const UserContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <UserContext.Provider 
          value={
            { language: language, setLanguage: setLanguage }
        }>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="prices" element={<Prices />} />
            <Route path="contact" element={<Contact />} />
            <Route path="inside_apartment" element={<InsideApartment />} />
            <Route path="outside_apartment" element={<OutsideApartment />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="location" element={<Location />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
