import React from "react";
import logo from "../styles/images/logo.jpg";
import skyImage from "../styles/images/skyImage.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navcontainer">
      <nav>
        <div>
          <span>
            <img className="background-logo" src={logo} />
            <h4 className="airbus">AirBus</h4>
          </span>
          <span>
            <img className="background-pic" src={skyImage} />
          </span>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
