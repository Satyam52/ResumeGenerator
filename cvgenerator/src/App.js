import React, { Fragment, useEffect } from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";
import Dash from "./Components/Dashboard/Dash";
import Resume from "./Components/Dashboard/resume/resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./Components/Alert";
import { loadUser } from "./actions/auth";
import setAuthToken from "./actions/utils/setAuthToken";
import AddResume from "./Components/resume-form/form";
import Navbar from "./Components/Logout/logout";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/dashboard" component={Dash} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-resume" component={AddResume} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/resume/:id" component={Resume} />
          </Switch>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
