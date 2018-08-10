import React, { Component } from 'react';
import RegionDropdown from '../components/RegionDropdown';
import CityDropdown from '../components/CityDropdown';
import AddressDropdown from '../components/AddressDropdown';

export default class Location extends Component {
    state = { 
        locations: [],
        selectedRegion: '',
        selectedCity: '',
        selectedAddress: ''
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
                    <RegionDropdown title="Select Region" regions={location.region} onSelect={this.updateRegion} />
                    <CityDropdown title="Select City" cities={location.city} onSelect={this.updateCity} />
                    <AddressDropdown title="Begin Typing Address/Name of Building" addresses={location.address} onSelect={this.updateAddress} />
                </div>
            </div>
        )
    }
}