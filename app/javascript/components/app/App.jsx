import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";
import Welcome from "../welcome/welcome";
import { connect } from "react-redux";
import Dashboard from "../dashboard/dashboard";
import EditProfilePage from "../edit-profile-page/edit-profile-page";
import {onLoggedInRequest} from "../../redux/user/user-reducer";
import ProfilePage from "../profile-page/profile-page";

import "./app.scss";

const App = (props) => {
  const {isLoggedIn, handleLoggedIn, currentUser} = props;

  useEffect(() => {
    handleLoggedIn();
  }, [handleLoggedIn])

  return <div className="main">
      <Router>
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Home /> : <Welcome />} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/login' component={SignInPage} />
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/dashboard/profile/edit/:id' component={EditProfilePage}/>
          <Route exact path='/dashboard/profile/:id' component={ProfilePage}/>
        </Switch>
      </Router>
  </div>
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.logged_in,
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  handleLoggedIn: () => {
    dispatch(onLoggedInRequest());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
