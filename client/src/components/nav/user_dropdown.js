import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDropdown: false
    }

    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({showDropdown: true});
  }

  render() {
    return (
      <div>
        <div className="navbar-user-avatar">user</div>

      {this.state.showDropdown ? (
          <div>
            <ul>
              <li><Link to="">Profile</Link></li>
              <li><Link to="">Saved</Link></li>
              <li><Link to="">Transactions</Link></li>
              <li><Link to="">Logout</Link></li>
            </ul>
          </div>
        ) : (
          null)
      }
      </div >
    );
  }
}