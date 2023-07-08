import React, {useState} from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineChart from "../../Trial/LineChart";
import Modal from "../../Student/view/Modal";
import LeaveForm from "../../Student/leave/Leave";
import Sidebar from "../sidebar/WardenSidebar";
import Status from "../leave/WardenStatus";
import "./Homepage.css";

const HomePage = () => {
    const savedData = window.localStorage.getItem("leaveData");
    const leaveDataArr = JSON.parse(savedData);
    const [showModal, setShowModal] = useState(false);
    const [index,setIndex] = useState(0);
  
    const openModal = (index) => {
      setShowModal(true);
      setIndex(index);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const username = JSON.parse(localStorage.getItem("warden")).username;
    const email = JSON.parse(localStorage.getItem("warden")).email;
  return (
    <>
      <div className="Black-box">
        <FontAwesomeIcon
          icon={faUser}
          className="text-white"
          style={{ fontSize: "8rem" }}
        />
        <div>
          <h4 className="User-name">{username}</h4>
          <h4 className="User-name">Information Technology</h4>
          <h5 className="User-name">{email}</h5>
        </div>
      </div>
      <div className="profile-details-box">
        <div className="left-profile">
          <div className="leavebox-container">
            <div className="Red-box">
              <div className="leaves">
                <h6>Total Leaves</h6>
                <h6>15</h6>
              </div>
            </div>
            <div className="Blue-box">
              <div className="leaves">
                <h6>Approved Leaves</h6>
                <h6>8</h6>
              </div>
            </div>
            <div className="Green-box">
              <div className="leaves">
                <h6>Rejected Leaves</h6>
                <h6>7</h6>
              </div>
            </div>
          </div>
          <table class="table table-bordered caption-top profile-table">
            <caption>List of Leaves</caption>
            <thead class="table-dark" style={{fontSize:"13px"}}>
              <tr style={{fontSize:"13px"}}>
                <th scope="col">S.No.</th>
                <th scope="col">Leave type</th>
                <th scope="col">Start date</th>
                <th scope="col">End date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
            {leaveDataArr.map((data, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{data.leaveType}</td>
              <td>{data.startDate}</td>
              <td>{data.endDate}</td>
              <td>
                <button
                  type="submit"
                  className="btn btn-sm btn-primary"
                  onClick={()=>openModal(index)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
        <div className="right-profile">
          <LineChart />
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal}>
          <Status idx={index}/>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
