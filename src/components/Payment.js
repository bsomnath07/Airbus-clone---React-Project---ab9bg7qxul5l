import React, { useState } from "react";
import "../styles/Payment.css";
import Succesfulbooked from "./Succesfulbooked";

// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
function Payment() {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  const flightPrice = localStorage.getItem("flightPrice");
  console.log(flightPrice, "flightPrice in payments");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cardNumber.length !== 16) {
      alert("Please enter a 16-digit card number.");
    } else {
      localStorage.setItem("nameOnCard", nameOnCard);
      localStorage.setItem("cardNumber", cardNumber);
      localStorage.setItem("expiryDate", expiryDate);
      localStorage.setItem("cvv", cvv);

      setBookingStatus("success");
    }
  };

  console.log(bookingStatus, "booking status");
  return (
    <div className="container">
      {!bookingStatus && (
        <div className="left-column">
          <div className="price-info">
            <h2>Fare Summary</h2>
            <h4 style={{ whiteSpace: "pre-line" }}>
              Base Fare : {"\u00A0".repeat(105)} Rs {flightPrice}
            </h4>
            <h4 style={{ whiteSpace: "pre-line" }}>
              Fee & Surcharge: {"\u00A0".repeat(96)} Rs 740{" "}
            </h4>
            <h4 style={{ whiteSpace: "pre-line" }}>
              Total Amount: {"\u00A0".repeat(100)} Rs{" "}
              {Number(flightPrice) + 740}
            </h4>
          </div>
        </div>
      )}
      <div className="right-column">
        <div className="card-details">
          {!bookingStatus && (
            <form>
              <h2>Payment Method</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name on Card"
                  value={nameOnCard}
                  onChange={(e) => setNameOnCard(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Expiry Date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                Pay
              </button>
            </form>
          )}
          {bookingStatus === "success" && (
            <Succesfulbooked
              bookingStatus={bookingStatus}
              setBookingStatus={setBookingStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
