import React, { Component } from "react";
import { Consumer } from "../../Context";
import { v1 as uuid } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddContact = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({ name: "", email: "", phone: "" });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onAddContact.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      className="form-control form-control-l"
                      placeholder="Enter Name.."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-l"
                      placeholder="Enter Email.."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control form-control-l"
                      placeholder="Enter Phone.."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-dark"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
