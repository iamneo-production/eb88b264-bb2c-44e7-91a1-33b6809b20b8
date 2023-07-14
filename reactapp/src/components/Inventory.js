import React from "react";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Back from "./Back";
import StickyHeadTable from "./Table";
import Donut from "./Donut";
import BasicTable from "./TableContact";
const Inventory = () => {
  const css = require("../css/home.css").toString();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="navbar">
        <PersistentDrawerLeft style={{ display: "block" }} />
      </div>
      <div className="align">
        <div className="pie">
          <StickyHeadTable />
        </div>
        <div className="pie">
          <Donut />
        </div>
        <div className="align2">
          <div className="pie">
            <h3>Emergency Warehouse Contact</h3>
            <BasicTable />
          </div>
        </div>
      </div>
      <Back />
    </>
  );
};

export default Inventory;
