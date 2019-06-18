import React from "react";
import App from "./App/App";
import About from "./About/About";
import Navigation from "./Navigations/Navigation";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="root">
        <Navigation />
        <Switch>
          <Route path="/keyboard-simulator/" component={App} exact />
          <Route path="/keyboard-simulator/about" component={About} exact />
          <Route render={() => <Redirect to="/keyboard-simulator/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
