import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// pages for this product
import Components from "views/Components/Components.js";
import IntroPage from "views/Introduction/IntroPage.js";
import TestPage from "views/TestPage/TestPage.js";

var hist = createBrowserHistory();
let score = 0;
const addScore = (number) => { score += number; }
const setScore = () => { return score }
const resetScore = () => { score = 0; }

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/intro-page" component={IntroPage} />
      <Route path="/test-page" render={() => <TestPage addScore={addScore} setScore={setScore} resetScore={resetScore} />} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
