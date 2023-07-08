import React from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const pieChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [
          2137119, 1814119, 1481119, 4137119, 5137119, 3134119, 1137119,
          4133119, 5257101, 2037110, 3137119, 2937119,
        ],
        label: "Leaves Taken",
        backgroundColor: [
          "#e60049",
          "#0bb4ff",
          "#50e991",
          "#e6d800",
          "#9b19f5",
          "#ffa300",
          "#dc0ab4",
          "#b3d4ff",
          "#00bfa0",
        ],
        hoverBackgroundColor: [
          "#b30000",
          "#4421af",
          "#5ad45a",
          "#e6d900",
          "#9b19f9",
          "#00b7c7",
          "#8be04e",
          "#0d88e6",
          "#ebdc78",
        ],
      },
    ],
  };
  const pieChart = (
    <Pie
      type="line"
      width={130}
      height={250}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15,
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top", //Position of the legend.
        },
        maintainAspectRatio: false,
      }}
      data={pieChartData}
    />
  );
  return (
    <>
      <div
        style={{
          height: "280px",
          width: "350px",
          marginLeft: "3rem",
          marginTop: "1rem",
        }}
      >
        <h6 style={{marginLeft: "120px"}}>Leaves Pie Chart</h6>
        {pieChart}
      </div>
      
    </>
  );
};
export default PieChart;
