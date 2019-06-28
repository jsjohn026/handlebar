import React from "react";
import Login from "../auth/Login";
import { NavLink } from "react-router-dom";
import "./modal.css";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { openModal: false }
  }

  handleClick(e) {
    e.preventDefault();
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  }

  render() {
    return (
        <>
          <NavLink 
          to="/login"
          onClick={this.handleClick}
          >
            LOG IN
          </NavLink>
          {this.state.openModal ? (
            <>
              <div
                onClick={this.handleClick}
                className="modal-background"
              >
              </div>
              
              <div className="modal-content">
                <Login />
              </div>
            </>
          ) : null
          }
        </>
    )
  }
}

export default LoginModal;

// login button to open modal, click handler to set openmodal state to true
// two inner components that would only be rendered if true
// 1. div with one onclick handler to set to false if click outside of the modal space and close modal
// 2. loginform on top of that div (but smaller size than first div to encase form only)
// cb to set state to close modal