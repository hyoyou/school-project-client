import React, { Component } from 'react';
import { findUser, updateUser } from '../actions/authActions';
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
        
        const token = localStorage.getItem('Token');
        // if (token) {
        //     this.props.findUser(token);
        // }
    }

    filter = (event) => {
        let query = event.target.value;
        let { allLocations } = this.state;
        let filteredLocations = [];

        allLocations.forEach(function(location) {
            if (location.region.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filteredLocations.push(location);
            }
        })

        this.setState({ filteredLocations });
    }

    handleClick = id => {
        const updatedLocations = this.state.user.user_locations_attributes.map((location, locationId) => {
            if (id !== locationId) return location;
            return { ...location, location_attributes: { id: id } };
        })
    
        this.setState({
        user: { ...this.state.user,
            user_cities_attributes: updatedLocations
        }
        })

        this.props.updateUser(this.state.user);
    }

    render() {
        return (
            <div className="container">
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
                                <button onClick={() => this.handleClick(location.id)}>Select</button>
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
// findUser,