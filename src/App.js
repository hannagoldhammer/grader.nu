import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.scss"
import Clouds from "./components/Clouds";
import Sun from "./components/Sun";
import Page from "./page/Page";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* Denna delen ligger i backlog och ska utvecklas vidare senare
            <div className="page-div">
              <Clouds/>
            </div> */}
            <Sun/>
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
