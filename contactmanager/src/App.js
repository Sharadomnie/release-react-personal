import React from "react";
// import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./Components/Contacts/AddContact";
import About from "./Components/Static/About";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/Static/NotFound";
import Test from "./Components/Test/Test";
import EditContact from "./Components/Contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/Test" component={Test} />
              <Route exact path="/Contact/AddContact" component={AddContact} />
              <Route
                exact
                path="/Contact/EditContact/:id"
                component={EditContact}
              ></Route>
              <Route path="/About/:version" component={About} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
