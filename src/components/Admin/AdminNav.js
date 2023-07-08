import React, {Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
// import Nav from "../Student/view/Nav";
import '../../styles/styles.css';
import logo from '../../images/gbpuat1.png';

function AdminNavbar () {
    const navigate = useNavigate();

    return (
      <>
      <div className="login-nav bg-light">
            <img className="me-2" src={logo}/>
            <div>Govind Ballabh Pant University of Agriculture and Technology<br/>
            Student Leave Management System
            </div>
        </div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div class="container-fluid">
          {/* <img className="me-2" src={logo}/> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <FontAwesomeIcon icon={faHouse} className="text-primary" style={{ fontSize: '2rem' }} /> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="https://gbpuat.ac.in/contact/index.html">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <FontAwesomeIcon icon={faPowerOff} className="text-primary" style={{ fontSize: '2rem', padding: '1rem' }} /> */}
            <form className="d-flex login-form">
              <button type="submit" class="btn btn-primary" onClick={()=>navigate("/")}>
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      </>
    );
}

export default AdminNavbar;
