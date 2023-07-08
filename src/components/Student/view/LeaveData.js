let data = [
  {
    username: "Divyanshu Sonwal",
    id: "55094",
    branch: "Information Technology",
    advisorCode: "TITSP",
    hostel: "V.S Bhawan",
    roomNo: "132",
    startDate: "18/08/2022",
    endDate: "21/08/2022",
    phoneNo: "7465967290",
    parentNo: "7817846983",
    email: "abc@gmail.com",
    parentEmail: "parent1@gmail.com",
    leaveType: "Emergency Leave",
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. veniam, quis nostrud laboris nisi ut aliquip ex ea commodo consequat.",
    advisorApproval: "",
    wardenApproval: "",
  },
];

if(!localStorage.getItem("isDataSaved")){
  localStorage.setItem("leaveData",JSON.stringify(data));
}

export default data;
