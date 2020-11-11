import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../home/home";
import SignUpPage from "../sign-up-page/sign-up-page";
import SignInPage from "../sign-in-page/sign-in-page";
import Welcome from "../home/welcome";

// Redux
import { Provider } from "react-redux";
import configureStore from "../../redux/configfureStore";
const store = configureStore();

const App = () => {
  return <div className="main">
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </Provider>
  </div>
};

export default App;
