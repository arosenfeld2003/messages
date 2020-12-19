import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";
import Welcome from "../welcome/welcome";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import {Dashboard} from "../../components/dashboard/dashboard";
import {onLoggedInRequest} from "../../redux/user/user-reducer";

import "./app.scss";

const App = (props) => {
  const {isLoggedIn, handleLoggedIn, currentUser} = props;

  useEffect(() => {
    handleLoggedIn();
  }, [handleLoggedIn])

  return <div className="main">
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' render={() => currentUser ? <Home /> : <Redirect to='/welcome'/>} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={SignInPage} />
          <Route exact path='/welcome' render={() => currentUser ? <Redirect to='/'/> : <Welcome />} />
          <Route exact path='/dashboard' component={Dashboard}/>
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
