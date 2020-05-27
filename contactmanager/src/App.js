import React from "react";
// import "./App.css";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./Context";
import AddContact from "./Components/Contacts/AddContact";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header></Header>
        <div className="container">
          <AddContact></AddContact>
          <Contacts></Contacts>
        </div>
      </div>
    </Provider>
  );
}

export default App;
