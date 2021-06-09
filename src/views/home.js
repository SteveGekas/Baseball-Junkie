import React, { Fragment } from "react";

import { Hero, HomeContent } from "../components";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Hero />
        
        <HomeContent />
      </Fragment>
    );
  }
}

export default Home;
