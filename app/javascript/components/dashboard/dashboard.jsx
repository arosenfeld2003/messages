import React from "react";
import { connect } from "react-redux";

const Dashboard = (props) => {

  const handleClick = () => {
    alert("Clicked!");
  }

  return <div className="dashboard">
    <h2 className="h2">Dashboard</h2>
    <Button
      type="button"
      className="btn btn-primary btn-block my-4 waves-effect waves-light"
      onClick={handleClick}
    >Search user</Button>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">User1</li>
      <li class="list-group-item">User2</li>
      <li class="list-group-item">User3</li>
      <li class="list-group-item">User4</li>
      <li class="list-group-item">User5</li>
    </ul>
  </div>
}

const mapStateToProps = (state) => ({

})



export default connect(mapStateToProps, null)(Dashboard);
