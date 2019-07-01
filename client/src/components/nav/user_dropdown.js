import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LOGOUT_USER } from "../../graphql/mutations";
import "./user_dropdown.css";

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDropdown: false
    }

    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  showDropdown(event) {
    event.preventDefault();
    this.setState({ showDropdown: true }, () => {
      document.addEventListener('click', this.closeDropdown);
    });
  }

  closeDropdown(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDropdown: false }, () => {
        document.removeEventListener('click', this.closeDropdown);
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showDropdown}
          className="navbar-user-avatar"
        >
          user
        </button>

      {this.state.showDropdown ? (
          <div className="user-dropdown-menu"
          ref={(element) => {
            this.dropdownMenu = element;
          }}
          >
            <ul className="user-dropdown-content">
              <li><Link to="#">Profile</Link></li>
              <li><Link to="#">Saved</Link></li>
              <li><Link to="#">Transactions</Link></li>
              <li>LOGOUT
              {/* <button
                onClick={e => {
                  e.preventDefault();
                  localStorage.removeItem("auth-token");
                  client.writeData({
                    data: {
                      isLoggedIn: false,
                      cart: []
                    }
                  });
                }}
              >
                LOGOUT
              </button> */}
              </li>
            </ul>
          </div>
        ) : (
          null)
      }
      </div >
    );
  }
}

export default UserDropdown;