import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";
import Welcome from "../welcome/welcome";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const App = (props) => {
  const {isLoggedIn} = props;
  return <div className="main">
      <Router>
        <Switch>
          <Route path="/" render={() => isLoggedIn ? <Home /> : <Redirect to="/welcome" />} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={SignInPage} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </Router>
  </div>
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.logged_in
})

export default connect(mapStateToProps, null)(App);
