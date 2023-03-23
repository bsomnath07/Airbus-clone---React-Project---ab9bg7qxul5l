import React,{useState} from 'react'
import "../styles/SearchFlight.css";
const SearchFlight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(null);
  const [returndate, setReturndate] = useState(null);
  const [flights, setflights] = useState([]);
  console.log(flights)
  const submitHandler = async () => {

      console.log(from,to,departure,returndate);
      const response = await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${from}&to=${to}`);
      const data=await response.json();

      setflights(data);

    };

  //let API="https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flightss"

  // const fetchApiData=async(url)=>{
  //   try{
  //     const res= await fetch(url);
  //     const data=await res.json();
  
  //     setflightss(data);
  //     console.log(data)
  //   }catch(error){
  //     console.log(error);
  //   }
  //   };


  return (
    <>
    <div className='querycontainer'>
     <label >from</label> 
     <input type="text" value={from} onChange={(e) => setFrom(e.target.value)}/> 
     <label>To</label>
     <input type="text" value={to} onChange={(e) => setTo(e.target.value)}/>
     <label>Departure</label>
     <input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)}/>
     <label>Returndate</label>
     <input type="date" value={returndate} onChange={(e) => setReturndate(e.target.value)}/>
     <button className='searchflightsbtn' onClick={submitHandler}>Search flights</button>
    </div>

     <div className='displaycontainer'>
<div className='flightscontainer' > { flights.map((flight, index) =>{
  return(
  <div>
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
          

  </div>
  )
} )


  }
        </div>
      </div> 

</>
    
  )
}


export default SearchFlight
