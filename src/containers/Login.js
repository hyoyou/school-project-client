import React, {Component} from 'react';
const API_URL = "http://192.168.1.190:3001/api"

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault();

    return fetch(`${API_URL}/sessions`, {
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
    
    return (
      <div className="row dark-background form-div">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 form-styling ">
          <h1 className="form-div__title">Please login to get started</h1>
          <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
              
              <label className="form-group__label">Email</label>
              <input 
              
              name="email"
              className="form-control form-group__input" 
              type="email" placeholder="please enter your email"
              onChange={(event) => this.onInput(event)}
              value={this.state.email}
              required
              />

              <label className="form-group__label">Password</label>
              <input 
              name="password"
              className="form-control form-group__input" 
              type="password" placeholder="please enter your password"
              onChange={(event) => this.onInput(event)}
              value={this.state.password}
              required
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