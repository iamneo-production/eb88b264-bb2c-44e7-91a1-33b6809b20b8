import React, { useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
   const user = {email,};
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert("Successfully Logged in with " + email);
    dispatch(
      {type: "LOGIN",payload:user}
    );
    setEmail('');
    setPassword('');
    navigate("/home");
  };

    const css = require("../css/login.css").toString();
    // useEffect(() => {
    //   if (user) {
    //     navigate("/home");
    //   }
    // });
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
            <label for="remember">Remember me</label>
            <br />
              <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
