import React, { Component } from 'react'

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/leaderboards')
      .then(response => response.json())
      .then(data => console.log(data));

    }



  render() {
      return <div>LeaderBoard</div>
  }
}

export default Leaderboard;
