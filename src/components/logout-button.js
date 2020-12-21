import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class LogoutButton extends React.Component {
  render() {
    const { logout } = this.props.auth0;
    
    return (
    
      <button
        styles={{
          width: "60%",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
          justifyContent: "center",
          border: "1px solid #000000",
          boxSizing: "border-box",
          borderRadius: "36px",
          marginTop: "25px",
          marginBottom: "91px",
          
          
          /*width: 200px;*/
          height: "40px",
          /*left: 169px;*/
          /*top: 787px;*/
          
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "19px",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#000",
      }}
        className="btn btn-lg"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        <p style={{ marginTop: "0.5rem !important"}}>Log Out</p>
      </button>
    );
  }
}

export default withAuth0(LogoutButton);