import React from "react";

const Profile = ({user, className, otherProps}) => {
    return <div className="card" style={{width: "100%"}}>
        <img className="card-img-top" src="" alt="Card image" />
        <div className="card-body">
        <h4 className="card-title">John Doe</h4>
        <p className="card-text">User's info</p>
        <a href="#" className="btn btn-dark">See Profile</a>
        </div>
    </div>
}

export default Profile;