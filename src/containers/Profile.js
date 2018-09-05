import React, { Component } from 'react';
const API_URL = "http://192.168.1.190:3001/api"

class Profile extends Component {

  constructor(props) {
    super(props)

    current_user: {}
  }

  componentDidMount() {
    return fetch(`${API_URL}/users/:id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then((response) => {

        if (response.errors) {
          
          throw Error(response.errors);
        
        } else{
          localStorage.setItem('Token', response.token);
          localStorage.setItem('Username', response.username);
        }        
      })
      .then(
        this.setState({
          email: "",
          password: ""
        }),
        this.props.history.push("/")
      )
      .catch( error => {
        localStorage.clear()
      })
  }

  render() {
    return(
      <section>
        
      </section>
    )
  }
}

export default Profile

