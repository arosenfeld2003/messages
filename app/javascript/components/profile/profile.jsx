import React from "react";

const Profile = ({user}) => {

    if (!user) {
        return <div className="row">
            <div className="col">
                <p className="lead"><em>No user found.</em></p>
            </div>
        </div>

    }

    return <div className="card" style={{width: "100%"}}>
        <div className="card-body">
        <h4 className="card-title">User's Name</h4>
        <p className="card-text"><em>{user.email}</em></p>
        <p className="card-text"><em>Created at: {user.created_at}</em></p>
        <div className="row">
            <div className="col-4">
                <div className="badge">
                    <div className="badge-wrap">
                        <div className="badge-nmb">
                            <strong>13</strong>
                        </div>
                        <div className="badge-text">
                            <small>Posts</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="badge">
                    <div className="badge-wrap">
                        <div className="badge-nmb">
                            <strong>25</strong>
                        </div>
                        <div className="badge-text">
                            <small>Followers</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="badge">
                    <div className="badge-wrap">
                        <div className="badge-nmb">
                            <strong>0</strong>
                        </div>
                        <div className="badge-text">
                            <small>Following</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-dark">See Profile</a>
        </div>
    </div>
}

export default Profile;