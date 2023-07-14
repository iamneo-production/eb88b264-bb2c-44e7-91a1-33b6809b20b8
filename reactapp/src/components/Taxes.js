import React from "react";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Back from "./Back";
import Calc from "./TaxCalculator";
import BasicTable from "./Taxref";

const Taxes = () => {
  const css = require("../css/home.css").toString();
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="navbar">
        <PersistentDrawerLeft style={{ display: "block" }} />
      </div>
      <div className="aligntax">
        <div className="pie">
          <Calc />
        </div>
        <div className="pie">
          <BasicTable />
        </div>
      </div>
      <Back />
    </>
  );
};

export default Taxes;
