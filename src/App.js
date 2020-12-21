import React from 'react';
import {  Redirect,  Switch,  Route,  Link} from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

import { withAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./auth/protected-route";

import { Loading } from "./components";
import Header from './components/Header';
import Footer from "./components/Footer"

import Profile from "./views/profile/profile";
import Home from "./views/home/home";
import Choice from "./views/choice/choice";
import Board from "./views/board/board"

class App extends React.Component {

  render() {
    const { isLoading } = this.props.auth0;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div id="app" className="d-flex flex-column h-100">
        <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <ProtectedRoute path="/choice" component={Choice} />
              <ProtectedRoute path="/board" component={Board} />
              <ProtectedRoute path="/profile/:login" component={Profile} />
              <Redirect to="/"/>
            </Switch>
          {/* </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

export default withAuth0(App);
