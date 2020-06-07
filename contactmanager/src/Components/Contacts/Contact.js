import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

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

  DeleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      console.log(id);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
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
                  className="fas fa-trash"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    marginRight: "16px",
                  }}
                  onClick={this.DeleteContact.bind(this, contact.id, dispatch)}
                ></i>
                <Link to={`/Contact/EditContact/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      color: "black",
                      cursor: "pointer",
                      float: "right",
                      marginRight: "16px",
                    }}
                  ></i>
                </Link>
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
