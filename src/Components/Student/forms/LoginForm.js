import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import Navbar from "../view/Navbar";
import Profile from "../view/Profile";
import Nav from "../view/Nav";
import "../../../styles/LoginForm.css";
import img from "../../../images/Gbpuat.png";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <>
    <Nav/>
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
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="staticEmail"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="leave-type my-3">
            <div class="form-check pe-2">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
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
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Warden
              </label>
            </div>
            </div>
          <div className="d-grid gap-2 mt-2">
            <button type="submit" class="btn btn-dark" onClick={()=>navigate("/student")}>
              Login
            </button>
          </div>
          <p className="mt-3">
            Don't have an account?&nbsp;
            <a href="/student-register">Register Here</a>
          </p>
          <a href="/admin-login">Login as admin</a>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
