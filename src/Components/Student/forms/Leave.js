import React, { Component,useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../styles/LeaveForm.css';

function LeaveForm () {
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [leaveType,setLeaveType] = useState("");
  const handleLeaveData = () => {
    const newLeaveEntry = {
      type: leaveType,
      startDate: startDate,
      endDate: endDate,
      status: "In progress",
    }
    const savedData = window.localStorage.getItem("leaveData");
    const leaveDataArr = JSON.parse(savedData);
    leaveDataArr.push(newLeaveEntry);
    window.localStorage.setItem("leaveData",JSON.stringify(leaveDataArr));
  }

  const setStart = (e) => {
    setStartDate(e.target.value);
  }

  const setEnd = (e) => {
    setEndDate(e.target.value);
  }

  const setLeave = (e) => {
    console.log(e.target.value);
    setLeaveType(e.target.value);
  }

    return (
      <div class="container leave-container">
        <form class="row g-3">
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your name..."
            />
          </div>
          <div class="col-md-4">
            <label for="typeNumber" class="form-label">
              Id No.
            </label>
            <input
              type="number"
              class="form-control"
              id="typeNumber"
              placeholder="Enter your Id No."
            />
          </div>
          <div class="col-md-4">
            <label for="input-group-text" class="form-label">
              Branch
            </label>
            <select class="form-select" id="inputGroupSelect">
            <option selected>Select your Branch</option>
            <option value="1">Information Technology</option>
            <option value="2">Computer Engineering</option>
            <option value="3">Mechanical Engineering</option>
            <option value="4">Civil Engineering</option>
            <option value="5">Electrical Engineering</option>
            <option value="6">Agricultural Engineering</option>
            <option value="7">Electrical and Communication Engineering</option>
            <option value="8">Industrial and Production Engineering</option>
          </select>
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Name of Adviser
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter the name of your adviser"
            />
          </div>
          <div class="col-md-4">
            <label for="input-group-text" class="form-label">
              Hostel
            </label>
            <select class="form-select" id="inputGroupSelect">
            <option selected>Select your Hostel</option>
            <option value="1">Tagore Bhawan</option>
            <option value="2">Patel Bhawan</option>
            <option value="3">S.J Bhawan</option>
            <option value="4">V.S Bhawan</option>
            <option value="5">Shashtri Bhawan</option>
            <option value="6">Shivalik Bhawan</option>
            <option value="7">Mandakini Bhawan</option>
            <option value="8">Saraswati Bhawan</option>
          </select>
          </div>
          <div class="col-md-4">
            <label for="autoSizingInput" class="form-label">
              Room No.
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your room no."
            />
          </div>
          <div class="col">
            <label for="inputAddress2" class="form-label">
              Start date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              placeholder="Start date..."
              onChange={setStart}
            />
          </div>
          <div class="col">
            <label for="inputAddress2" class="form-label">
              End date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              placeholder="End date..."
              onChange={setEnd}
            />
          </div>
          <div class="col-6">
            <label for="typePhone" class="form-label">
              Parents Mobile No.
            </label>
            <input
              type="tel"
              class="form-control"
              id="typePhone"
              placeholder="Enter your Parents Phone No."
            />
          </div>
          <div class="col-md-6">
            <label for="staticEmail" class="form-label">
              Email of Parents
            </label>
            <input
              type="email"
              class="form-control"
              id="staticEmail"
              placeholder="Enter the email of parents"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h6 className="mb-3">Type of Leave:</h6>
            <div className="leave-type">
            <div class="form-check pe-2">
              <input
                class="form-check-input"
                type="radio"
                value="Working"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={setLeave}
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Working
              </label>
            </div>
            <div class="form-check pe-2">
              <input
                class="form-check-input"
                type="radio"
                value="Holiday"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={setLeave}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Holiday
              </label>
            </div>
            <div class="form-check pe-2">
              <input
                class="form-check-input"
                type="radio"
                value="Combination"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={setLeave}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Combination
              </label>
            </div>
            </div>
          </div>
          <div class="col-12">
            <label for="autoSizingInput" class="form-label">
              Reason for Leave
            </label>
            <textarea class="form-control" id="textArea" rows="4"></textarea>
            {/* <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your reason for leave here..."
            /> */}
          </div>
          <div class="col-6">
            <button type="submit" class="btn btn-primary">
              Upload Parent Application
            </button>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end col-6">
            <button type="submit" class="btn btn-dark me-md-2">
              Reset
            </button>
            <button class="btn btn-danger" onClick={handleLeaveData}>
              Apply
            </button>
          </div>
        </form>
      </div>
    );
}

export default LeaveForm;
