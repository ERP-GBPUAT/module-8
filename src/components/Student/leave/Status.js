import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import myImg from "../../../images/Divyanshu_Sonwal.jpg";
import approveImg from "../../../images/correct.png";
import rejectImg from "../../../images/declined.png";
import pendingImg from "../../../images/clock.png";
import LeaveForm from "./Leave";
import Modal from "../view/Modal";
import "./Status.css";

function LeaveStatus(props) {
  const [pdfUrl, setPdfUrl] = useState("");
  const leaveDataArr = JSON.parse(localStorage.getItem("leaveData"));
  const advisorStatus = leaveDataArr[props.idx].advisorApproval;
  const wardenStatus = leaveDataArr[props.idx].wardenApproval;

  const fetchPdfUrl = async () => {
    // const file = event.target.files[0];
    // console.log(event.target.files);
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(leaveDataArr[props.idx].pdfFile);
    const downloadURL = await fileRef.getDownloadURL();
    setPdfUrl(downloadURL);
    console.log("downloadUrl is :" + downloadURL);
    console.log(downloadURL);
  };

  useEffect(() => {
    fetchPdfUrl();
  }, []);

  const showAlertMessage = () => {
    return (
      <div class="alert alert-primary" role="alert">
        File not uploaded!
      </div>
    );
  };

  function showWardenStatus() {
    return (
      <>
        {(() => {
          if (wardenStatus === true) {
            return (
              <img
                style={{ height: "20px" }}
                src={approveImg}
                alt="approved"
              ></img>
            );
          } else if (wardenStatus === false) {
            return (
              <img
                style={{ height: "20px" }}
                src={rejectImg}
                alt="rejected"
              ></img>
            );
          } else {
            return (
              <img
                style={{ height: "20px" }}
                src={pendingImg}
                alt="pending"
              ></img>
            );
          }
        })()}
      </>
    );
  }

  function showAdvisorStatus() {
    return (
      <>
        {(() => {
          if (advisorStatus === true) {
            return (
              <img
                style={{ height: "20px" }}
                src={approveImg}
                alt="approved"
              ></img>
            );
          } else if (advisorStatus === false) {
            return (
              <img
                style={{ height: "20px" }}
                src={rejectImg}
                alt="rejected"
              ></img>
            );
          } else {
            return (
              <img
                style={{ height: "20px" }}
                src={pendingImg}
                alt="pending"
              ></img>
            );
          }
        })()}
      </>
    );
  }
  return (
    <>
      <div className="status-box container">
        <h4 className="heading">Student Leave Details</h4>
        <div className="left">
          <img
            className="my-img"
            src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg"
            alt="Profile"
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
          <div className="up">
            <p>Type of Leave: {leaveDataArr[props.idx].leaveType}</p>
            <p>Start Date: {leaveDataArr[props.idx].startDate}</p>
            <p>End Date: {leaveDataArr[props.idx].endDate}</p>
            <p>Parents Mobile no.: {leaveDataArr[props.idx].parentNo}</p>
            <p className="status-msg">
              Approved by: <span>Warden&nbsp;&nbsp;</span>
              {showWardenStatus()}
              <span>&nbsp;&nbsp;&nbsp;</span>
              <span>Advisor&nbsp;&nbsp;</span>
              {showAdvisorStatus()}
            </p>
          </div>
          <div className="down">
            <p style={{ fontWeight: "bold", marginBottom: "6px" }}>
              Reason for leave
            </p>
            <p style={{ fontSize: "13px" }}>{leaveDataArr[props.idx].reason}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveStatus;
