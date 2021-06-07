import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";
import Baseballapi from "./baseballapi"

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
