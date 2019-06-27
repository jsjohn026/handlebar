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
                    <div className="header-logo" style={{ backgroundImage: `url(${Logo})` }}>
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
                  <nav className="header-nav-items">
                  <div className="header-logo" style={{backgroundImage: `url(${Logo})`}}>
                  </div>
                    <ul className="header-nav-right-items">
                      <li><NavLink to="/register">SIGN UP</NavLink></li>
                      {/* <li><NavLink to="/login">LOG IN</NavLink></li> */}
                      <li>
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
