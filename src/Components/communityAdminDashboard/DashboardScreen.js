import { styled } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
   
    
    
  ],
  ["jen",  480, 938],
  ["Feb", 135, 1120],
  ["March", 157, 1167],
  ["April", 139, 1110],
  ["May", 136, 691],
];

 


export const data1 = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"], // RGB value
  ["Silver", 10.49, "silver"], // English color name
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
];

export const options = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  
  colors: ['black', 'blue'],
  series: { 2: { type: "line" } },
  
};
function App() {
  return (
    <div style={{width: "100%"}}>
        
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        style={{}}
      />
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data1} />
    </div>
  );
}
export default App;
