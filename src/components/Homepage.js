import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import SearchFlight from "./SearchFlight";
import skyDes from "../styles/images/skyDes.jpg";
import Login from "./Login";
import Payment from "./Payment";

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  const handleLoginSuccess = (price) => {
    setFlightPrice(price);
    navigate("/payment");
  };

  return (
    <>
      {showLogin ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <SearchFlight />

          {/* <button onClick={() => setShowLogin(true)}> Click </button> */}
        </>
      )}

      {/* {flightPrice && <Payment flightPrice={flightPrice} />} */}
    </>
  );
};

export default Homepage;
