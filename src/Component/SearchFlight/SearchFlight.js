import React from 'react';
import "./searchFlight.css";
import { Link, useLocation } from 'react-router-dom';

const SearchFlight = () => {
  const location = useLocation();

  const availableFlight = [
    {
      id :1,
      Name : "Delta Airline",
      DepartTime : "23:30(LOS)",
      ArriveTime : "25:30(DAI)",
      FromCity : "Lagos",
      ToCity : "Dubai",
      Category : "Economy",
      Price : "N3,000.00"
    },
    {
      id:2,
      Name : "Qater Airways",
      DepartTime : "23:30(LOS)",
      ArriveTime : "25:30(DAI)",
      FromCity : "Lagos",
      ToCity : "Dubai",
      Category : "Economy",
      Price : "N3,000.00"
    },
    {
      id:3,
      Name : "British Airways",
      DepartTime : "23:30(LOS)",
      ArriveTime : "25:30(DAI)",
      FromCity : "Lagos",
      ToCity : "Dubai",
      Category : "Economy",
      Price : "N3,000.00"
    },
    {
      id:4,
      Name : "Fly Emirates",
      DepartTime : "23:30(LOS)",
      ArriveTime : "25:30(DAI)",
      FromCity : "Lagos",
      ToCity : "Dubai",
      Category : "Economy",
      Price : "N3,000.00"
    },
    {
      id:5,
      Name : "Virgin Atlantic",
      DepartTime : "23:30(LOS)",
      ArriveTime : "25:30(DAI)",
      FromCity : "Lagos",
      ToCity : "Dubai",
      Category : "Economy",
      Price : "N3,000.00"
    },
  ]


  let flightDetails;
  if(location.state !== null){
    flightDetails = {
      from:location.state.from,
      to:location.state.to,
      departureDateTime:location.state.departureDateTime,
      returnDateTime:location.state.returnDateTime,
      flightCategory:location.state.flightCategory,
      adult:location.state.adult,
      children:location.state.children,
      infants:location.state.infants
    }
  }

  return (
    <div className="search_flight">
        <div className="search_flight_select">
            <div className="search_flight_content">
                <div className="search_fllgth_text">
                    <div>
                      <p>Current Location</p>
                      <p>{flightDetails.from}</p>
                    </div>
                    <div>
                      <p>Destination</p>
                      <p>{flightDetails.to}</p>
                    </div>
                    <div>
                      <p>Departure Date and Time</p>
                      <p>{flightDetails.departureDateTime}</p>
                    </div>
                    <div>
                      <p>Departure return and Time</p>
                      <p>{flightDetails.returnDateTime}</p>
                    </div>
                    
                    <div className="total_passenger">
                      <div>
                          <p>Adult</p>
                          <p>{flightDetails.adult}</p>
                      </div>
                      <div>
                        <p>Children</p>
                        <p>{flightDetails.children}</p>
                      </div>
                      <div>
                        <p>Infants</p> 
                        <p>{flightDetails.infants}</p>
                      </div>
                    </div>
                    <div>
                      <p>Category</p>
                      <p>{flightDetails.flightCategory}</p>
                    </div>
                </div>
                <button className='edit'><Link to="/">Edit</Link></button>
            </div>
        </div>
        <div className="air">
          {availableFlight.map((air) => {
                return <div key={air.id} className="air_lines">
                          <p>{air.Name}</p>
                          <div>
                            <p>{air.DepartTime}</p>
                            <p>{air.FromCity}</p>
                          </div>
                          <div>
                            <p>{air.ArriveTime}</p>
                            <p>{air.ToCity}</p>
                          </div>
                          <div className="air_line_price">
                            <p>{air.Price}</p>
                            <button>View</button>
                          </div>
                       </div>
          })}
        </div>
    </div>
  )
}

export default SearchFlight
