import React, { Component } from 'react';

export default class CityDropdown extends Component {
    constructor(props){
        super(props)

        this.state = {
            listOpen: false,
            headerTitle: this.props.title
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList(){
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const{regions} = this.props
        const{listOpen, headerTitle} = this.state
        return(
            <div className="dd-wrapper">
            <div className="dd-header" onClick={() => this.toggleList()}>
                <div className="dd-header-title">{headerTitle}</div>
                {/* {listOpen
                    ? <FontAwesome name="angle-up" size="2x"/>
                    : <FontAwesome name="angle-down" size="2x"/>
                } */}
            </div>
            {listOpen && <ul className="dd-list">
                {regions.map((region) => (
                <li className="dd-list-item" key={region.id} >{region.title}</li>
                ))}
                </ul>}
          </div>
        )
    }
}