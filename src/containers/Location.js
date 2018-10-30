import React, { Component } from 'react';
import { updateUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'react-materialize';

// const loc_url = 'http://192.168.1.190:3001/api/locations'
// const loc_url = 'http://localhost:3000/api/locations'
const loc_url = 'http://localhost:3001/api/locations'

class Location extends Component {
  state = {
    allLocations: [],
    filteredLocations: [],
    user: this.props.user
  }

  componentDidMount() {
    fetch(loc_url)
      .then(response => response.json())
      .then(locations => {

        this.setState({
          allLocations: locations,
          filteredLocations: locations
        })
      });
  }

  filter = (event) => {
    let query = event.target.value;
    let { allLocations } = this.state;
    let filteredLocations = [];

    allLocations.forEach(function(location) {
      if (location.region.toLowerCase().startsWith(query.toLowerCase())) {
        filteredLocations.push(location);
      }
    })

    this.setState({ filteredLocations });
  }

  handleSubmit = async locId => {
    const updatedLocations = this.state.user.user_locations_attributes.concat([{ location_attributes: {id: locId }}])

    await this.setState({
      user: { ...this.state.user,
        user_locations_attributes: updatedLocations
      }
    })

    await this.props.updateUser(this.state.user);
    this.props.history.push('/leaderboard');
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{"paddingTop": "2%"}}>
          <label htmlFor="search"><strong>Search</strong></label>
          <input
            id="search"
            type="text"
            placeholder="Search By Region (Australia, Canada, China, Europe, India, Indonesia, Israel, Japan, Latin America, Singapore, South Korea, US)"
            style={{"fontSize": "14px"}}
            onChange={this.filter} />
        </div>

        <div className="row" style={{"paddingTop": "5%"}}>
          {this.state.filteredLocations.map(location => {
            return (
              <div className="col-sm-4" style={{"height": "300px"}} key={location.id}>
                <p>Region: {location.region}</p>
                <p>City: {location.city}</p>
                <p>Name: {location.name}</p>

                <Modal
                  className="modal-content"
                  header={location.name}
                  fixedFooter
                  trigger={<Button waves='light'>SELECT</Button>}>
                  <p>Is this the correct location?</p>
                  <p>Address: {location.address}</p>
                  <Button waves='light' onClick={() => this.handleSubmit(location.id)}>Yes, Check-In Here</Button>
                </Modal>

                <hr />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.current_user
  }
}

export default withRouter(connect(mapStateToProps, { updateUser })(Location));
