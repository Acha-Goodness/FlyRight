import React, { useState } from 'react';
import "./searchFlight.css";
import EditFlight from '../FlightBooking/EditFlight';
import { useLocation } from 'react-router-dom';
import ViewFlightDetails from './ViewFlightDetails/ViewFlightDetails';
import { useGet } from '../../Utils/Hooks';

const SearchFlight = () => {
  const location = useLocation();
  const [availableFlight] = useGet("http://localhost:8000/flight");

  let flightDetails;

    if(location.state !== null){
      flightDetails = {
        from:location.state.booking.from,
        to:location.state.booking.to,
        departureDateTime:location.state.booking.departureDateTime,
        returnDateTime:location.state.booking.returnDateTime,
        flightCategory:location.state.booking.flightCategory,
        adult:location.state.booking.adult,
        children:location.state.booking.children,
        infants:location.state.booking.infants
      }
      // for(var x = 0; x <= 10; x++){
      //   console.log(location.state.airLines)
      //   setAvailableFlight(location.state.airLines)
      // }
    }
       
  const [ showEdit, setShowEdit ] = useState(false);
  const [ showAirView, setShowAirVies ] = useState(false);
  const [ airLineId, setAirLineId ] = useState(null);

  const handleEdit = () => {
    setShowEdit(!showEdit)
  }

  const cancelEdit = () => {
    setShowEdit(!showEdit)
  }

  const toggleAirView = (id) => {
    setAirLineId(id)
    setShowAirVies(true);
  }

  const closeAirView = (id) => {
    setShowAirVies(false);
  }
  return (
    <div className="search_flight">
        <div className="search_flight_select">
            { showEdit === true ? <EditFlight cancelEdit={cancelEdit}/> : <div className="search_flight_content">
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
                      <p>Daparture Date</p>
                      <p>{flightDetails.departureDateTime}</p>
                    </div>
                    <div>
                      <p>Return Date</p>
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
                <button onClick={handleEdit}>Edit</button>
            </div>}

        </div>
        <div className="air">
          <div className="air_available_flight">
          
          {availableFlight && availableFlight.slice(0, 5).map((air, index) => {
            return <div key={index} className="air_lines">
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
                        <button onClick={() => toggleAirView(air.id)}>View</button>
                      </div>
                    </div>
          })}
          </div>
          <div className={ showAirView ? "air_flight_details" : "hideAirDetails" }>
              <ViewFlightDetails airId={airLineId} closeView={closeAirView}/>
          </div>
        </div>
    </div>
  )
}

export default SearchFlight;
