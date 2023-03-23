import React from 'react'
import logo from '../styles/images/logo.jpg';
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <div className="navcontainer">
    <nav>
    <span><img src={logo} /><h4 className="airbus">AirBus</h4></span>

    <button className="loginbtn">Login</button>
    </nav>
    </div>
  )
}

export default Navbar

