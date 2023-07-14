import React from "react";
import PersistentDrawerLeft from "./Drawer";
import { Helmet } from "react-helmet";
import { Pie} from "./Piechart"
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import Back from "./Back";
import ComboBox from "./Select";
import BasicArea from "./LineChart";
import SelectAllTransferList from "./Transfer";

const Home = () => {
  const css = require("../css/home.css").toString();
    const user = useSelector(selectUser);
          console.log(user);
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
            <input type="number" name="income" placeholder="$"></input>
            <input type="button" value="Add to Revenue"></input>
        </div>
      </div>

      <Back />
    </>
  );
};

export default Home;
