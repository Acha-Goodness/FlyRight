import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { LoggedContext } from "../../App";
import { useContext } from "react";
import Axios from "axios";

function LogIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

      
  
  const { checkUser, setCheckUser } = useContext(LoggedContext);
  

  const navigate = useNavigate();

  const baseUrl ="https://89c0-154-113-161-137.ngrok-free.app/api/v1/passenger/login";

    const postRegData = {
      emailAddress,
      password,
    };


   const validateRegData = () => {

     for (let key in postRegData) {
       if (postRegData[key] === "") {
         alert(`${key} cannot be empty`);
         return false;
       }
     }
   };


  const postLoginData = (e) => {
    e.preventDefault();

   const valResult = validateRegData();
   console.log(`logging val result ${valResult}`);
   if (valResult === false) return;

   console.log("hitting server");
    Axios.post(baseUrl, {
      emailAddress,
      password,
    })
      .then((res) => {
        console.log(res.data["data"].message);

        if (res.data["data"].statusCode !== "OK") {
          alert(res.data["data"].message);
        }else{
          alert(res.data["data"].message);
          setCheckUser(res.data["data"].loggedIn);
          res.data.isSuccessful && navigate("/");
        }

      })
      .catch((error) => {
        alert(error);
      });
    // setEmailAddress("");
    // setPassword("");
  };

  return (
    <div className="login">
      <div className="login_text">
    
        <h3>Login to make your reservations</h3>

        <form className="login_form">
          <input
            type="email"
            name="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            placeholder="EmailAddress"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            name="password"
          />

          <div className="pword">
            <Link to="/forgot">
              <span>Forgot Password?</span>
            </Link>
          </div>

          <h2></h2>
          <button className="bt" onClick={postLoginData}>
            Log In
          </button>
          <p>
            Need an account?
            <span>
              <Link to="/createAccount">
                <span>Create Account</span>
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
