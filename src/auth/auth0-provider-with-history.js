import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

class Auth0ProviderWithHistory extends React.Component {
  domain = process.env.REACT_APP_AUTH0_DOMAIN;
  clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  onRedirectCallback = (appState) => {
    this.props.history.push(appState?.returnTo || window.location.pathname);
  };

  render() {
    return (
      <Auth0Provider
        domain={this.domain}
        clientId={this.clientId}
        redirectUri= "http://localhost:3000/choice" // {window.location.origin}"http://hewnew.s3-website-us-east-1.amazonaws.com/"
        onRedirectCallback={this.onRedirectCallback}
      >
        {this.props.children}
      </Auth0Provider>
    );
  }
}

export default withRouter(Auth0ProviderWithHistory);