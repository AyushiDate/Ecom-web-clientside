// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     users: 0,
//     sales: 0,
//     profit: 0,
//     tasks: []
//   });

//   // Fetch data from the API
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/dashboard')
//       .then(response => setDashboardData(response.data))
//       .catch(error => console.log('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         {/* Sidebar */}
//         <nav className="col-md-2 d-none d-md-block bg-light sidebar">
//           <div className="sidebar-sticky">
//             <ul className="nav flex-column">
//               <li className="nav-item">
//                 <a className="nav-link active" href="#">
//                   Dashboard
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Analytics
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Settings
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         {/* Main Content */}
//         <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
//           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//             <h1 className="h2">Dashboard</h1>
//           </div>

//           {/* Dashboard Cards */}
//           <div className="row">
//             <div className="col-md-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Users</h5>
//                   <p className="card-text">{dashboardData.users}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Sales</h5>
//                   <p className="card-text">${dashboardData.sales}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">Profit</h5>
//                   <p className="card-text">${dashboardData.profit}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tasks Table */}
//           <h2 className="mt-5">Tasks</h2>
//           <div className="table-responsive">
//             <table className="table table-striped table-sm">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Task</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {dashboardData.tasks.map((task) => (
//                   <tr key={task.id}>
//                     <td>{task.id}</td>
//                     <td>{task.task}</td>
//                     <td>{task.status}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Dropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



//import './Dashboard.css'; // Optional: Add your custom CSS file here

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend (for example, total users, active sessions, etc.)
    axios
      .get("/api/dashboard-data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar bg-light shadow-lg">
        <a className="navbar-brand" href="/">
          Dashboard
        </a>
      </nav>

      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebarMenu"
          className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
        >
          <div className="position-sticky pt-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Reports
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/reports">
                  Analytics
                </Link>
              </li>

              <li className="nav-item">
                <div className="dropup-menu bg-light ml-0">
                  <Link className="nav-link dropup-item" to="/reports">
                    Settings
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 shadow-lg">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom ">
            <h1 className="h2">Dashboard Overview</h1>
          </div>

          {/* Cards for Key Metrics */}
          {/* <div className="row">
            <div className="col-md-4">
              <div className="card bg-primary-subtle shadow-lg mb-3 rounded-lg">
                <div className="card-header">Total Users</div>
                <div className="card-body">
                  <h5 className="card-title">{data.totalUsers}</h5>
                  <p className="card-text">Number of users on the platform</p>
                  <div className="rounded-pill bg-primary text-dark float-right w-30">80%</div>
                </div>
              </div>
            </div> */}

          <div className="row">
            <div className="col-md-4">
              <div className="card bg-primary-subtle shadow-lg mb-3 rounded-lg">
                <div className="card-header">Total Users</div>
                <div className="card-body">
                  <h5 className="card-title">{data.totalUsers}</h5>
                  <p className="card-text">Number of users on the platform</p>

                  {/* Small Rounded Circle for Percentage */}
                  <div
                    className="rounded-circle bg-light text-dark fw-bold d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      top: "60px",
                      right: "10px",
                    }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-dark bg-warning-subtle mb-3">
                <div className="card-header">Active Sessions</div>
                <div className="card-body">
                  <h5 className="card-title">{data.activeSessions}</h5>
                  <p className="card-text">
                    Users currently active on the platform
                  </p>
                  <div
                    className="rounded-circle bg-light progress text-dark fw-bold d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      top: "60px",
                      right: "10px",
                    }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-dark bg-danger-subtle mb-3">
                <div className="card-header">Total Revenue</div>
                <div className="card-body">
                  <h5 className="card-title">${data.totalRevenue}</h5>
                  <p className="card-text">Revenue generated this month</p>
                  <div
                    className="rounded-circle bg-light text-dark fw-bold d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      position: "absolute",
                      top: "60px",
                      right: "10px",
                    }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Recent Activity */}
          <h2>Recent Activity</h2>
          <div className="table-responsive shadow-lg">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Action</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.recentActivity &&
                  data.recentActivity.map((activity, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{activity.username}</td>
                      <td>{activity.action}</td>
                      <td>{new Date(activity.date).toLocaleDateString()}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
