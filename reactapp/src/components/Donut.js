import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Products", "In Stock"], 
  ["Free Space", 900],["Stationaries", 200],
  ["Office Accessories", 400],
  ["Duty Sheets", 150],
  ["Electrical", 430],
  ["Service", 337],
];

export const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Warehouse Stock Level",
  pieHole: 0.4,
  pieStartAngle: 100,
  slices: {
    0: { color: "#47A992" },
    1: { color: "#482121" },
    2: { color: "#CC9544" },
    3: { color: "#603601" },
    4: { color: "#361500" },
  },
};

export function Donut() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default Donut;
