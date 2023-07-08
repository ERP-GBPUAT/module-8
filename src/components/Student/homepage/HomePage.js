import React, {useState} from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LineChart from "../../Trial/LineChart";
import Modal from "../view/Modal";
import Leave from "../leave/Leave";
import Sidebar from "../dashboard/DashBoard";
import Status from "../leave/Status";
import "./HomePage.css";

const HomePage = () => {
  const savedData = localStorage.getItem("leaveData");
  const leaveDataArr = JSON.parse(savedData);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (index) => {
    setShowModal(true);
    setIndex(index);
  };

  const openModal2 = (index) => {
    setShowModal2(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModal2 = () => {
    setShowModal2(false);
  };

  const username = JSON.parse(localStorage.getItem("student")).username;
  const email = JSON.parse(localStorage.getItem("student")).email;
  const studentObj = leaveDataArr.filter((obj)=>obj.username===username)[0];
  const branch = studentObj!==undefined?studentObj.branch:"Information Technology";
  const id = studentObj!==undefined?studentObj.id:"55094";
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
          <h4 className="User-name">{branch}</h4>
          <h5 className="User-name">{id}</h5>
          <btn className="btn btn-danger User-name" onClick={openModal2}>Apply Leave</btn>
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
                <h6>Leaves Taken</h6>
                <h6>8</h6>
              </div>
            </div>
            <div className="Green-box">
              <div className="leaves">
                <h6>Remaining Leaves</h6>
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
                  onClick={() => openModal(index)}
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
          <Status idx={index} />
        </Modal>
      )}
      {showModal2 && (
        <Modal onClose={closeModal2}>
          <Leave />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
