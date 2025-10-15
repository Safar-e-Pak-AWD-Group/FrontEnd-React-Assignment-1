import React, { useState } from "react";
import "./BookNow1.css";

const BookNow1 = () => {
  const [tripType, setTripType] = useState("predefined");
  const [destination, setDestination] = useState("");
  const [popularTrip, setPopularTrip] = useState("");
  const [transport, setTransport] = useState("road");
  const [hotel, setHotel] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedAttractions, setSelectedAttractions] = useState([]);
  const [price, setPrice] = useState(0);

  // Predefined Destinations with Packages
  const packages = {
    "Hunza Valley": {
      price: 55000,
      plan: ["Altit Fort", "Attabad Lake", "Karimabad"],
      hotel: "Hunza Serena Inn",
      transport: "By Air",
    },
    "Skardu": {
      price: 65000,
      plan: ["Shangrila Lake", "Cold Desert", "Upper Kachura"],
      hotel: "Shangrila Resort",
      transport: "By Air",
    },
    "Murree": {
      price: 25000,
      plan: ["Mall Road", "Patriata", "Kashmir Point"],
      hotel: "Hotel One Murree",
      transport: "By Road",
    },
    "Nathiya Gali": {
      price: 30000,
      plan: ["Ayubia", "Pipeline Track", "Green Spot"],
      hotel: "Nathia Heights",
      transport: "By Road",
    },
    "Lake View Park, Islamabad": {
      price: 20000,
      plan: ["Lake View Park", "Pir Sohawa", "Daman-e-Koh"],
      hotel: "Islamabad Serena",
      transport: "By Road",
    },
    "Attabad Lake": {
      price: 40000,
      plan: ["Attabad Lake", "Passu Cones", "Hussaini Bridge"],
      hotel: "Lake View Resort",
      transport: "By Road",
    },
    "Karakoram Highway": {
      price: 70000,
      plan: ["Besham", "Chilas", "Khunjerab Pass"],
      hotel: "Various Stop Inns",
      transport: "By Road",
    },
  };

  // Popular Multi-City Trips
  const multiTrips = {
    "Murree to Swat": {
      price: 45000,
      plan: ["Murree", "Malam Jabba", "Swat Museum"],
    },
    "Naran Kaghan to Ayubia": {
      price: 50000,
      plan: ["Saif-ul-Malook", "Kaghan Valley", "Ayubia National Park"],
    },
    "Lahore to Hunza": {
      price: 80000,
      plan: ["Lahore", "Fairy Meadows", "Hunza Valley"],
    },
    "Islamabad to Skardu": {
      price: 75000,
      plan: ["Islamabad", "Deosai Plains", "Skardu"],
    },
    "Karachi to Quetta": {
      price: 60000,
      plan: ["Karachi", "Hingol", "Quetta"],
    },
  };

  // Hotel Options
  const hotelOptions = {
    budget: { name: "Budget Inn", price: 5000 },
    standard: { name: "Standard Hotel", price: 10000 },
    luxury: { name: "Luxury Resort", price: 20000 },
  };

  // Transport Prices
  const transportPrices = {
    road: 5000,
    air: 15000,
  };

  // City Attractions
  const cityAttractions = {
    Murree: ["Mall Road", "Patriata", "Kashmir Point", "Ayubia National Park"],
    Swat: ["Malam Jabba", "Fizagat Park", "Kalam Valley", "Swat Museum"],
    Hunza: ["Attabad Lake", "Baltit Fort", "Eagle’s Nest", "Hoper Glacier"],
    Skardu: ["Shangrila Resort", "Upper Kachura Lake", "Deosai Plains", "Satpara Lake"],
    Naran: ["Saif-ul-Malook", "Lulusar Lake", "Babusar Top", "Ansoo Lake"],
    Lahore: ["Badshahi Mosque", "Shalimar Gardens", "Minar-e-Pakistan", "Food Street"],
    Karachi: ["Clifton Beach", "Mazar-e-Quaid", "Do Darya", "Mohatta Palace"],
    Quetta: ["Hanna Lake", "Hazarganji Park", "Quaid Residency", "Ziarat"],
    Islamabad: ["Faisal Mosque", "Lok Virsa", "Lake View Park", "Daman-e-Koh"],
  };

  // Handle attraction selection
  const handleAttractionChange = (place) => {
    if (selectedAttractions.includes(place)) {
      setSelectedAttractions(selectedAttractions.filter((item) => item !== place));
    } else {
      setSelectedAttractions([...selectedAttractions, place]);
    }
  };

  // Price Calculation
  const calculatePrice = () => {
    if (tripType === "predefined" && destination) {
      setPrice(packages[destination].price);
    } else if (tripType === "popular" && popularTrip) {
      setPrice(multiTrips[popularTrip].price);
    } else {
      let total = 0;
      total += transportPrices[transport] || 0;
      total += hotelOptions[hotel]?.price || 0;
      total += selectedAttractions.length * 2000;
      setPrice(total);
    }
  };

  return (
    <div className="booknow-wrapper">
      <div className="booknow-container">
        <h2>Book Your Trip</h2>
        <p>Plan your dream trip with Safar-e-Pak!</p>

        {/* Toggle Between Booking Types */}
        <div className="toggle-type">
          <button
            className={tripType === "predefined" ? "active" : ""}
            onClick={() => {
              setTripType("predefined");
              setPrice(0);
            }}
          >
            Popular Routes
          </button>
          <button
            className={tripType === "popular" ? "active" : ""}
            onClick={() => {
              setTripType("popular");
              setPrice(0);
            }}
          >
            Popular Trips
          </button>
          <button
            className={tripType === "custom" ? "active" : ""}
            onClick={() => {
              setTripType("custom");
              setPrice(0);
            }}
          >
            Custom Plan
          </button>
        </div>

        {/* Predefined Route Packages */}
        {tripType === "predefined" && (
          <div className="predefined-section">
            <label>Select Destination:</label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">-- Choose Destination --</option>
              {Object.keys(packages).map((place) => (
                <option key={place} value={place}>
                  {place}
                </option>
              ))}
            </select>

            {destination && (
              <div className="package-details">
                <h3>{destination}</h3>
                <p><strong>Itinerary:</strong> {packages[destination].plan.join(", ")}</p>
                <p><strong>Hotel:</strong> {packages[destination].hotel}</p>
                <p><strong>Transport:</strong> {packages[destination].transport}</p>
                <p className="price">Price: Rs {packages[destination].price}</p>
              </div>
            )}
          </div>
        )}

        {/* Popular Multi Trips */}
        {tripType === "popular" && (
          <div className="popular-section">
            <label>Select Trip:</label>
            <select
              value={popularTrip}
              onChange={(e) => setPopularTrip(e.target.value)}
            >
              <option value="">-- Choose Trip --</option>
              {Object.keys(multiTrips).map((trip) => (
                <option key={trip} value={trip}>
                  {trip}
                </option>
              ))}
            </select>

            {popularTrip && (
              <div className="package-details">
                <h3>{popularTrip}</h3>
                <p><strong>Itinerary:</strong> {multiTrips[popularTrip].plan.join(", ")}</p>
                <p className="price">Price: Rs {multiTrips[popularTrip].price}</p>
              </div>
            )}
          </div>
        )}

        {/* Custom Plan Section */}
        {tripType === "custom" && (
          <div className="custom-section">
            <label>Choose Transport:</label>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
            >
              <option value="road">By Road</option>
              <option value="air">By Air</option>
            </select>

            <label>Choose Hotel:</label>
            <select value={hotel} onChange={(e) => setHotel(e.target.value)}>
              <option value="">-- Select Hotel --</option>
              {Object.entries(hotelOptions).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.name} (Rs {option.price})
                </option>
              ))}
            </select>

            <label>Select City:</label>
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setSelectedAttractions([]);
              }}
            >
              <option value="">-- Choose City --</option>
              {Object.keys(cityAttractions).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            {selectedCity && (
              <div className="attractions">
                <p><strong>Attractions in {selectedCity}:</strong></p>
                {cityAttractions[selectedCity].map((place) => (
                  <label key={place} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={selectedAttractions.includes(place)}
                      onChange={() => handleAttractionChange(place)}
                    />
                    {place}
                  </label>
                ))}
              </div>
            )}

            <button type="button" className="calculate" onClick={calculatePrice}>
              Calculate Price
            </button>

            {price > 0 && <p className="price">Estimated Price: Rs {price}</p>}
          </div>
        )}

        <button className="btn-book">Confirm Booking</button>
      </div>
    </div>
  );
};

export default BookNow1;
