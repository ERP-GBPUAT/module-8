import { React, Component } from "react";
import Nav from "../Student/view/Nav";
import Leaves from './Leaves';
import "../../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Profile () {
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
            <h4 className="user-name">67190</h4>
          </div>
          <div className="red-box">
            <div className="leaves">
              <h4>Approved Leaves</h4>
              <h4>7</h4>
            </div>
          </div>
          <div className="blue-box">
            <div className="leaves">
              <h4>Rejected Leaves</h4>
              <h4>4</h4>
            </div>
          </div>
          <div className="green-box">
            <div className="leaves">
              <h4>Pending Leaves</h4>
              <h4>3</h4>
            </div>
          </div>
        </div>
        <div className="leave">
            <Leaves/>
            <Leaves/>
            <Leaves/>
            <Leaves/>
            <Leaves/>
        </div>
      </>
    );
}

export default Profile;
