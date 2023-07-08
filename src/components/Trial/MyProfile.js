import React from "react";
import Sidebar from "../Student/sidebar/Sidebar";
import logo from "../../images/gbpuat1.png";
import profileImg from "../../images/Divyanshu_Sonwal.jpg"
import advisorImg from "../../images/user.png";
import wardenImg from "../../images/subodh_prasad.jpg";
import collegeimg from "../../images/slide-1596859016-82527.jpg";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <>
      <div className="profile-page">
        <Sidebar />
        <div>
          <div className="login-nav bg-light">
            <img className="me-2" src={logo} alt="college-logo" />
            <div >
              Govind Ballabh Pant University of Agriculture and Technology
              <br />
              Student Leave Management System
              <br />
              Profile Page
            </div>
          </div>
          <div className="my-profile">
          <img style={{height:"11rem", width:"50rem", borderRadius: "10px 10px 0px 0px"}} src={collegeimg} alt="college-img"/>
            <img
              className="profile-img"
              src={advisorImg}
              alt="Profile"
            ></img>
            <div style={{paddingRight:"30px", paddingLeft:"40px"}}>
            <form class="profile-form row g-3">
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Name
                </h6>
                <p className="my-details">
                  Divyanshu Sonwal
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Id
                </h6>
                <p className="my-details">55094</p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Department
                </h6>
                <p className="my-details">
                  Information Technology
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Email
                </h6>
                <p className="my-details">
                  divyanshu@gmail.com
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Contact No.
                </h6>
                <p className="my-details">
                  7817846983
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Designation
                </h6>
                <p className="my-details">
                  Assistant Professor
                </p>
                <hr/>
              </div>
              <div class="col-6">
                <h6 for="autoSizingInput" class="form-label">
                  Father's Name
                </h6>
                <p className="my-details">
                  D.R. Sonwal
                </p>
                <hr/>
              </div>
              <div class="col-6">
                <h6 for="autoSizingInput" class="form-label">
                  Mother's Name
                </h6>
                <p className="my-details">
                  Mamta Sonwal
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  DOB
                </h6>
                <p className="my-details">
                  03/05/2001
                </p>
                <hr/>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
