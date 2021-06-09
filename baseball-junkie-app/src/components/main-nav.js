import { NavLink } from "react-router-dom";
import React from "react";

class MainNav extends React.Component {
  render() {
    return (
      <div className="navbar-nav mr-auto">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/welcomescreen"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Chat
        </NavLink>
      </div>
    );
  }
}

export default MainNav;
