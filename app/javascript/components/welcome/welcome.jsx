import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">SignUp</h1>
        <p className="lead">
          my_newspaper homepage
        </p>
        <hr className="my-4" />
        <Link
          to="/signup"
          className="btn btn-primary mr-1"
          role="button"
        >
          Signup
        </Link>
        <Link
          to="/login"
          className="btn btn-primary mr-1"
          role="button"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default Welcome;
