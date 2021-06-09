import React from "react";

import MainNav from "./main-nav";
import AuthNav from "./auth-nav";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container mb-3">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <MainNav />
            <AuthNav />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
