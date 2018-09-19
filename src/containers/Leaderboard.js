import React, { Component } from 'react';


class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
    }

    renderDetails = () => {
      const { users } = this.state

      for(let user in users) {
        debugger
          return (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )
      }


  }


  render() {
      const renderUser = !this.state.users ? "loading..." : this.renderDetails()
    return (

      <div className="container">
      <div className="row">
        <div className="col-sm-12 home-checkin-div">
          <h1 className="home-heading">Meet Your Friendly Competitors</h1>
          </div>
        </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Member</th>
                <th>Primary WeWork</th>
                <th># of Check-Ins</th>
              </tr>
            </thead>
            <tbody>
          {renderUser}
            </tbody>
          </table>
          </div>

    )
  }
}

export default Leaderboard;
