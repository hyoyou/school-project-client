import React, { Component } from 'react';

export default class Location extends Component {
    state = { 
        locations: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/locations')
            .then(response => response.json())
            .then(locations => this.setState({ locations }));
    
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.locations.map(location => {
                        return (
                            <div key={location.id}>
                                {/* Group by regions, click to open cities + locations, perhaps a dropdown?? */}
                                <p>Region: {location.region}</p>
                                <p>City: {location.city}</p>
                                <p>Name: {location.name}</p>
                                <p>Address: {location.address}</p>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}