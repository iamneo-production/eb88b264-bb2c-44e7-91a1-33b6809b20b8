import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import axios from "axios";
const FeedbackForm = () => {
  const css = require("../css/home.css").toString();
  const navigate = useNavigate();
 const email = localStorage.getItem("email");
  const [formData, setFormData] = useState({
    uname:"",
    email: email,
    service: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    axios
      .post("http://localhost:8080/users/addUserFeedback", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "cache-control": "no-cache",
        },
      })
      .then((response) => { 
        console.log(formData);
        // console.log(response);
      })
      .catch((error) => {
        console.log(formData);
        console.error(error);
      });
            navigate("/home");
    setFormData({
      uname: "",
      email: "",
      service:"",
      rating: "",
      feedback: "",
    });
  };

  return (
    <>
      <Helmet>{css}</Helmet>
      <PersistentDrawerLeft />
      <div className="align3">
        <div className="pie1">
          <h1>Review the Service</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="uname">Your Name:</label>
            <input
              type="text"
              id="uname"
              name="uname"
              required
              className="special"
            />
            <br />
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="special"
            />
            <br />
            <label htmlFor="service">Service:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <br />
              <br></br>
              <option value="" disabled>
                Select Service
              </option>
              <option value="Payment">Payment</option>
              <option value="Inventory">Inventory</option>
              <option value="Financial Report">Financial Report</option>
              <option value="Security">Security</option>
              <option value="Backup">Backup</option>
            </select>
            <br />
            <br></br>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <br />
              <option value="" disabled>
                Select rating
              </option>
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Good</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
            <br />
            <br />
            <label htmlFor="feedback">Comments:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="4"
              cols="50"
              required
              className="special"
            ></textarea>
            <br />
            <input type="submit" value="Submit" className="" />
          </form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
