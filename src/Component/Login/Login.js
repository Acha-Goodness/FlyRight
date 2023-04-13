import React, { useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

function LogIn() {
  const [emailAddress, setEmailAddress] = useState([]);
  const [password, setPassword] = useState([]);


  const navigate = useNavigate();

  const baseUrl = "https://a88c-197-210-226-84.eu.ngrok.io/api/v1/passenger/login";

  const postLoginData = (e) => {
    e.preventDefault();
    // navigate("/");
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
  const [errors, setErrors] = useState({
    emailAddress: "",
    password: "",
  });

  const validateInput = (field, value) => {
    switch (field) {
      case "emailAddress":
        if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setErrors((errors) => ({
            ...errors,
            emailAddress: "Email Address is invalid",
          }));
        } else {
          setErrors((errors) => ({ ...errors, emailAddress: "" }));
        }
        break;

      case "password":
        if (value.length < 8) {
          setErrors((errors) => ({
            ...errors,
            password: "Password must be at least 8 characters",
          }));
        } else {
          setErrors((errors) => ({ ...errors, password: "" }));
        }
        break;
      default:
        break;
    }
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
            onChange={(e) => {
              setEmailAddress(e.target.value);
              validateInput("emailAddress", e.target.value);
            }}
            placeholder="EmailAddress"
            required
          />
           <div className="emails">{errors.emailAddress}</div>

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateInput("password", e.target.value);
            }}
            placeholder="Password"
            name="password"
            required
          />
          <div className="pass">{errors.password}</div>

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
