import React, {useEffect} from "react";
import {connect} from "react-redux";
import {onDeleteUser} from "../../redux/user/user-reducer";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import { setProfileUpdateStatus } from "../../redux/user/user-actions";
import "./profile.scss";

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
                <p className="lead text-muted"><small><em>No user found yet.</em></small></p>
            </div>
        </div>

    }

    return <div class="profile-card-4 text-center">
            <div class="profile-content">
                <div class="profile-name">User Name
                    <p>{user.email}</p>
                </div>
                <div class="profile-description">Created at: <strong>{user.created_at}</strong></div>
                <div class="row">
                    <div class="col">
                        <div class="profile-overview">
                            <p>TWEETS</p>
                            <h4>1300</h4></div>
                    </div>
                    <div class="col">
                        <div class="profile-overview">
                            <p>FOLLOWERS</p>
                            <h4>250</h4></div>
                    </div>
                    <div class="col">
                        <div class="profile-overview">
                            <p>FOLLOWING</p>
                            <h4>168</h4></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div class="btn-group-vertical">
                        <a href="#" className="btn btn-outline-primary">See Profile</a>
                        <Button type="button"
                        className="btn btn-outline-primary"
                        onClick={handleEditProfile}>Edit Profile</Button>
                        <Button type="button"
                        className="btn btn-outline-danger"
                        onClick={handleDeleteProfile}>Delete profile</Button>
                    </div>
                    </div>
                </div>
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