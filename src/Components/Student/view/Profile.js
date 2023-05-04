import { React, Component } from "react";
import Nav from "./Nav";
import "../../../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import leaveDataArr from "./LeaveData";

function Profile () {
  const savedData = window.localStorage.getItem("leaveData");
  const leaveDataArr = JSON.parse(savedData);
    return (
      <>
        <div className="black-box">
          <FontAwesomeIcon
            icon={faUser}
            className="text-primary"
            style={{ fontSize: "7rem" }}
          />
          <div>
            <h2 className="user-name">Deepak Singh</h2>
            <h3 className="user-name">Information Technology</h3>
            <h4 className="user-name">55099</h4>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Total Leaves</h4>
              <h4>15</h4>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h4>Leaves Taken</h4>
              <h4>8</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Remaining Leaves</h4>
              <h4>7</h4>
            </div>
          </div>
        </div>
        <table class="table table-bordered caption-top">
        <caption>List of Leaves</caption>
          <thead class='table-dark'>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Leave type</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveDataArr.map((data,index)=>(
              <tr>
              <th scope="row">{index+1}</th>
              <td>{data.type}</td>
              <td>{data.startDate}</td>
              <td>{data.endDate}</td>
              <td>{data.status}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default Profile;
