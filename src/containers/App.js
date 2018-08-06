import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login';
import Home from '../components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
