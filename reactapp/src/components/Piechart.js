import React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Expenses", "In Dollars"],
  ["Employees", 78930],
  ["Office Supplies",1000],
  ["Production Supplies", 45000],
  ["Transport", 34120],
  ["Tax", 17937],
];

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
export default Pie;