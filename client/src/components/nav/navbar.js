import React from "react";
import { NavLink } from "react-router-dom";
import { ApolloConsumer, Query } from "react-apollo";
import Modal from "../modal/modal";
import "./navbar.css";
import { LOGOUT_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";
// import Logo from "../../assets/handlebar-filled.png";

const NavBar = props => {
  return (
    <ApolloConsumer>
      {client => ( 
        <Query query={IS_LOGGED_IN}>
          {({ data }) => {
            if (data.isLoggedIn) {
              return (
                <header className="header">
                  <nav className="header-nav-items">
                    <div className="header-logo">
                      <h1>Handlebar</h1>
                    </div>
                    <ul>
                      <li><NavLink to="">SHOP</NavLink></li>
                      <li><NavLink to="">STUDIO</NavLink></li>
                      <li><NavLink to="">INTERESTS</NavLink></li>
                      <li><div className="searchbar">searchbar here</div></li>
                      <li><div className="notifications">notifications icon</div></li>
                      <li><div className="dropdown-menu">dropdown menu</div>
                      <button
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
                      </button>
                      </li>
                    </ul>
                  </nav>
                </header>
              )
            } else {
              return (
                <header className="header">
                  <div className="header-logo">
                    <h1>Welcome To Handlebar</h1>
                  </div>
                  <nav className="header-nav-items">
                    <ul>
                      <li><NavLink to="/register">SIGN UP</NavLink></li>
                      <li><NavLink to="/login">LOG IN</NavLink></li>
                    </ul>
                  </nav>
                </header>
              );
            }
          }} 
        </Query>
      )}
    </ApolloConsumer >
  )
}

export default NavBar;
// cb to set state to close modal
// login button to open modal, showmodal, pass in a cb to set state of boolean to false
