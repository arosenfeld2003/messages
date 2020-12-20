import React from "react";
import { connect } from "react-redux";
import Header from "../header/header";

import "./dashboard.scss";

const Dashboard = () => {

  const handleClick = () => {
    alert("Clicked!");
  }

  return <div className="dashboard">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row">
          
        </div>
      </div>
    </div>
  </div>
}

export default Dashboard;
