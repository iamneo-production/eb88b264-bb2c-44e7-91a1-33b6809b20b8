import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {  useNavigate} from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
        try{
        const response=await axios.post(
          "http://localhost:8080/auth/register",
          {
            first_name:formData.firstName,
            last_name:formData.lastName,
            email:formData.email,
            password:formData.password
          }
        );

        alert("Signed up a new account successfully.Please Login");}
        catch(error){
            alert(error.message);
            console.log(error.message);
        }
  };
    const css = require("../css/sign.css").toString();
  return (
    <div>
      <Helmet >{css}</Helmet>
      <div className="body-container">
        <div className="signin-container">
          <h3>New User? Sign-Up</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <br />
              <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
