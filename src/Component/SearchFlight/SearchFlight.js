import React from 'react';
import "./searchFlight.css";

const SearchFlight = () => {
  return (
    <div className="search_flight">
        <div className="search_flight_select">
            <div className="search_flight_content">
                <div className="search_fllgth_text">
                    <p>Lagos (LOS)</p>
                    <p>Dubai (DXB)</p>
                    <p>Thu Mar 23, 2023 - Sun Mar 26, 2023</p>
                    <p>1 Adult, Economy</p>
                </div>
                <button>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default SearchFlight
