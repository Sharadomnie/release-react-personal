import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1>
                <span className="text-danger">Contact</span> List
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact}></Contact>
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
