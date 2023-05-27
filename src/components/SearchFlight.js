import React, { useState, useEffect } from "react";
import "../styles/SearchFlight.css";
import DisplayFlight from "./DisplayFlight";
import Payment from "./Payment";
const SearchFlight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(null);
  const [returndate, setReturndate] = useState(null);
  const [flights, setflights] = useState([]);
  let API =
    "https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setflights(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  console.log(flights);
  const submitHandler = async () => {
    console.log(from, to, departure, returndate);
    const response = await fetch(
      `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`
    );
    const data = await response.json();

    setflights(data);
  };

  return (
    <>
      <div className="search-query">
        <div className="querycontainer">
          <label className="from-label">From:</label>
          <input
            className="from-bar"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />

          <label className="to-label">To:</label>
          <input
            className="to-bar"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />

          <label className="dep-label">Departure:</label>
          <input
            className="departure-bar"
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />

          <label className="return-label">Returndate:</label>
          <input
            className="return-bar"
            type="date"
            value={returndate}
            onChange={(e) => setReturndate(e.target.value)}
          />

          <button className="searchflightsbtn" onClick={submitHandler}>
            Search flights
          </button>
        </div>

        <div className="displaycontainer">
          {flights.length > 0 ? (
            <>
              <DisplayFlight flights={flights} />
              {/* <Payment flightPrice={flights[0].price} /> */}
            </>
          ) : (
            <p>No flights found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFlight;
