import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Chart } from "react-google-charts";
// export const li = [
//   ["Expenses", "In Thousand USD"],
//   ["Staff", 32000],
//   ["Transport", 24000],
//   ["Office Supplies", 12000],
//   ["Production Supplies", 36000],
//   ["Mishap Overcome", 8000],
// ];
export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Fiscal Quarter Expenses",
  pieStartAngle: 100,
  slices: {
    0: { color: "#47A992" },
    1: { color: "#482121" },
    2: { color: "#CC9544" },
    3: { color: "#603601" },
    4: { color: "#361500" },
  },
};
   export function Pie() {
     const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/auth/inv/all";
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.map((res) => [res.item_name, res.invntry_quantity]);
        console.log(data);
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message, error.stack);
      });
  }, []);
  return (
    <Chart
      chartType="PieChart"
      data={[["Expenses", "In Thousand USD"], ...chartData]}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default Pie;
