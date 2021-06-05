import React from "react";
import logo from "../views/img/baseball-junkie.jpg";

class Hero extends React.Component {


  render() {
    return (
      <div className="text-center hero">
        <img className="mb-3 app-logo" src={logo} alt="Baseball Junkie Logo" />
        <h1 className="mb-4">Project 3</h1>
        <p className="lead">
          I think there are about 1-2 million baseball fields in the world, but that’s just a ballpark number. Brought you by {" "}
          <a target="_blank" rel="noopener noreferrer" href="https://auth0.com/docs/quickstart/spa/react"> React </a>
        </p>
      </div>
    );
  }
}

export default Hero;
