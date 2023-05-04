import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Student/view/Navbar";
import Home from "./Components/Student/view/Profile";
import LoginForm from "./Components/Student/forms/LoginForm";
import AdminLoginForm from "./Components/Admin/LoginForm";
import RegisterForm from "./Components/Student/forms/RegisterForm";
import AdminProfile from "./Components/Admin/Profile";
import AdminNavbar from "./Components/Admin/AdminNav";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<LoginForm/>}/>
        <Route exact path='/admin-login' element={<AdminLoginForm/>}/>
        <Route exact path='/student' element={<><Navbar/><Home/></>}/>
        <Route exact path='/student-register' element={<RegisterForm/>}/>
        <Route exact path='/admin' element={<><AdminNavbar/><AdminProfile/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
