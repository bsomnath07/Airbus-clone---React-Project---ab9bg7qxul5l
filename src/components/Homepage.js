
import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/Homepage.css";
import SearchFlight from './SearchFlight';


const Homepage = () => {
  const [flights, setFlights] = useState([]);

  let API="https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights"

  const fetchApiData=async(url)=>{
    try{
      const res= await fetch(url);
      const data=await res.json();
      setFlights(data);
      console.log(data)
    }catch(error){
      console.log(error);
    }
    };


useEffect(() => {
fetchApiData(API);
}, []);
  return (
    <>
<div></div>
<SearchFlight/>
{/*<button className='searchflightbtn' onClick={() => setShowSearch(!showSearch)}>Search Flight</button>*/}
  <div className='displaycontainer'>
<div className='flightcontainer' > {flights.map((flight, index) => (
        <div  key={index}>
        <h2 className='ticket'>Available Ticket</h2>
          <p className='flightname'>Airline: {flight.airlineName}</p>
          <p className='flightinfo'>From: {flight.from}</p>
          <p className='flightinfo'>To: {flight.to}</p>
          <p className='flightinfo'>Departure Date: {flight.departure.departureDate}</p>
          <p className='flightinfo'>Departure Time: {flight.departure.departureTime}</p>
          <p className='flightduration'>Duration: {flight.duration}</p>
          <p className='flightprice'>Price: {flight.price}</p>
          {flight.via.length > 0 && <p className='flightjourney'>Via: {flight.via.join(', ')}</p>}
          {flight.return && (
            <>
              <p className='flightjourney'>Return Date: {flight.return.returnDate}</p>
              <p className='flightjourney'>Return Time: {flight.return.returnTime}</p>
            </>
          )}
          <hr/>
        </div>
      ))}</div>
</div>
</>
  )
}

export default Homepage

