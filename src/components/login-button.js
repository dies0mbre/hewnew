import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LoginButton extends React.Component {

  render() {
    const { loginWithRedirect } = this.props.auth0;

    return (
      <button style = {{
        width: "265px",
        height: "67px",
        left: "163px",
        top: "461px",
        
        background: "linear-gradient(102.4deg, #767676 36.84%, #757575 74.32%)",
        boxShadow: "0px 7px 35px rgba(147, 147, 147, 0.42)",
        borderRadius: "110px"
      }}
        className="btn btn-secondary btn-lg"
        onClick={() => loginWithRedirect()}
      >
        
        <p>Join</p>
      </button>
    );
  }
}

export default withAuth0(LoginButton);