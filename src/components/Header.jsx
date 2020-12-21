import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

import { withAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
 
class Header extends React.Component {
    
    render(){

        const { isAuthenticated, logout } = this.props.auth0;
        let login_url = "/profile/"
        if (isAuthenticated){        
            login_url += this.props.auth0.user.nickname;
        }

        return(
            <nav className={`navbar ${styles.navbar} navbar-expand navbar-light bg-light`}
            style={{ 
                backgroundColor: "unset !important",
                color: "unset !important"}}>
            <div className="container">
                <Link to="/" className={styles.navbarBrand} id="logo">HEWNEW</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <button className={`btn ${styles.btn}`} type="button">uuuuu</button> */}

                <div className="collapse navbar-collapse" id="navbars">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" id={styles.nav__main}>Main <span className="sr-only">(current)</span></Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/" className="nav-link disabled">About</Link>
                    </li> */}
                    {isAuthenticated ? ( <>
                    <li className="nav-item">
                        <Link to="/board" className="nav-link" id={styles.navLink}>Board</Link>
                    </li> 
                    <li className="nav-item">
                        <Link to={login_url} className="nav-link" id={styles.navLink}>Profile</Link>
                    </li>
                    {/* <li className="nav-item"> */}
                        {/* <Link to="/profile" className="nav-link ">Log out</Link> */}
                        {/* <LogoutButton/> */}
                    {/* </li> */}
                     </>)
                        : <></>}
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
    
};
export default withAuth0(Header);