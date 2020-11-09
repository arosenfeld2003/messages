import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./pages/sign-up-page";
import SignInPage from "./pages/sign-in-page";

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
