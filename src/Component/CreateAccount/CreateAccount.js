import React from "react";
import "./createAccount.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  

  const navigate = useNavigate();


  const baseUrl =
    "https://2aea-154-113-161-131.ngrok-free.app/api/v1/passenger/register";

  const postRegData = {
      firstName,lastName, emailAddress, phoneNumber, password
  }

  const validateRegData = () => {
    const regex = /\d+/;
    if (regex.test(postRegData.lastName) || regex.test(postRegData.firstName)) {
      alert("Numbers are not allowed in firstname and lastname fields");
      return false;
    }
  for (let key in postRegData){
    if(postRegData[key] === ""){
      alert(`${key} cannot be empty`)
      return false
    }
  }
  }

  const postData = (e) => {
    e.preventDefault();

    const valResult = validateRegData()
    console.log(`logging val result ${valResult}`);
    if (valResult === false) return;
    Axios.post(baseUrl, {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      password,
    })
      .then((res) => {
        console.log(res.data);
        res.data.isSuccessful && navigate("/login");

        // res.data.isSuccessful && navigate("/otp");
      })
      .catch((error) => {
        alert(error);
      });
  };


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
            type="number"
            value={phoneNumber}
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
