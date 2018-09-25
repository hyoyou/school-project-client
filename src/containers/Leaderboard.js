import React, { Component } from 'react';
import _ from 'lodash';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],

    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
    }

    renderDetails = () => {
      const users  = this.state.users.slice(0,10)


// _.map([1, 4, 2, 66, 444, 9], function(value, index){ return index + ':' + value; });


      return _.map(users, function(user, index) {
        return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.no_of_checkins}</td>
            </tr>
        )
      })

    }


  render() {
      const renderUser = !this.state.users ? "loading..." : this.renderDetails()
    return (

      <div className="container">
          <div className="col-sm-12 home-checkin-div">
            <h4 className="home-heading">Meet Your Friendly Competitors</h4>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Member</th>
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
