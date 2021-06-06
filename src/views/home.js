import React, { Fragment } from "react";
import Baseballapi from "./baseballapi";
import { Hero, HomeContent } from "../components";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Baseballapi>
        
        </Baseballapi>
        <HomeContent />
      </Fragment>
    );
  }
}

export default Home;
