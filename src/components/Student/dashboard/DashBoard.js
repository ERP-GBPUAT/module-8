import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../../../images/gbpuat1.png";
import HomePage from "../homepage/HomePage";
import "./DashBoard.css";
import Sidebar from "../sidebar/Sidebar";

const DashBoard = () => {
  return (
    <>
    <div className="profile-page">
      <Sidebar/>
      <div>
      <div className="login-nav bg-light">
        <img className="me-2" src={logo} />
        <div>
          Govind Ballabh Pant University of Agriculture and Technology
          <br />
          Student Leave Management System
        </div>
      </div>
      <HomePage/>
      </div>
    </div>
    </>
  );
};
export default DashBoard;
