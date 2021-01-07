import React from "react";

const EditProfilePage = () => {
    return <div className="container">
    <h1>Edit Profile</h1>
	<div className="row">
      <div className="col-md-3">
        <div className="text-center">
          <img src="//placehold.it/100" className="avatar img-circle" alt="avatar" />
          <h6>Upload a different photo...</h6>
          
          <input type="file" className="form-control" />
        </div>
      </div>
      <div className="col-md-9 personal-info">
        <div className="alert alert-info alert-dismissable">
          <a className="panel-close close" data-dismiss="alert">×</a> 
          <i className="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div>
        <h3>Personal info</h3>
        
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label className="col-lg-3 control-label">Email:</label>
            <div className="col-lg-8">
              <input className="form-control" type="text" value="janesemail@gmail.com" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label">Password:</label>
            <div className="col-md-8">
              <input className="form-control" type="password" value="11111122333" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label">Confirm password:</label>
            <div className="col-md-8">
              <input className="form-control" type="password" value="11111122333" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-3 control-label"></label>
            <div className="col-md-8">
              <button type="button" className="btn btn-primary" value="Save Changes">Save Changes</button>
              <span></span>
              <button type="reset" className="btn btn-default" value="Cancel">Cancel</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</div>
}

export default EditProfilePage;