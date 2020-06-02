import React, { Component } from "react";
import { Consumer } from "../../Context";
import { v1 as uuid } from "uuid";
import TextInputGroup from "../Layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddContact = (dispatch, e) => {
    e.preventDefault();

    let isError = false;
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is Required" } });
      isError = true;
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is Required" } });
      isError = true;
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is Required" } });
      isError = true;
      return;
    }

    if (isError) {
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({ name: "", email: "", phone: "", errors: {} });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onAddContact.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Enter Name..."
                    value={name}
                    onchange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onchange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    type="text"
                    placeholder="Enter Phone..."
                    value={phone}
                    onchange={this.onChange}
                    error={errors.phone}
                  />

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
