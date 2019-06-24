import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import { LOGIN_USER } from "../../graphql/mutations";
import "../../styles/auth.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  updateCache(client, { data }) {
    client.writeData({
      data: { isLoggedIn: data.login.loggedIn }
    });
  }

  handleSubmit(event, loginUser) {
    event.preventDefault();
    loginUser({
      variables: { email: this.state.email, password: this.state.password }
    });
  }

  render() {
    return (
      <Mutation
        mutation={LOGIN_USER}
        update={(client, data) => this.updateCache(client, data)}
          onCompleted={data => {
            const { token } = data.login;
            localStorage.setItem('auth-token', token);
            this.props.history.push('/');
          }}>
        {loginUser => (
          <div className="auth-page-container">
            <div className="auth-form-container">
              <h1>Log into Handlebar</h1>
              <form className="auth-form" onSubmit={event => this.handleSubmit(event, loginUser)}>
                <input className="auth-form-input" value={this.state.email} onChange={this.update("email")} placeholder="Email Address" />
                <input className="auth-form-input" value={this.state.password} onChange={this.update("password")} type="password" placeholder="Password" />
                <button className="auth-form-button" type="submit">Log In</button>
              </form>
            </div>
            <Link to="/register">Create an account</Link>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Login;