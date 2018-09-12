import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
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
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/locations" component={Location} />
          <Route exact path="/leaderboards" component={Leaderboard} />
     
        </div>
      </Router>
    );
  }
}

export default App;

