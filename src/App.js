import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import Navbar from "./components/Student/navbar/Navbar";
import Home from "./components/Student/profile/Profile";
import LoginForm from "./Pages/login/Login";
import RegisterForm from "./Pages/register/Register";
import AdvisorProfile from "./components/Admin/profile/Advisorprofile";
import AdminNavbar from "./components/Admin/AdminNav";
import LeaveStatus from "./components/Student/leave/Status";
import TrialProfile from "./components/Trial/Profile";
import PDFViewer from "./components/Student/view/PDFViewer";
import BarChart from "./components/Trial/BarChart";
import AdvisorBarChart from "./components/Admin/graph/AdvisorChart";
import WardenBarChart from "./components/Admin/graph/WardenChart";
import PieChart from "./components/Trial/PieChart";
import DashBoard from "./components/Student/dashboard/DashBoard";
import HomePage from "./components/Student/homepage/HomePage";
import MyProfile from "./components/Trial/MyProfile";
import MyLeave from "./components/Trial/MyLeave";
import AdvisorDashboard from "./components/Admin/dashboard/AdvisorDashboard";
import WardenDashboard from "./components/Admin/dashboard/WardenDashboard";
import WardenProfile from "./components/Admin/profile/WardenProfile";
import "./App.css";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCZ2tg1fW92KA6YyjFva6p0aKv_QMao51U",
    authDomain: "leavemanagementapp-c3dcb.firebaseapp.com",
    projectId: "leavemanagementapp-c3dcb",
    storageBucket: "leavemanagementapp-c3dcb.appspot.com",
    messagingSenderId: "757012663055",
    appId: "1:757012663055:web:06c953b98c149fa674cc7a",
    measurementId: "G-4HFCK94XC3",
  };
  firebase.initializeApp(firebaseConfig);
  if (!localStorage.getItem("all-data")) {
    localStorage.removeItem("isDataSaved");
    localStorage.setItem("all-data", true);
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route
          exact
          path="/studentDashboard"
          element={
            <>
              <DashBoard />
            </>
          }
        />
        {/* <Route exact path='/' element={<BarChart/>}/> */}
        {/* <Route exact path='/' element={<PieChart/>}/> */}
        <Route exact path="/status" element={<LeaveStatus />} />
        <Route exact path="/studentLeaveAnalytics" element={<BarChart />} />
        <Route exact path="/advisorLeaveAnalytics" element={<AdvisorBarChart />} />
        <Route exact path="/wardenLeaveAnalytics" element={<WardenBarChart />} />
        <Route
          exact
          path="/studentProfile"
          element={
            <>
              <MyProfile />
            </>
          }
        />
        <Route
          exact
          path="/advisorProfile"
          element={
            <>
              <AdvisorProfile />
            </>
          }
        />
        <Route exact path="/student-register" element={<RegisterForm />} />
        <Route
          exact
          path="/advisorDashboard"
          element={
            <>
              <AdvisorDashboard />
            </>
          }
        />
        <Route
          exact
          path="/wardenDashboard"
          element={
            <>
              <WardenDashboard />
            </>
          }
        />
        <Route
          exact
          path="/wardenProfile"
          element={
            <>
              <WardenProfile />
            </>
          }
        />
        <Route exact path="/pdf-viewer" element={<PDFViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
