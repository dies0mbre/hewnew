import React from "react";
import Axios from "axios";

import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
  render() {
    const { user } = this.props.auth0;
    const { name, picture, email } = user;

    return (
      <div>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{name}</h2>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
        <div className="row">
          <pre className="col-12 text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

export default withAuth0(Profile);