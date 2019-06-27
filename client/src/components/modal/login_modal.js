import React from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { Mutation } from "react-apollo";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.state = { closing: false };
  }
}

export default Modal;

// login button to open modal, click handler to set openmodal state to true
// two inner components that would only be rendered if true
// 1. div with one onclick handler to set to false if click outside of the modal space and close modal
// 2. loginform on top of that div (but smaller size than first div to encase form only)
// cb to set state to close modal