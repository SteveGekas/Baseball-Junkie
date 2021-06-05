import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

class HomeContent extends React.Component {
  render() {
    return (
      <div className="next-steps">
        <h2 className="my-5 text-center">Here is where we can add some sports new?</h2>

        <div className="row">
          <div className="col-md-5 mb-4">
            <h6 className="mb-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://auth0.com/docs/connections"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                Phillies WIN the superbowl!
              </a>
            </h6>
            <p>
              Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            </p>
          </div>

          <div className="col-md" />

          <div className="col-md-5 mb-4">
            <h6 className="mb-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://auth0.com/docs/multifactor-authentication"
              >
                <FontAwesomeIcon icon={faLink} className="mr-2" />
                Something Something about Gritty
              </a>
            </h6>
            <p>
              Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
            </p>
          </div>
        </div>




      </div>

    );
  }
}

export default HomeContent;
