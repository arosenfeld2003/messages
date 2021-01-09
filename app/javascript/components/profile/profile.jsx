import React, {useEffect} from "react";
import {connect} from "react-redux";
import {onDeleteUser} from "../../redux/user/user-reducer";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";

const Profile = (props) => {

    const {user, onDeleteProfile, onChangeUpdateStatus} = props;
    const history = useHistory();

    const handleDeleteProfile = () => {
        onDeleteProfile(user.id)
    }

    const handleEditProfile = () => {
        onChangeUpdateStatus(null);
        let path = `dashboard/profile/edit/${user.id}`;
        history.push(path);
    }

    if (!user) {
        return <div className="row">
            <div className="col">
                <p className="lead"><em>No user found yet.</em></p>
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
        <Button type="button"
        className="btn btn-dark"
        onClick={handleEditProfile}>Edit Profile</Button>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => ({
    onDeleteProfile: (userId) => {
        dispatch(onDeleteUser(userId));
    },
    onChangeUpdateStatus: (status) => {
        dispatch(setProfileUpdateStatus(status));
    }
})

export default connect(null, mapDispatchToProps)(Profile);