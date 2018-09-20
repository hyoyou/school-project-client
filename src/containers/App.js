import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Home from '../components/Home';
import Leaderboard from '../containers/Leaderboard';
import Location from '../containers/Location';
import AuthPanel from '../components/AuthPanel';

class App extends Component {
  render() {


    return (
      <Router>
        <div>

          <Header />
          <Route path="/" component={Home} />
          { !sessionStorage.Token ?
            <Route exact path="/" component={AuthPanel} /> : ""
          }
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/locations" component={Location} />

          <Route exact path="/leaderboard" component={Leaderboard} />

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const username = state.auth.current_user ? state.auth.current_user.username : ""
  return {
    username: username
  }
}

export default connect(mapStateToProps, null)(App);
