import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withApollo } from "react-apollo";
import "./user_dropdown.css";

class UserDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDropdown: false
    }

    this.showDropdown = this.showDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.logout = this.logout.bind(this);
  }

  showDropdown(event) {
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

  logout(event) {
    localStorage.removeItem("auth-token");
    this.props.client.cache.writeData({
      data: {
        isLoggedIn: false,
        cart: []
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } 

  render() {
    return (
      <div>
        <button onClick={this.showDropdown}className="navbar-user-avatar">user</button>

      {this.state.showDropdown ? (
          <div className="user-dropdown-menu"
          ref={(element) => {
            this.dropdownMenu = element;
          }}>
            <ul className="user-dropdown-content">
              <li><Link to="#">Profile</Link></li>
              <li><Link to="#">Saved</Link></li>
              <li><Link to="#">Transactions</Link></li>
              <li onClick={this.logout}>Logout</li>
            </ul>
          </div>
        ) : (
          null)
      }
      </div >
    );
  }
}

export default withApollo(withRouter(UserDropdown));