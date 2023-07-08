import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import myImg from "../../../images/Divyanshu_Sonwal.jpg";
import approveImg from "../../../images/correct.png";
import "./Status.css";

function AdvisorLeaveStatus(props) {
  const [pdfUrl, setPdfUrl] = useState("");
  const leaveDataArr = JSON.parse(localStorage.getItem("leaveData"));
  function setApprove() {
    leaveDataArr[props.idx].advisorApproval = true;
    localStorage.setItem("leaveData", JSON.stringify(leaveDataArr));
  }

  function setReject() {
    leaveDataArr[props.idx].advisorApproval = false;
    localStorage.setItem("leaveData", JSON.stringify(leaveDataArr));
  }

  const fetchPdfUrl = async () => {
    // const file = event.target.files[0];
    // console.log(event.target.files);
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(leaveDataArr[props.idx].pdfFile);
    const downloadURL = await fileRef.getDownloadURL();
    setPdfUrl(downloadURL);
    console.log("downloadUrl is :" + downloadURL);
  };

  useEffect(() => {
    fetchPdfUrl();
  }, []);

  const handleViewPDF = () => {
    window.open(`/pdf-viewer?url=${encodeURIComponent(pdfUrl)}`, "_blank");
  };

  return (
    <div className="status-box container">
      <h4 className="heading">Student Leave Details</h4>
      <div className="left">
        <img
          className="my-img"
          src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
          alt="profile-img"
        ></img>
        <p className="student-name" style={{ fontWeight: "bold" }}>
          {leaveDataArr[props.idx].username}
        </p>
        <p>Student Id: {leaveDataArr[props.idx].id}</p>
        <p>Branch: {leaveDataArr[props.idx].branch}</p>
        <p>Advisor Code: {leaveDataArr[props.idx].advisorCode}</p>
        <p>Email: abc@gmail.com</p>
        <p>Mobile no.: 7817xxxx</p>
        <button className="btn btn-dark mt-3">
          <Link
            to={{
              pathname: "/pdf-viewer",
              search: `?url=${encodeURIComponent(pdfUrl)}`,
            }}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            View Parent Application
          </Link>
        </button>
      </div>
      <div className="right">
        <div className="upper">
          <p>Type of Leave: {leaveDataArr[props.idx].leaveType}</p>
          <p>Start Date: {leaveDataArr[props.idx].startDate}</p>
          <p>End Date: {leaveDataArr[props.idx].endDate}</p>
          <p>Parents Mobile no.: {leaveDataArr[props.idx].parentNo}</p>
        </div>
        <div className="down">
          <p style={{ fontWeight: "bold", marginBottom: "6px" }}>
            Reason for leave
          </p>
          <p style={{ fontSize: "13px" }}>{leaveDataArr[props.idx].reason}</p>
        </div>
        <form className="decision">
          <button
            type="submit"
            className="btn btn-primary mt-3 mx-1"
            onClick={() => {
              setApprove();
            }}
          >
            Approve
          </button>
          <button
            type="submit"
            className="btn btn-danger mt-3 mx-1"
            onClick={() => {
              setReject();
            }}
          >
            Reject
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdvisorLeaveStatus;
