import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";

class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        {/* <h1 style={{ color: "red", fontSize: "50px" }}>Contact </h1> */}
        {/* <h1 style={headerStyle}>Contact </h1> */}
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;

const headerStyle = {
  color: "red",
  fontSize: "50px",
};
