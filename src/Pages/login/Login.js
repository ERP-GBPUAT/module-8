import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterForm from "../register/Register";
import Navbar from "../../components/Student/navbar/Navbar";
import Profile from "../../components/Student/profile/Profile";
import leaveDataArr from "../../components/Student/view/LeaveData";
import "./Login.css";
import img from "../../images/Gbpuat.png";
import logo from "../../images/gbpuat1.png";

function LoginForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [person, setPerson] = useState("");
  const [values, setValues] = useState(initialValues);

  const setLoginPerson = (e) => {
    setPerson(e.target.value);
  };

  function checkPerson() {
    localStorage.setItem("isDataSaved", true);
    if (values.username !== "" && values.email !== "") {
      if (
        person === "student" &&
        values.username === "Divyanshu Sonwal" &&
        values.password === "Erpgroup8" &&
        values.email === "divyanshu@gmail.com"
      ) {
        navigate("/studentDashboard");
        localStorage.setItem("student", JSON.stringify(values));
      } else if (
        person === "advisor" &&
        values.username === "Govind Verma" &&
        values.password === "Erpgroup8" &&
        values.email === "govindsir@gmail.com"
      ) {
        navigate("/advisorDashboard");
        localStorage.setItem("advisor", JSON.stringify(values));
      } else if (
        person === "warden" &&
        values.username === "Deepak Kumar" &&
        values.password === "Erpgroup8" &&
        values.email === "deepaksir@gmail.com"
      ) {
        navigate("/wardenDashboard");
        localStorage.setItem("warden", JSON.stringify(values));
      }
    }
  }

  // function checkPerson() {
  //   localStorage.setItem("isDataSaved", true);
  //   if (values.username !== "" && values.email !== "") {
  //     if (person === "student") {
  //       navigate("/student");
  //       localStorage.setItem("student", JSON.stringify(values));
  //     } else if (person === "advisor") {
  //       navigate("/advisor");
  //       localStorage.setItem("advisor", JSON.stringify(values));
  //     } else if (person === "warden") {
  //       navigate("/warden");
  //       localStorage.setItem("warden", JSON.stringify(values));
  //     }
  //   }
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <div className="login-nav bg-light">
        <img className="me-2" src={logo} />
        <div>
          Govind Ballabh Pant University of Agriculture and Technology
          <br />
          Student Leave Management System
        </div>
      </div>
      <div className="container login-container">
        <div className="img-box col-md-6">
          <img className="img" src={img} />
        </div>
        <div className="login-form-box col-md-6">
          <form className="login-form">
            <h5 className="mb-4">Sign into your account</h5>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Username"
                value={values.username}
                name="username"
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="staticEmail"
                placeholder="Email"
                value={values.email}
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={handleInputChange}
                minlength="8"
                maxlength="16"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                disallowedwords="{{username}}"
                required
              />
            </div>
            <div className="leave-type my-3">
              <div class="form-check pe-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="student"
                  onChange={setLoginPerson}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Student
                </label>
              </div>
              <div class="form-check pe-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="advisor"
                  onChange={setLoginPerson}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Advisor
                </label>
              </div>
              <div class="form-check pe-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  value="warden"
                  onChange={setLoginPerson}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Warden
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 mt-2">
              <button
                type="submit"
                class="btn btn-dark"
                onClick={() => checkPerson()}
              >
                Login
              </button>
            </div>
            <p className="mt-3">
              Don't have an account?&nbsp;
              <a href="/student-register">Register Here</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
