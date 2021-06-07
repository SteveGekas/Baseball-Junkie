import React from "react";
import Baseballapi from "../components/baseballapi";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    const { name, picture, email } = user;
    

    return (
      <Baseballapi></Baseballapi>
      
    );
  }
}

export default withAuth0(Profile);
