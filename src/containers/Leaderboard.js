import React, { Component } from 'react';
import _ from 'lodash';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/leaderboards')
      .then(response => response.json())
      .then(data => this.setState(data));
    }




    renderDetails = () => {
      const { data } = this.state
      if(!data) {
            return "loading..."
          } else {
            _.map(data, function(value, key) {
debugger
              while (key < 5) {
            return (

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
        }
      )}
  }

  render() {

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
          {this.renderDetails()}
            </tbody>
          </table>
          </div>

    )
  }
}

export default Leaderboard;
