import React from "react";
import { NavLink } from "react-router-dom";
import { ApolloConsumer, Query } from "react-apollo";
import LoginModal from "../modal/login_modal";
import "./navbar.css";
import { LOGOUT_USER } from "../../graphql/mutations";
import { IS_LOGGED_IN } from "../../graphql/queries";
import Logo from "../../assets/handlebar-logo.png";

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
                      <NavLink to="/">
                      <div 
                      className="header-logo" 
                      style={{ backgroundImage: `url(${Logo})` }}>
                      </div>
                      </NavLink>
                    <ul className="header-nav-left-items">
                      <li className="header-nav-text"><NavLink to="/products">SHOP</NavLink></li>
                      <li className="header-nav-text"><NavLink to="">STUDIO</NavLink></li>
                      <li className="header-nav-text"><NavLink to="/genres">INTERESTS</NavLink></li>
                    </ul>
                    <ul className="header-nav-right-items">
                      <li className="navbar-search">
                        <input type="text" placeholder="search input"
                        />
                        <i class="fas fa-search fa-lg"></i></li>
                      <li className="notifications"><i class="fas fa-bell fa-lg"></i></li>
                      <li><div className="user-dropdown-menu">
                        <div className="navbar-user-avatar">user</div>
                        </div>
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
                  <nav className="header-nav-items">
                  <div className="header-logo" style={{backgroundImage: `url(${Logo})`}}>
                  </div>
                    <ul className="header-nav-right-items">
                      <li className="header-nav-text"><NavLink to="/register">SIGN UP</NavLink></li>
                      {/* <li><NavLink to="/login">LOG IN</NavLink></li> */}
                      <li className="header-nav-text">
                       <LoginModal />
                      </li>
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
