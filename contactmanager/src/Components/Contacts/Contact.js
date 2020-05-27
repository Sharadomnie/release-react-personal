import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";
import { Consumer } from "../../Context";

class Contact extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired,
  // };

  state = {
    isShowContact: false,
  };

  showContact = () => {
    this.setState({ isShowContact: !this.state.isShowContact });
  };

  DeleteContact = (id, dispatch) => {
    console.log(id);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  static propTypes = {
    contact: PropTypes.object.isRequired,
  };
  render() {
    const isShowContactInfo = this.state.isShowContact;
    const { contact } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {/* <h1 style={{ color: "red", fontSize: "50px" }}>Contact </h1> */}
              {/* <h1 style={headerStyle}>Contact </h1> */}
              <h4>
                {contact.name}
                <i className="fas fa-sort-down" onClick={this.showContact}></i>
                <i
                  className="fas fa-trash ml-5"
                  onClick={this.DeleteContact.bind(this, contact.id, dispatch)}
                ></i>
              </h4>
              {isShowContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;

// const headerStyle = {
//   color: "red",
//   fontSize: "50px",
// };
