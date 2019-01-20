import React from "react";
import App from "../App";
import About from "./About";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/about" component={About} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default Root;
