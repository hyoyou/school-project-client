import React, {Component} from 'react';
const API_URL = "http://192.168.1.190:3001/api"

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      username: ""
    }
  }

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault();
    
    return fetch(`${API_URL}/login`, {
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
          // localStorage.setItem('Username', response.username);
          this.state.username = response.username
        }        
      })
      .then(
        this.setState({
          email: "",
          password: ""
        })
      )

    
      .catch( error => {
        console.log(error);
        localStorage.clear()
      })

      

  }

  render() {
    return (
      <div className="row dark-background form-div">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 form-styling ">
          <h1>Please login to get started</h1>
          <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
              
              <label>Email</label>
              <input 
              
              name="email"
              className="form-control" 
              
              type="text" placeholder="please enter your email"
              onChange={(event) => this.onInput(event)}
              value={this.state.email}
              />

              <label>Password</label>
              <input 
              name="password"
              className="form-control" 
            
              type="password" placeholder="please enter your password"
              onChange={(event) => this.onInput(event)}
              value={this.state.password}
              />

              <button type="submit" className="btn submit-button">Submit</button>
            </div>
          </form>
        
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }

}

export default Login;