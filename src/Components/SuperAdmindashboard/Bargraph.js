import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["", "Actice", "Deactivated"],
  ["jan", 1400, 750],
  ["feb", 600, 300],
  ["mar", 500, 800],
  ["apr", 900, 750],
  ["may", 1600, 300],
  ["jun", 1100, 750],
  ["jul", 1400, 700],
  ["aug", 350, 600],
  ["sep", 500, 800],
  ["oct", 900, 700],
  ["nov", 1600, 300],
  ["dec", 1100, 350]
];

const options = {
  bar: { groupWidth: "100" },
  trendlines: {
    0: {
      type: "linear",
      color: "green",
      lineWidth: 10,
      opacity: 0.3,
      showR2: true,
      visibleInLegend: true
    }
  }
};

export default function Bargraph() {
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