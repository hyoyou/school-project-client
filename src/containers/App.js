import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Home from '../components/Home';
import Leaderboard from '../containers/Leaderboard';
import Location from '../containers/Location';
import AuthPanel from '../components/AuthPanel';
import Profile from '../components/Profile';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          { !sessionStorage.Token ?
            <Route exact path="/" component={AuthPanel} /> : ""
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/locations" render={() => {
            return sessionStorage.Token ? (<Location />) : (<Redirect to="/" />)
          }} />

          <Route path="/profile" render={() => {
            return sessionStorage.Token ? (<Profile />) : (<Redirect to="/" />)
          }} />

          <Route exact path="/leaderboard" component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

function requireAuth(nextState, replace){
  console.log("yeah!")
}

const mapStateToProps = (state) => {
  const username = state.auth.current_user ? state.auth.current_user.username : ""
  return {
    username: username
  }
}

export default connect(mapStateToProps, null)(App);
