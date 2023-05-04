import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Student/view/Nav";
import "../../styles/LoginForm.css";
import img from "../../images/Gbpuat.png";

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
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email Id"
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
          <div className="d-grid gap-2 mt-2">
            <button type="submit" class="btn btn-dark" onClick={()=>navigate("/admin")}>
              Login
            </button>
          </div>
          <p className="mt-3"><a href="/">Login as student</a></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
