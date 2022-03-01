import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["", ""],
    ["jan", 0],
    ["feb", 10],
    ["mar", 30],
    ["apr", 40],
    ["may", 40],
    ["jun", 50],
    ["jul", 50],
    ["aug", 40],
    ["sep", 40],
    ["oct", 30],
    ["nov", 20],
    ["dec", 0]
];

export const options = {
    isStacked: true,
    height: 241,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
    colors: ['#D8AE25'],
    chartArea: { width:"690px" , height: "241px" },
};

export default function Donation() {
  return (
    <Chart
      chartType="AreaChart"
      width="690px"
      height="241px"
      data={data}
      options={options}
    />
  );
}