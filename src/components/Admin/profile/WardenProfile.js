import React from "react";
import Sidebar from "../sidebar/WardenSidebar";
import logo from "../../../images/gbpuat1.png";
import profileImg from "../../../images/Divyanshu_Sonwal.jpg"
import advisorImg from "../../../images/user.png";
import collegeimg from "../../../images/slide-1596859016-82527.jpg";
import "../../Trial/MyProfile.css";

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
                  Deepak Kumar
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Id
                </h6>
                <p className="my-details">TITDK</p>
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
                  deepaksir@gmail.com
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  Contact No.
                </h6>
                <p className="my-details">
                  7817847890
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
                  Qualification
                </h6>
                <p className="my-details">
                  M.Tech
                </p>
                <hr/>
              </div>
              <div class="col-6">
                <h6 for="autoSizingInput" class="form-label">
                  Address
                </h6>
                <p className="my-details">
                  Pantnagar
                </p>
                <hr/>
              </div>
              <div class="col-md-6">
                <h6 for="autoSizingInput" class="form-label">
                  DOB
                </h6>
                <p className="my-details">
                  13/09/1992
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