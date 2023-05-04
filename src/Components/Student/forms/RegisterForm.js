import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../view/Nav";
import "../../../styles/RegistrationForm.css";
import student_img from "../../../images/img4.webp";

function RegisterForm() {
  return (
    <>
    <Nav/>
    <div class="container-fluid registration-container">
      <div class="row">
      <div className="student-img-box col-md-6">
          <img className="student-img" src={student_img}/>
        </div>
      <div className="register-form-box col-md-6">
      <form class="row g-3">
        <h5 className="heading">Student Registration Form</h5>
        <div class="col-md-6">
          <label for="autoSizingInput" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="autoSizingInput"
            placeholder="Enter your name..."
          />
        </div>
        <div class="col-md-6">
          <label for="typeNumber" class="form-label">
            Id No.
          </label>
          <input
            type="number"
            class="form-control"
            id="typeNumber"
            placeholder="Enter your Id No."
          />
        </div>
        <div class="col-md-6">
          <label for="input-group-text" class="form-label">
            Branch
          </label>
          <select class="form-select" id="inputGroupSelect">
            <option selected>Select your Branch</option>
            <option value="1">Information Technology</option>
            <option value="2">Computer Engineering</option>
            <option value="3">Mechanical Engineering</option>
            <option value="4">Civil Engineering</option>
            <option value="5">Electrical Engineering</option>
            <option value="6">Agricultural Engineering</option>
            <option value="7">Electrical and Communication Engineering</option>
            <option value="8">Industrial and Production Engineering</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="staticEmail" class="form-label">
            Email Id
          </label>
          <input
            type="email"
            class="form-control"
            id="staticEmail"
            placeholder="Enter your email id"
          />
        </div>
        <div class="col-md-6">
          <label for="input-group-text" class="form-label">
            Hostel
          </label>
          <select class="form-select" id="inputGroupSelect">
            <option selected>Select your Hostel</option>
            <option value="1">Tagore Bhawan</option>
            <option value="2">Patel Bhawan</option>
            <option value="3">S.J Bhawan</option>
            <option value="4">V.S Bhawan</option>
            <option value="5">Shashtri Bhawan</option>
            <option value="6">Shivalik Bhawan</option>
            <option value="7">Mandakini Bhawan</option>
            <option value="8">Saraswati Bhawan</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="autoSizingInput" class="form-label">
            Room No.
          </label>
          <input
            type="text"
            class="form-control"
            id="autoSizingInput"
            placeholder="Enter your room no."
          />
        </div>
        <div class="col-md-6">
          <label for="typePhone" class="form-label">
            Parents Mobile No.
          </label>
          <input
            type="tel"
            class="form-control"
            id="typePhone"
            placeholder="Enter your Parents Phone No."
          />
        </div>
        <div class="col-md-6">
          <label for="staticEmail" class="form-label">
            Email of Parents
          </label>
          <input
            type="email"
            class="form-control"
            id="staticEmail"
            placeholder="Enter the email of parents"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Enter your password..."
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="inputPassword4"
            placeholder="Confirm your password..."
          />
        </div>
        <div class="col-md-6">
          <label for="autoSizingInput" class="form-label">
            Name of Adviser
          </label>
          <input
            type="text"
            class="form-control"
            id="autoSizingInput"
            placeholder="Enter the name of your adviser"
          />
        </div>
        <div class="d-grid gap-2 mt-2 mt-4">
          <button type="submit" class="btn btn-dark">
            Register
          </button>
        </div>
      </form>
      </div>
      </div>
    </div>
    </>
  );
}

export default RegisterForm;
