import React, { Component } from 'react';
import RegionDropdown from '../components/RegionDropdown';
import CityDropdown from '../components/CityDropdown';
import AddressDropdown from '../components/AddressDropdown';
import * as ReactBootstrap from 'react-bootstrap';

export default class Location extends Component {
    state = { 
        locations: [],
        uniqueRegions: [],
        uniqueCities: [],
        uniqueAddresses: [],
        selectedRegion: '',
        selectedCity: '',
        selectedAddress: ''
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/locations')
            .then(response => response.json())
            .then(locations => {
                this.setState({ locations })
                let regions = locations.map(location => location.region)
                let uniqueRegions = regions.filter((region, index, self) => self.indexOf(region) === index)
                this.setState({ uniqueRegions })
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{"padding-top": "2%"}}>
                    {/* <RegionDropdown title="Select Region" regions={location.region} onSelect={this.updateRegion} />
                    <CityDropdown title="Select City" cities={location.city} onSelect={this.updateCity} />
                    <AddressDropdown title="Begin Typing Address/Name of Building" addresses={location.address} onSelect={this.updateAddress} /> */}
                    <ReactBootstrap.DropdownButton 
                        title="Region"
                    >
                        {this.state.uniqueRegions.map((region, i) => 
                        <ReactBootstrap.MenuItem key={i} eventKey={i}>{region}</ReactBootstrap.MenuItem>
                        )}
                    </ReactBootstrap.DropdownButton>
                    <ReactBootstrap.DropdownButton 
                        title="City"
                    >
                        <ReactBootstrap.MenuItem eventKey="1">Action</ReactBootstrap.MenuItem>
                        <ReactBootstrap.MenuItem eventKey="2">Another action</ReactBootstrap.MenuItem>
                        <ReactBootstrap.MenuItem eventKey="3" active>Active Item</ReactBootstrap.MenuItem>
                    </ReactBootstrap.DropdownButton>
                </div>
                <div className="row" style={{"padding-top": "5%"}}>
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