import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import chatImg from "../views/img/twilio-chat.png"

class ChatApi extends React.Component {
  state = {
    message: "",
  };

  serverUrl = process.env.REACT_APP_SERVER_URL;

  callApi = async () => {
    try {
      const response = await fetch(
        `${this.serverUrl}/api/messages/public-message`
      );

      const responseData = await response.json();

      this.setState({ message: responseData.message });
    } catch (error) {
      this.setState({ message: error.message });
    }
  };

  callSecureApi = async () => {
    const { getAccessTokenSilently } = this.props.auth0;
    const token = await getAccessTokenSilently();

    try {
      const response = await fetch(
        `${this.serverUrl}/api/messages/protected-message`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      this.setState({ message: responseData.message });
    } catch (error) {
      this.setState({ message: error.message });
    }
  };

  render() {
    return (
      <div>
        <h1>Twilio Chat</h1>
        <p>
          You use will use buttons to choose your chat room. Below is an example of what the chat looks like.
          <br />
          
        </p>
        <div
          className="btn-group mt-5"
          role="group"
          aria-label="External API Requests Examples"
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.callApi}
          >
            Get Public Message
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.callSecureApi}
          >
            Get Protected Message
          </button>
        </div>

        {this.state.message && (
          <div className="mt-5">
            <h6 className="muted">Result</h6>
            <div className="container-fluid">
              <div className="row">
                <code className="col-12 text-light bg-dark p-4">
                  {JSON.stringify(this.state.message, null, 2)}
                </code>
              </div>
            </div>
          </div>
        )}
        <img src={chatImg} alt="" />
      </div>
    );
  }
}

export default withAuth0(ChatApi);
