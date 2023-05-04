let data = [
  {
    type: "Emergency Leave",
    startDate: "18/08/2022",
    endDate: "21/08/2022",
    status: "In progress",
  },
  {
    type: "Sick Leave",
    startDate: "11/09/2022",
    endDate: "13/09/2022",
    status: "Approved",
  },
  {
    type: "Sick Leave",
    startDate: "20/11/2022",
    endDate: "24/11/2022",
    status: "Approved",
  },
  {
    type: "Emergency Leave",
    startDate: "05/02/2023",
    endDate: "08/02/2023",
    status: "Rejected",
  },
];

localStorage.setItem("leaveData",JSON.stringify(data));

export default data;
