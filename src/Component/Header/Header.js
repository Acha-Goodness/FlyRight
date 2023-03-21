import React from 'react'
import "./header.css";
import FlyRight from "../../Assets/images/FlyRight.png";
import Airplane from "../../Assets/images/Airplane.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_topbar">
            <marquee><p>For cheaper Virgin tickets, please call 08138335567</p></marquee>
      </div>
      <div className="header_navbar">
        <div className="header_navbar_text">
            <div className="header_logo">
                <img src={FlyRight}/>
            </div>
            <div className="header_menu">
            <nav>
              <ul>
                <li>Flight</li>
                <li>Manage My Bookings</li>
                <li>Contact</li>
                <li>Support</li>
              </ul>
            </nav>

            </div>
            <div className="header_action_btn">
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </div>
       
      </div>
      {/* <div className='home'>
      <h2>Book Easier 
            Fly safer</h2>
          <p>Search and book Flights</p>
          
        </div> */}
    </div>
  )
}

export default Header
