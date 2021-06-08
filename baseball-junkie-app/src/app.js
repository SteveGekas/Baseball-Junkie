import React from "react";
import { Route, Switch } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";
import ChatScreen from "./ChatScreen";


import { NavBar, Footer, Loading } from "./components";
import { Home, Profile} from "./views";
import { withAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

class App extends React.Component {
  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <div className="container flex-grow-1">
          <div className="mt-5">
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/welcomescreen" component={WelcomeScreen} />
              <ProtectedRoute exact path="/chat" component={ChatScreen} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withAuth0(App);
