import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const years = [
  new Date(1990, 0, 1),
  new Date(1991, 0, 1),
  new Date(1992, 0, 1),
  new Date(1993, 0, 1),
  new Date(1994, 0, 1),
  new Date(1995, 0, 1),
  new Date(1996, 0, 1),
  new Date(1997, 0, 1),
  new Date(1998, 0, 1),
  new Date(1999, 0, 1),
  new Date(2000, 0, 1),
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
];
const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
  30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44,
  35528.715, 36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582,
  43189, 43320, 43413, 43922, 44293, 44689, 45619.785, 46177.617,
];

export default function BasicArea() {
  return (
    <LineChart
      sx={{
        "& .MuiLineElement-root": {
          strokeDasharray: "10 5",
          strokeWidth: 4,
        },
        "& .MuiMarkElement-root": {
          display: "none",
        },
        "& .MuiAreaElement-series-Germany": {
          fill: "url('#myGradient')",
        },
      }}
      xAxis={[
        {
          id: "Years",
          data: years,
          scaleType: "time",
          valueFormatter: (date) => date.getFullYear(),
        },
      ]}
      series={[
        {
          id: "Germany",
          data: GermanyGDPperCapita,
          stack: "total",
          area: true,
        },
      ]}
      margin={{ left: 60, top: 10, right: 20 }}
      width={600}
      height={430}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#47A992" />

          <stop offset="97%" stopColor="#DFD7BF" />
        </linearGradient>
      </defs>
    </LineChart>
  );
}
