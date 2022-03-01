import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["X", "Y"],
  [1, 30],
  [2, 45],
  [3, 65],
  [4, 60],
  [5, 58],
  [6, 52],
  [7, 48],
  [8, 45],
  [9, 45],
  [10, 48],
  [11, 58],
  [12, 59],
  [13, 52],
  [14, 50],
  [15, 50],
  [16, 58],
];

const options = {
  series: {
    0: {
      annotations: {
        textStyle: { fontSize: 12, color: "white" },
      },
    },
  },
  hAxis: { gridlines: { color: "white" }, textStyle: { color: "#666666" } },
  vAxis: { gridlines: { color: "white" }, vAxis: { minValue: 0 } },
  crosshair: { focused: { color: "white", opacity: 0.8 } },
  chartArea: { left: 20, top: 0, width: "100%", height: "80%" },
  colors: ["#DFB93E"],
  backgroundColor: { strokeWidth: "0px" },
  areaOpacity: 10,
  explorer: { axis: "vertical" },
  isStacked: true,
  pointSize: 12,
  pointColor: "white",
  legend: { position: "top", maxLines: 3 },
};

export default function AreaChart() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
}
