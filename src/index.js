import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { CometChatUI } from "./javascript-react-chat-app-master/src/cometchat-pro-react-ui-kit/CometChatWorkspace/src";


import "./index.css";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App>
        <CometChatUI />
      </App>
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById("root")
);