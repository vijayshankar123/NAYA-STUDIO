import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/admindashboard" component={AdminDashboard} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
