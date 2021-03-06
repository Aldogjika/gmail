import React from "react";
import "./App.css";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./emails/Mail";
import EmailList from "./emails/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>

            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
