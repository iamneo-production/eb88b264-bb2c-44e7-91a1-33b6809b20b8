import React from "react";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { Pie } from "./Piechart";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Back from "./Back";
import ComboBox from "./Select";
import BasicArea from "./LineChart";
import SelectAllTransferList from "./Transfer";
import { useState } from "react";

const Home = () => {
  const css = require("../css/home.css").toString();
  const user = useSelector(selectUser);
  console.log(user);
  const [income, setIncome] = useState(0);
  const handleChange = (e) => {
    setIncome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome("$");
  };
  return (
    <>
      <Helmet>{css}</Helmet>
      <div className="navbar">
        <PersistentDrawerLeft style={{ display: "block" }} />
      </div>
      <div className="alignhome">
        <div className="pie">
          <Pie />
          <ComboBox />
        </div>
        {/* <div class="marquee-container">
        <p class="marquee">
          LONDON - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME
        </p>
      </div> */}
        <div className="pie">
          <h3 id="we">Revenue</h3>
          <BasicArea />
        </div>
        <div className="pie">
          <SelectAllTransferList />
        </div>
        <div className="pie1">
          <h3>Surplus</h3>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="income"
              value={income}
              placeholder="$"
              onChange={handleChange}
            ></input>
            <input type="submit" value="Add to Revenue"></input>
            <br />
            <br />
          </form>
        </div>
      </div>

      <Back />
    </>
  );
};

export default Home;
