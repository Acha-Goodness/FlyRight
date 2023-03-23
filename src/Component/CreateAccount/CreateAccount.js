import React from "react";
import "./createAccount.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function CreateAccount() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  // const [dob, setDob] = useState([]);
  // const [nationality, setNationality] = useState([]);
  const [phonenumber, setPhoneNumber] = useState([]);
  const [password, setPassword] = useState([]);

  const navigate = useNavigate();

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const postData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      firstName,
      lastName,
      email,
      // dob,
      // nationality,
      phonenumber,
      password,
    })
      .then((res) => console.log(res))
      .then((res) => {
        console.log(res.data);

        res.status === 201
          ? console.log("Invalid input")
          : navigate("/login", { state: res });
      })
      .catch((error) => {
        console.log(error);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    // setDob("");
    // setNationality("");
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <div className="signup">
      <div className="signup_text">
        {/* <h1>WELCOME TO FlyRight</h1> */}
        <h3>CREATE ACCOUNT</h3>

        <form className="signup_form">
          {/* <h3>First-Name:</h3> */}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Firstname"
          />

          {/* <h3>Last-Name:</h3> */}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Lastname"
          />

          {/* <h3>EmailAddress:</h3> */}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="EmailAddress"
          />
          {/* <h3>Date of Birth</h3>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required

          />
          <h3>Nationality:</h3>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
            placeholder='Nationality'
          /> */}
          {/* <h3>Phone Number:</h3> */}
          <input
            type="tel"
            value={phonenumber}
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            placeholder="Phonenumber"
          />

          {/* <h3>Password:</h3> */}
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
          

          {/* <h2></h2> */}
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
