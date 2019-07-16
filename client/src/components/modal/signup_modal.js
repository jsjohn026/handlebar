import React from "react";
import Register from "../auth/Register";
import { withRouter } from "react-router-dom";
import "./modal.css";
import "../../styles/auth.css";

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { openModal: false }
    this.parentComp = props.parentComp;
  }

  handleClick(e) {
    e.preventDefault();
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  }

  render() {
    if (this.props.location.pathname === "/login" || this.props.location.pathname === "/register") return null;
    return (
      <>
        <a className={`${this.parentComp}-auth-modal`} onClick={this.handleClick}>sign up</a>
          {this.state.openModal ? (
            <>
              <div
                onClick={this.handleClick}
                className="modal-background"
              >
              </div>

              <div className="modal-content">
                <Register />
              </div>
            </>
        ) : null}
      </>
    )
  }
}

export default withRouter(SignUpModal);