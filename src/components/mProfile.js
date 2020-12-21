import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./profile.module.css";

import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";

class pProfile extends React.Component {
    render() {
      return <h1>Привет, {this.props.name}</h1>;
    }
};

export default withAuth0(pProfile);