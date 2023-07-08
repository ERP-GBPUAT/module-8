import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Sidebar from "../Student/sidebar/Sidebar";
import logo from "../../images/gbpuat1.png";
import statsImg from "../../images/stats.png";
import "./BarGraph.css";

const BarChart = () => {
  const barChartData = {
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
        data: [10, 12, 6, 8, 11, 15, 3, 7, 8, 5, 13, 2],
        label: "Leaves Taken",
        borderColor: "#3333ff",
        backgroundColor: [
          "#fd7f6f",
          "#7eb0d5",
          "#b2e061",
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#fdcce5",
          "#8bd3c7",
        ],
        fill: true,
      },
    ],
  };

  const barChart = (
    <Bar
      type="bar"
      width={130}
      height={500}
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
      data={barChartData}
    />
  );
  return (
    <div className="profile-page">
      <Sidebar />
      <div>
        <div className="login-nav bg-light">
          <img className="me-2" src={logo} alt="college-logo" />
          <div>
            Govind Ballabh Pant University of Agriculture and Technology
            <br />
            Student Leave Management System
          </div>
        </div>
        <div style={{marginLeft:"30rem"}}>
        <img style={{height:"3rem", marginBottom: "1.3rem"}} src={statsImg} alt="leave-stats"/>
        <span style={{marginLeft:"1rem",marginTop: "10rem", fontSize:"22px", fontWeight:"500"}}>Leave Stats(Leaves per Month)</span>
        </div>
        <div className="bar-graph">{barChart}</div>
      </div>
    </div>
  );
};

export default BarChart;
