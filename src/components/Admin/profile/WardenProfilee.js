import { React, Component, useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../Student/view/Modal";
import Status from "../leave/WardenStatus";
import "./Profile.css";

function Profile() {
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
      <div className="black-box">
        <FontAwesomeIcon
          icon={faUser}
          className="text-primary"
          style={{ fontSize: "7rem" }}
        />
        <div>
          <h2 className="user-name">{username}</h2>
          <h3 className="user-name">Information Technology</h3>
          <h4 className="user-name">{email}</h4>
        </div>
        <div className="red-box">
          <div className="leaves">
            <h4>Total Leaves</h4>
            <h4>15</h4>
          </div>
        </div>
        <div className="blue-box">
          <div className="leaves">
            <h4>Leaves Approved</h4>
            <h4>8</h4>
          </div>
        </div>
        <div className="green-box">
          <div className="leaves">
            <h4>Leaves Rejected</h4>
            <h4>7</h4>
          </div>
        </div>
      </div>
      <table class="table table-bordered caption-top">
        <caption>List of Leaves</caption>
        <thead class="table-dark">
          <tr>
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
      {showModal && (
        <Modal onClose={closeModal}>
          <Status idx={index}/>
      </Modal>
      )}
    </>
  );
}

export default Profile;
