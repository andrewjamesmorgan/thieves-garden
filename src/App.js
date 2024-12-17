import './css/App.css';
import { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import InsideHouse from './pages/InsideHouse';
import OutsideHouse from './pages/OutsideHouse';
import Prices from './pages/Prices';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import Facilities from './pages/Facilities';
import Location from './pages/Location';

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
            <Route path="inside_house" element={<InsideHouse />} />
            <Route path="outside_house" element={<OutsideHouse />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="location" element={<Location />} />
            <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
