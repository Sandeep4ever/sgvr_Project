import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["", ""],
  ["Jan", 25],
  ["Feb", 40],
  ["Mar", 35],
  ["Apr", 25],
  ["May", 35],
  ["Jun", 60],
  ["July",35],
  ["Aug", 40],
  ["Sep", 55],
  ["Oct", 50],
  ["Nov", 45],
  ["Dec", 50],
];

const options = {
  backgroundColor:{color:"#FFFFFF"},
  colors: ['#D8AE25'],
};

export default function Ongraph() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}