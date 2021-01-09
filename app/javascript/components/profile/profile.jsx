import React, {useEffect} from "react";
import {connect} from "react-redux";
import {onDeleteUser} from "../../redux/user/user-reducer";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Profile = (props) => {

    const {user, onDeleteProfile} = props;

    const handleDeleteProfile = () => {
        onDeleteProfile(user.id)
    }

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
        <Button type="button"
        className="btn btn-dark"
        onClick={handleDeleteProfile}>Delete profile</Button>
        </div>
        <Link to={`dashboard/profile/edit/${user.id}`} className="btn btn-dark">Edit Profile</Link>
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    onDeleteProfile: (userId) => {
        dispatch(onDeleteUser(userId));
    }
})

export default connect(null, mapDispatchToProps)(Profile);