import React from "react";
import {Link} from "react-router-dom";
import SearchForm from "../search-form/search-form";
import Button from "../button/button";

const AdminPanel = () => {
    const onUserCreate = () => {
        alert("CLicked!");
    }
    return <div className="bg-secondary">
    <div className="container">
      <div className="row p-3">
        <div className="col-auto">
          <Link to="/dashboard" className="btn btn-outline-info my-2 my-sm-0">Dashboard</Link>
        </div>
        <div className="col-auto">
            <Button
            type="button"
            className="btn btn-outline-info my-2 my-sm-0"
            onClick={onUserCreate}
            >Create new user
            </Button>
        </div>
        <div className="col-auto">
          <SearchForm />
        </div>
      </div>
    </div>
  </div>
}

export default AdminPanel;