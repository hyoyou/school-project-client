import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login';
import Home from '../components/Home';
import Leaderboard from '../containers/Leaderboard';
import Location from '../containers/Location';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path="/locations" component={Location} />
          <Route exact path="/leaderboards" component={Leaderboard} />
        </div>
      </Router>
    );
  }
}

export default App;
