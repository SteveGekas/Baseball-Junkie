import React from "react";
import logo from "../views/img/baseball-junkie.jpg";

class Hero extends React.Component {


  render() {
    return (
      <div className="text-center hero">
        <img className="mb-3 app-logo" src={logo} alt="Baseball Junkie Logo" />
               
      </div>
    );
  }
}

export default Hero;
