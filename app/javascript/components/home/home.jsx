import React, {useState} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "../header/header";

const Home = (props) => {
  const {currentUser} = props;

  if (!currentUser) {
    return (
      <Redirect to='/welcome'/>
    )
  }

  return <div className="home-page">
    <Header />
    <div className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-3 p-3">
            <div class="card bg-white">
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{currentUser.email}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Your posts</li>
                <li class="list-group-item">Followers</li>
                <li class="list-group-item">Following</li>
              </ul>
            </div>
          </div>
          <div className="col p-3">
          <div class="col-sm">
            <h3>Newsfeed</h3>
            <div class="card bg-white">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="card-link text-secondary">Read more...</a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    {
      // replace with a component
    }
    <div>
      <form method="" action="" >
        <h2 className="h4 mb-4">Tweet</h2>
        <FormInput
          tweet=""
          className="form-control mb-4"
          placeholder="What's Up Tweety Bird?"
        />
        <Button
          type="submit"
          className="btn btn-primary btn-block my-4 waves-effect waves-light"
        > Submit </Button>
      </form>
    </div>

    <div>
      <button onClick={handleLogoutRequest}>
        Sign Out
      </button>
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  isLoggedIn: state.user.logged_in
})

const mapDispatchToProps = (dispatch) => ({
  handleLogoutRequest: () => {
    dispatch(onLogoutRequest());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
