import React from "react";
// import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./Components/Contacts/AddContact";
import About from "./Components/Static/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Components/Static/NotFound";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/Contact/AddContact" component={AddContact} />
              <Route path="/About/:version" component={About} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
