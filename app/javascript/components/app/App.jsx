import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";
import Welcome from "../welcome/welcome";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';

const App = (props) => {
  const {isLoggedIn} = props;
  return <div className="main">
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' render={() => isLoggedIn ? <Home /> : <Redirect to='/welcome'/>} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={SignInPage} />
          <Route exact path='/welcome' component={Welcome}/>
        </Switch>
      </Router>
  </div>
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.logged_in
})

export default connect(mapStateToProps, null)(App);
