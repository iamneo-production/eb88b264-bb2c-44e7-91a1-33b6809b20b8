import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = { email };
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/authenticate",
        {
          email: email,
          password: password,
        }
      ).then((response)=>{
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('firstName',response.data.firstName);
        localStorage.setItem('lastName',response.data.lastName);
        localStorage.setItem('email',email);
      })
      dispatch({ type: "LOGIN", payload: user });

      alert("Successfully Logged in with " + email);
      setEmail("");
      setPassword("");

      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const css = require("../css/login.css").toString();

  return (
    <div>
      <Helmet>{css}</Helmet>
      <div className="body-container">
        <div className="login-container" style={{ float: "left" }}>
          <h3>Log-in</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
            <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
