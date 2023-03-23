import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function LogIn() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [confirmPassword, setConfirmPassword] = useState([]);
  // const [customvalidity, setCustomValidity] = useState([]);

  const navigate = useNavigate();
  // const passwordField = document.getElementById("password");
  // const confirmPasswordField = document.getElementById("confirm-password");

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const postLoginData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      email,
      password,
      // confirmPassword,
    })
      .then((res) => console.log(res))
      .then((res) => {
        console.log(res.data);

        res.status === 201
          ? console.log("Invalid input")
          : navigate("/homepage", { state: res });
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
    // setConfirmPassword("");
    // setCustomValidity("")
    // {validateConfirmPassword()}
  };
  // function validateConfirmPassword() {
  //   const password = passwordField.value;
  //   const confirmPassword = confirmPasswordField.value;

  //   if (password !== confirmPassword) {
  //     confirmPasswordField.setCustomValidity('Passwords do not match');
  //   } else {
  //     confirmPasswordField.setCustomValidity('');
  //   }
  // }

  return (
    <div className="login">
      <div className="login_text">
        {/* <h1>WELCOME TO FlyRight</h1> */}
        <h3>Login to make your reservations</h3>

        <form className="login_form">
          {/* <h3>EmailAddress:</h3> */}
          {/* <label htmlFor="email">EmailAddress</label> */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="EmailAddress"
          />

          {/* <h3>Password:</h3> */}
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            name="password"
          />

          {/* <h3>Confirm Password:</h3> */}
          {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
          {/* <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
          />  */}

          {/* <div className="form-one">
            <div className="form_two">
              <input type="checkbox" />
              <label for="name">Remember Me</label>
            </div>
            <p>Forgot Password?</p>
          </div> */}
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
