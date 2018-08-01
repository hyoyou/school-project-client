import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Login from '../containers/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
