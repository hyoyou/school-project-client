import React, { Component } from 'react';

export default class Location extends Component {
    state = { 
        allLocations: [],
        filteredLocations: []
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
            if (location.region.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                filteredLocations.push(location);
            }
        })

        this.setState({ filteredLocations });
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
                                <button>Select</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}