import React from "react";
import {Link} from 'react-router-dom';
import AuthenticationButton from '../../components/authentication-button.js';
import styles from "./home.module.css";
import main_png from "./main.png"
import { withAuth0 } from "@auth0/auth0-react";


class Home extends React.Component {
  render() {
    
    const { isAuthenticated } = this.props.auth0;

    return (
      <div className="container flex-grow-1">
        <div className="mt-5">
          <header>
            <div className='container'>
                  <div className="row">
                      <div className="col-md-4 ml-auto">
                          <div className={styles.offer}>
                              <h1 className={styles.offer__title}>
                                  Lorem ipsum 
                                  dolor sit ametmagna 
                              </h1>
                              <p className={styles.offer__text}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                              </p>

                              {/* <Link to="/join" className="btn btn-secondary btn-lg">
                                <p class="offer__join">Join </p>
                              </Link> */}
                              
                              { isAuthenticated ? (<></>) : <AuthenticationButton/> }
                              
                          </div>

                      </div>
                      <div className="offset-md-1 col-md-6 ml-auto">
                          <img src={main_png} className="img-fluid" alt="img"/>
                      </div>
                  </div>
            </div>
          </header>


        </div>
      </div>
    );
  }
}

export default withAuth0(Home);