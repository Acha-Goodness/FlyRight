import React from 'react';
import "./viewFlightDetails.css";
import { useGet } from '../../../Utils/Hooks';

const ViewFlightDetails = ({airId, closeView}) => {
    const [ airFlight ] = useGet(`http://localhost:8000/flight/${airId}`);


    return (
    <div className="vFlight">
        <div className="vflight_header">
            <h3>Air Flight Breakdown</h3>
            <button className="XxBtn" onClick={closeView}><p>&#x274C;</p></button>
        </div>
        <div>
           <div className="fare_total"><h4>Total</h4><p>{airFlight && airFlight.Price}</p></div>
        </div>
        <div className="air_note">
            <h4>Air Line Info</h4>
            <p>{airFlight && airFlight.note}</p>
        </div>
        <div className="air_details">
            <h4>Departure Flight:</h4>
            <p>{airFlight && airFlight.Name}</p>
            <div className="air_flight_flow">
                <div className="flight_origin">
                    <p>{airFlight && airFlight.FromCity}</p>
                    <p>{airFlight && airFlight.IataOrig} - {airFlight && airFlight.DepartTime}</p>
                    <p>{airFlight && airFlight.DepartDate}</p>
                </div>
                <div className="flight_origin">
                    <p>{airFlight && airFlight.ToCity}</p>
                    <p>{airFlight && airFlight.IataDest} - {airFlight && airFlight.ArriveTime}</p>
                    <p>{airFlight && airFlight.ArriveDate}</p>
                </div>
            </div>
        </div>
        <button className="book_now">BOOK NOW</button>
    </div>
  )
}

export default ViewFlightDetails;
