import React from "react";
import "./createAccount.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function CreateAccount() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [phonenumber, setPhoneNumber] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();
  // const [selectedValue, setSelectedValue] = useState("");

  const baseUrl = "http://localhost:8080/api/v1/passenger/register";
  // const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const postData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      firstName,
      lastName,
      emailAddress,
      phonenumber,
      password,
    })
      .then((res) => {
        console.log(res.data);
        res.data.isSuccessful && navigate("/login");

        // res.data.isSuccessful && navigate("/otp");
      })
      .catch((error) => {
        console.log(error);
      });

    setFirstName("");
    setLastName("");
    setEmailAddress("");
    setPhoneNumber("");
    setPassword("");
  };

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   console.log("Selected option value: " + event.target.value);
  // };

  return (
    <div className="signup">
      <div className="signup_text">
        <h3>CREATE ACCOUNT</h3>

        <form className="signup_form">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Firstname"
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Lastname"
          />

          <input
            type="email"
            name="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            required
            placeholder="EmailAddress"
          />

          <input
            type="tel"
            value={phonenumber}
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Phonenumber"
          />

          <select id="select">
            <option>Role</option>
            <option>Passenger</option>
            <option>Travel Agent</option>
          </select>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <button className="btn" onClick={postData}>
            Create Account
          </button>
          <p>
            Already have an account?
            <Link to="/login">
              {" "}
              <span>Login Here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
