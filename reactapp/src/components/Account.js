import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import PersistentDrawerLeft from "./Drawer";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
  const css = require("../css/home.css").toString();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/auth/user/${email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "cache-control": "no-cache",
              },
            }
          );
          setUserData({
             firstName: response.data.first_name,
            lastName: response.data.last_name,
            address: response.data.address,
            email:response.data.email,
          });
          console.log(response.data);
        } catch (error) {
          console.log("Error fetching Data" + error);
        }
      };
      fetchData();
    }, []);

  return (
    <>
      <Helmet>{css}</Helmet>
      <PersistentDrawerLeft />
      <div className="pie2">
        <div>
          <h1>Account Page</h1>
          <div>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Email: {userData.email}</p>
            {/* Render other user data as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
