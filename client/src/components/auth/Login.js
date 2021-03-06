import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation, withApollo, ApolloConsumer  } from "react-apollo";
import { LOGIN_USER } from "../../graphql/mutations";
import SignUpModal from "../modal/signup_modal";
import "../../styles/auth.css";


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

 async updateCache(cache, { data }, client) {
    cache.writeData({
      data: { 
        isLoggedIn: data.login.loggedIn
      }
    });
    
    window.location.reload();
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
    const insteadLink = this.props.location.pathname === "/login" ? <Link to="/register">Create Account</Link> : <SignUpModal parentComp="login" />;
    const style = this.props.modal ? { height: "100%" } : {};
     return (
      <ApolloConsumer>
      {(client) => (
        <Mutation
          mutation={LOGIN_USER}
          update={(cache, data) => this.updateCache(cache, data, client)}
            onCompleted={data => {
              const { token } = data.login;
              localStorage.setItem('auth-token', token);
              this.props.history.push('/');
            }}
          onError={this.handleError}>
          {loginUser => (
            <div className="auth-page-container" style={style}>
              <div className="auth-form-container">
                <h1>Log into Handlebar</h1>
                <span>Or {insteadLink}</span>
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
        
        )}
      </ApolloConsumer>
    );
  }
}

export default withApollo(withRouter(Login));
