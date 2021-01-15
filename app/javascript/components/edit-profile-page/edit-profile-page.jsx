import React, { useState } from "react";
import { connect } from "react-redux";
import { onUpdateUserFromAdmin } from "../../redux/user/user-reducer";
import FormInput from "../form-input/form-input";
import Header from "../header/header";
import { Redirect, useHistory } from "react-router-dom";

const EditProfilePage = (props) => {

    const {user, onUserProfileUpdate, profileUpdateStatus} = props;

    const [userValues, setUserValues] = useState({});
    const history = useHistory();

    const handleChange = (evt) => {
      const { target } = evt;
      const { name, value } = target;
      setUserValues({ ...userValues, [name]: value });
    };
    
    const handleUserUpdate = (evt) => {
      evt.preventDefault();
      onUserProfileUpdate(user.id, userValues);
    }

    const handleCancelAction = () => {
      history.goBack();
    }

    if (!user) {
      return <Redirect to="/dashboard" />
    }

    if (profileUpdateStatus === true) {
      return <Redirect to="/dashboard" />
    }

    return <div className="edit-profile-page">
      <Header />
      <div className="container">
        <div className="row">
            <div className="col-6 personal-info">

              {
                profileUpdateStatus === false ? <div className="alert alert-info alert-dismissable">
                <a className="panel-close close" data-dismiss="alert">×</a> 
                <i className="fa fa-coffee"></i>
                <strong>User not update.</strong>
              </div> : ""
              }
              
              <h3>Personal info</h3>
              
              <form className="form-horizontal" role="form">
                <div className="form-group">
                  <label className="col-lg-3 control-label">Email:</label>
                  <div className="col-lg-8">
                    <FormInput
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder={user.email}
                      handleChange={handleChange}
                      required={true}
                      />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Password:</label>
                  <div className="col-md-8">
                    <FormInput
                      id="password"
                      name="password"
                      className="form-control"
                      handleChange={handleChange}
                      type="password"
                      required={true}
                      />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Confirm password:</label>
                  <div className="col-md-8">
                    <FormInput
                      id="confirm-password"
                      name="password"
                      className="form-control"
                      handleChange={handleChange}
                      type="password"
                      required={true}
                      />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label"></label>
                  <div className="col-md-8">
                    <button type="button" className="btn btn-primary" value="Save Changes" onClick={handleUserUpdate}>Save Changes</button>
                    <span></span>
                    <button type="reset" className="btn btn-default" value="Cancel" onClick={handleCancelAction}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6">
              Users profile here
            </div>
        </div>
      </div>
    </div>
}

const mapStateToProps = (state) => ({
    user: state.user.profile,
    profileUpdateStatus: state.user.profileUpdateStatus
})

const mapDispatchToProps = (dispatch) => ({
    onUserProfileUpdate: (userId, userValues) => {
      dispatch(onUpdateUserFromAdmin(userId, userValues));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
