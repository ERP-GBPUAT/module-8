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

const Sidebar = () => {
  return (
    <div>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "inherit" }}
            >
              GBPUAT
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink
                exact
                to="/wardenDashboard"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/wardenProfile"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="user">
                  Profile page
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/wardenLeaveAnalytics"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="chart-line">
                  Leave Stats
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/hero404"
                activeClassName="activeClicked"
              ></NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
          <NavLink
                exact
                to="/"
                activeClassName="activeClicked"
              >
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <button
              style={{
                marginBottom: "2rem",
                marginRight: "1.8rem"
              }}
              className="btn btn-danger"
            >
              Logout
            </button>
          </CDBSidebarFooter>
          </NavLink>
        </CDBSidebar>
      </div>
    </div>
  );
};

export default Sidebar;