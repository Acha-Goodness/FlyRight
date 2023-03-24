import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function LogIn() {
  const [emailAddress, setEmailAddress] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();

  const baseUrl ="http://localhost:8080/api/v1/passenger/login";

  const postLoginData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      emailAddress,
      password,
    })
      .then((res) => {
        console.log(res.data);

        res.data.isSuccessful && navigate("/dash");
      })
      .catch((error) => {
        console.log(error);
      });
    setEmailAddress("");
    setPassword("");
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
