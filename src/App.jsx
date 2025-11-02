import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Nav from "./component/Nav/Nav";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Booknow from "./component/BookNow/BookNow1";
import Services from "./component/Services/Services";
import Gallery from "./component/Gallery/Gallery";
import Destinations from "./component/Destinations/Destinations";
import Footer from "./component/Footer/Footer1";
import Dashboard from "./component/Dashboard/Dashboard";
import "./style.css";

function App() {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token; // convert to boolean


  return (
    <Router>
      {/* ✅ Navbar only if logged in */}
      {isLoggedIn && <Nav />}

      <Routes>
        {/* ✅ Default route */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected Routes */}
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booknow" element={<Booknow />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/dash" element={<Dashboard />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>

      {/* ✅ Footer visible only after login */}
      {isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;