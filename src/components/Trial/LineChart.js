import React from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
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
          8, 13, 12, 15, 11, 10, 9,
          14, 16, 13, 7, 10,
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
    <Line
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
          height: "300px",
          width: "350px",
          marginLeft: "3rem",
          marginTop: "2rem",
        }}
      >
        <h6 style={{marginLeft: "120px", marginBottom: "1rem"}}>Leaves Line Chart</h6>
        {pieChart}
      </div>
      
    </>
  );
};
export default LineChart;
