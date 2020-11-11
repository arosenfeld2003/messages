import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";

const App = () => {
  return <div className="main">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
      </Switch>
    </Router>
  </div>
};

export default App;
