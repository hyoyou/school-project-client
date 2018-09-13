import React, { Component } from 'react';
import { updateUser } from '../actions/authActions';
import { connect } from 'react-redux';

class Location extends Component {
    state = { 
        allLocations: [],
        filteredLocations: [],
        user: this.props.user
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/locations')
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

    // Selecting location adds location's id to user data in component state
    handleClick = locId => {
        const updatedLocations = this.state.user.user_locations_attributes.concat([{ location_attributes: {id: locId }}])
        // debugger

        this.setState({
            user: { ...this.state.user,
                user_locations_attributes: updatedLocations
            }
        })
    }
    
    // Extract out later to separate confirmation pop up
    handleSubmit = () => {
        // console.log(this.state.user)
        this.props.updateUser(this.state.user);
    }
 
    render() {
        return (
            <div className="container">
                <button className="submit-button" onClick={this.handleSubmit}>Check In</button>
                <div className="row" style={{"paddingTop": "2%"}}>
                    <label htmlFor="search"><strong>Region:</strong></label>
                    <input id="search" type="text" placeholder="Search by Region" style={{"color": "black"}} onChange={this.filter} />
                </div>
                <div className="row" style={{"paddingTop": "5%"}}>
                    {this.state.filteredLocations.map(location => {
                        return (
                            <div className="col-sm-4" style={{"height": "300px"}} key={location.id}>
                                <p>Region: {location.region}</p>
                                <p>City: {location.city}</p>
                                <p>Name: {location.name}</p>
                                <p>Address: {location.address}</p>
                                <button className="submit-button" onClick={() => this.handleClick(location.id)}>Select</button>
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

export default connect(mapStateToProps, { updateUser })(Location);