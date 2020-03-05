import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleNameChange = e => {
    const name = e.target.value;
    this.setState({
      name
    });
  };
  handleEmailChange = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };
  handleUserNameChange = e => {
    const username = e.target.value;
    this.setState({
      username
    });
  };
  handlePasswordChange = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  render() {
    return (
      <div className="register">
        <Link to="/">CNCRT</Link>
        <h1 className="registerTitle">CNCRT</h1>

        <form className="registrationForm" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUserNameChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
          <button type="submit" className="registerSubmitButton">
            Register
          </button>
        </form>
      </div>
    );
  }
}
export default Register;