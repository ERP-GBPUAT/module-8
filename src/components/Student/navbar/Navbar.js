import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import Modal from "../view/Modal";
import Leave from "../leave/Leave";
import "./Navbar.css";
import logo from "../../../images/gbpuat1.png";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();

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
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="https://gbpuat.ac.in/contact/index.html"
                >
                  Contact Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Leaves
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" onClick={openModal}>
                      Apply for Leave(s)
                    </button>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Manage Leave(s)
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={()=>navigate("/leaveStats")}>
                      View Stats
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* <FontAwesomeIcon icon={faPowerOff} className="text-primary" style={{ fontSize: '2rem', padding: '1rem' }} /> */}
            <form className="d-flex login-form">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      {showModal && (
        <Modal onClose={closeModal}>
          <Leave />
        </Modal>
      )}
    </>
  );
}

export default Navbar;
