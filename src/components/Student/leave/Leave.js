import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Leave.css";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

function LeaveForm() {
  const initialValues = {
    username: "",
    id: "",
    branch: "",
    advisorCode: "",
    hostel: "",
    roomNo: "",
    startDate: "",
    endDate: "",
    phoneNo: "7465967209",
    parentNo: "",
    email: "abc@gmail.com",
    parentEmail: "",
    leaveType: "",
    reason: "",
    advisorApproval: "",
    wardenApproval: "",
    pdfFile: "",
  };

  const branchArr = [
    "Information Technology",
    "Computer Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electrical and Communication Engineering",
    "Agricultural Engineering",
    "Industrial and Production Engineering",
  ];

  const hostelArr = [
    "Tagore Bhawan",
    "Patel Bhawan",
    "S.J Bhawan",
    "V.S Bhawan",
    "Shashtri Bhawan",
    "Shivalik Bhawan",
    "Mandakini Bhawan",
    "Saraswati Bhawan",
  ];

  const [values, setValues] = useState(initialValues);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const loginStudentDetails = JSON.parse(localStorage.getItem("student"));
  const handleLeaveData = () => {
    const savedData = window.localStorage.getItem("leaveData");
    const leaveDataArr = JSON.parse(savedData);
    leaveDataArr.push(values);
    window.localStorage.setItem("leaveData", JSON.stringify(leaveDataArr));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);

    await fileRef.put(file);
    console.log("File uploaded successfully.");
    setUploadedFileName(file.name);
    values.pdfFile = file.name;
    setValues({...values});
  };

  return (
    <div class="container leave-container">
      <form class="row g-3" onSubmit={handleLeaveData}>
        <div class="col-md-4">
          <label for="autoSizingInput" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="autoSizingInput"
            placeholder={loginStudentDetails.username}
            value={values.username}
            name="username"
            onChange={handleInputChange}
            required
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
            placeholder="55094"
            value={values.id}
            name="id"
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="input-group-text" class="form-label">
            Branch
          </label>
          <select
            class="form-select"
            id="inputGroupSelect"
            name="branch"
            value={values.branch}
            onChange={handleInputChange}
            required
          >
            <option value="" selected>Select your Branch</option>
            {branchArr.map((val) => (
              <option>{val}</option>
            ))}
          </select>
        </div>
        <div class="col-md-4">
          <label for="autoSizingInput" class="form-label">
            Advisor Code
          </label>
          <input
            type="text"
            class="form-control"
            id="autoSizingInput"
            placeholder="Enter the advisor code"
            value={values.advisorCode}
            name="advisorCode"
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="input-group-text" class="form-label">
            Hostel
          </label>
          <select
            class="form-select"
            id="inputGroupSelect"
            name="hostel"
            value={values.hostel}
            onChange={handleInputChange}
            required
          >
            <option value="" selected>Select your Hostel</option>
            {hostelArr.map((val) => (
              <option>{val}</option>
            ))}
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
            value={values.roomNo}
            name="roomNo"
            onChange={handleInputChange}
            required
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
            value={values.startDate}
            name="startDate"
            onChange={handleInputChange}
            required
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
            value={values.endDate}
            name="endDate"
            onChange={handleInputChange}
            required
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
            value={values.parentNo}
            name="parentNo"
            onChange={handleInputChange}
            required
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
            value={values.parentEmail}
            name="parentEmail"
            onChange={handleInputChange}
            required
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
                name="leaveType"
                id="flexRadioDefault1"
                onChange={handleInputChange}
                required
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
                name="leaveType"
                id="flexRadioDefault2"
                onChange={handleInputChange}
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
                name="leaveType"
                id="flexRadioDefault2"
                onChange={handleInputChange}
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
          <textarea
            class="form-control"
            id="textArea"
            rows="4"
            name="reason"
            value={values.reason}
            onChange={handleInputChange}
            required
          ></textarea>
          {/* <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Enter your reason for leave here..."
            /> */}
        </div>
        <div class="col-6 custom-file-upload-container">
          <label className="custom-file-upload">
            <input
              type="file"
              accept="application/pdf"
              name="pdfFile"
              onChange={handleFileUpload}
            />
            Upload Parent Application
          </label>
          {uploadedFileName && <p className="upload-msg">File Uploaded</p>}
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end col-6">
          <button type="submit" class="btn btn-dark me-md-2">
            Reset
          </button>
          <button
            type="submit"
            class="btn btn-danger"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default LeaveForm;
