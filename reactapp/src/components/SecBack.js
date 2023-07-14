import React from "react";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Back from "./Back";

const SecBack = () => {
  const css = require("../css/home.css").toString();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="navbar">
        <PersistentDrawerLeft style={{ display: "block" }} />
      </div>
      <Back />
    </>
  );
};

export default SecBack;
