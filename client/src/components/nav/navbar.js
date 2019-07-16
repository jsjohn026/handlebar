import React from "react";
import { NavLink } from "react-router-dom";
import { ApolloConsumer, Query } from "react-apollo";
import LoginModal from "../modal/login_modal";
import SignUpModal from "../modal/signup_modal";
import "./navbar.css";
import { IS_LOGGED_IN } from "../../graphql/queries";
import Logo from "../../assets/handlebar-logo.png";
import UserDropdown from "../nav/user_dropdown";

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
                        <i className="fas fa-search fa-lg"></i></li>
                      <li className="notifications"><i className="fas fa-bell fa-lg"></i></li>
                      <li><UserDropdown /></li>
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
                      <li className="header-nav-text">
                       <SignUpModal parentComp="nav"/>
                      </li>
                      <li className="header-nav-text">
                       <LoginModal parentComp="nav"/>
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
