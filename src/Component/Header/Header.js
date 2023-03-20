import React from 'react'
import "./header.css";
import FlyRight from "../../Assets/images/FlyRight.png";

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
                
            </div>
            <div className="header_action_btn">
                <button>Login</button>
                <button>Create Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
