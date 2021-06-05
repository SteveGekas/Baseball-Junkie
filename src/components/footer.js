import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark p-3 text-center">
        <div className="logo" />
        <p>
          This project uses {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://auth0.com">
            Auth0
          </a>
        </p>
      </footer>
    );
  }
}
export default Footer;
