import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Sharad",
        email: "sharad@gmail.com",
        phone: "66666777-99",
      },
      {
        id: 2,
        name: "Rajeev",
        email: "rajeev@gmail.com",
        phone: "34334-99",
      },
      {
        id: 3,
        name: "Aditya",
        email: "Aditya@gmail.com",
        phone: "66643466777-99",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
