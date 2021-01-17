import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import "./App.scss"
import Clouds from "./components/Clouds";
import Page from "./page/Page";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <div className="page-div">
              <Clouds/>
            </div> */}
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
