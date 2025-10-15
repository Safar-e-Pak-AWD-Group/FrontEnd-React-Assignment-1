import { useState } from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './style.css'
import Nav from "./component/Nav/Nav"
import Destinations from "./component/Destinations/Destinations";
import Footer1 from "./component/Footer/Footer1";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Gallery from "./component/Gallery/Gallery";
import Services from "./component/Services/Services";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact/Contact";
import BookNow from "./component/BookNow/BookNow1";




// File: App.jsx located in src folder
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Nav/>

        <Routes>

            <Route exact path="/" element={<Home/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/destinations" element={<Destinations/>} />
            <Route exact path="/gallery" element={<Gallery/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/booknow" element={<BookNow/>} />

        

        </Routes>

        <Footer1/>
      </Router>
    </>
  );
}

export default App;
