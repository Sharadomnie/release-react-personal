import React, { Component } from "react";

class Test extends Component {
  state = {
    myContact: {
      name: "Sharad Saini",
      email: "sharad@gmail.com",
      phone: "999-999-999",
    },
  };

  UNSAFE_componentWillMount() {
    console.log("Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("Inside componentDidMount()");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  UNSAFE_componentWillUpdate() {
    console.log("Inside componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate()");
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log("Inside componentWillReceiveProps()");
  }

  /*static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Inside getDerivedStateFromProps()");
    return {
      name: "Aarti Saini",
      email: "rt@gmail.com",
      phone: "111-111-111",
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Inside getSnapshotBeforeUpdate()");
  }
*/
  render() {
    console.log("Inside render()");
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
