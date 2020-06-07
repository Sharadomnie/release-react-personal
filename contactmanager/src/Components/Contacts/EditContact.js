import React, { Component } from "react";
import { Consumer } from "../../Context";
//mport { v1 as uuid } from "uuid";
import TextInputGroup from "../Layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = response.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddContact = async (dispatch, e) => {
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
    const { id } = this.props.match.params;
    const updatedContact = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: response.data });

    //Clear state
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
              <div className="card-header">Update Contact</div>
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
                    value="Update"
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

export default EditContact;
