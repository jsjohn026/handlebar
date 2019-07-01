import React from "react";
import Register from "../auth/Register";
import { NavLink } from "react-router-dom";
import "./modal.css";

class SignUpModal extends React.Component {
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
          to="/register"
          onClick={this.handleClick}
        >
          SIGN UP
          </NavLink>
        {this.state.openModal ? (
          <>
            <div
              onClick={this.handleClick}
              className="modal-background"
            >
            </div>

            <div className="modal-content">
              <SignUpModal />
            </div>
          </>
        ) : null
        }
      </>
    )
  }
}

export default SignUpModal;