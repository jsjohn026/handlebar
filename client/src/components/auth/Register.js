import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import { REGISTER_USER } from "../../graphql/mutations";
import LoginModal from "../modal/login_modal";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "", message: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  updateInput(field) {
    return event => {
      if (this.state.message) this.setState({ message: "" });
      this.setState({ [field]: event.target.value });
    };
  }

  handleSubmit(event, registerUser) {
    event.preventDefault();
    registerUser({
      variables: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
    });
  }

  handleError(error) {
    this.setState({ message: error.graphQLErrors[0].message });
  }
  updateCache(client, {data}) {
    client.writeData({
      data: { isLoggedIn: data.register.loggedIn }
    });
  }
  
  render() {
    const { name, email, password, message } = this.state;
    const insteadLink = this.props.location.pathname === "/register" ? <Link to="/login">Log In</Link> : <LoginModal parentComp="register" />;
    const style = this.props.modal ? { height: "100%" } : {};
    
    return (
      <Mutation
        mutation={REGISTER_USER}
        onCompleted={data => {
          const { token } = data.register;
          localStorage.setItem("auth-token", token);
          this.props.history.push("/");
        }}
        update={(client, data) => this.updateCache(client, data)}
        onError={this.handleError}>
        {registerUser => (
          <div className="auth-page-container" style={style}>
            <div className="auth-form-container">
              <h1>Register for Handlebar</h1>
              <span>Already have an account? {insteadLink}</span>
              <div className="auth-form-error-message">{message}</div>
              <form className="auth-form" onSubmit={event => this.handleSubmit(event, registerUser)}>
                <input className="auth-form-input" type="text" value={this.state.name} onChange={this.updateInput("name")} placeholder="Name"></input>
                <input className="auth-form-input" type="text" value={this.state.email} onChange={this.updateInput("email")} placeholder="Email Address"></input>
                <input className="auth-form-input" type="password" value={this.state.password} onChange={this.updateInput("password")} placeholder="Password"></input>
                <button className="auth-form-button" disabled={!(name && email && password)}>Register</button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withRouter(Register);