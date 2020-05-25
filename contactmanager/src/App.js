import React from "react";
// import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Contact
          name="Kuldeep Saini"
          email="kuldeepsn07@gmail.com"
          phone="11333333111"
        ></Contact>
        <Contact
          name="Sharad Saini"
          email="sharad@gmail.com"
          phone="111111111"
        ></Contact>
      </div>
    </div>
  );
}

export default App;
