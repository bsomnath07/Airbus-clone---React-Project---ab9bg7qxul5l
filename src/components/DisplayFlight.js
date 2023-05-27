import React, { useState } from "react";
import "../styles/DisplayFlight.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

const DisplayFlight = ({ flights }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [flightPrice, setFlightPrice] = useState(null);
  const navigate = useNavigate();
  const handleLoginSuccess = (price) => {
    setFlightPrice(price);
    // navigate("/payment");
  };
  const handleClick = (flight) => {
    setShowLogin(true);
    setFlightPrice(flight.price);
    localStorage.setItem
    ("flightPrice",flight.price );
    // navigate("/payment");
    console.log(flight, " flight ");
  };
  console.log(flightPrice, "hello flights");

  return (
    <div>
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} flightPrice={flightPrice} />
      ) : (
        flights.map((flight, index) => {
          return (
            <div key={index} className="flight">
              <p className="flightname">Airline: {flight.airlineName}</p>
              <p className="flightinfo">From: {flight.from}</p>
              <p className="flightinfo">To: {flight.to}</p>
              <p className="flightinfo">
                Departure Date: {flight.departure.departureDate}
              </p>
              <p className="flightinfo">
                Departure Time: {flight.departure.departureTime}
              </p>
              <p className="flightduration">Duration: {flight.duration}</p>
              <p className="flightprice">Price: {flight.price}</p>
              {flight.via.length > 0 && (
                <p className="flightjourney">Via: {flight.via.join(", ")}</p>
              )}
              {flight.return && (
                <>
                  <p className="flightjourney">
                    Return Date: {flight.return.returnDate}
                  </p>
                  <p className="flightjourney">
                    Return Time: {flight.return.returnTime}
                  </p>
                </>
              )}
              <button className="btn-book" onClick={() => handleClick(flight)}>
                Book Flight
              </button>
            </div>
          );
        })
      )}

      {/* {flightPrice && <Payment flightPrice={flightPrice} />} */}
    </div>
  );
};

export default DisplayFlight;
