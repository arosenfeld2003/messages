import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import SignUpPage from "../pages/sign-up-page/sign-up-page";

const App = () => {
  return <div className="main">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  </div>
};

export default App;
