import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation, withApollo  } from "react-apollo";
import { LOGIN_USER, VERIFY_USER } from "../../graphql/mutations";
import { CURRENT_USER } from '../../graphql/queries'
import "../../styles/auth.css";
import { createHttpLink } from "apollo-link-http";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };

    this.updateInput = this.updateInput.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  updateInput(field) {
    return event => {
      if (this.state.message) this.setState({ message: "" });
      this.setState({ [field]: event.target.value });
    };
  }

  updateCache(client, { data }) {
    client.reset();
    client.writeData({
      data: { 
        isLoggedIn: data.login.loggedIn
       }
    });
    const httpLink = createHttpLink({
      uri: "http://localhost:5000/graphql",
      headers:  {
        authorization: localStorage.getItem("auth-token")
      }
    });
  }

  handleSubmit(event, loginUser) {
    event.preventDefault();
    loginUser({
      variables: { email: this.state.email, password: this.state.password }
    })
  }

  handleError(error) {
    this.setState({ message: error.graphQLErrors[0].message });
  }

  render() {
    const { email, password, message } = this.state;
    return (
      <Mutation
        mutation={LOGIN_USER}
        update={(client, data) => this.updateCache(client, data)}
          onCompleted={data => {
            const { token } = data.login;
            localStorage.setItem('auth-token', token);
            this.props.history.push('/');
          }}
        onError={this.handleError}>
        {loginUser => (
          <div className="auth-page-container">
            <div className="auth-form-container">
              <h1>Log into Handlebar</h1>
              <span>Or <Link to="/register">Create Account</Link></span>
              <div className="auth-form-error-message">{message}</div>
              <form className="auth-form" onSubmit={event => this.handleSubmit(event, loginUser)}>
                <input className="auth-form-input" value={this.state.email} onChange={this.updateInput("email")} placeholder="Email Address" />
                <input className="auth-form-input" value={this.state.password} onChange={this.updateInput("password")} type="password" placeholder="Password" />
                <button className="auth-form-button" type="submit" disabled={!(email && password)}>Log In</button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default withApollo(withRouter(Login));