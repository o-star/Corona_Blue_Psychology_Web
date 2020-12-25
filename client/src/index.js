import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import Components from "views/Components/Components.js";
import IntroPage from "views/Introduction/IntroPage.js";
import TestPage from "views/TestPage/TestPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/intro-page" component={IntroPage} />
      <Route path="/test-page" component={TestPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
