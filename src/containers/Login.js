import React, {Component} from 'react';

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

  render() {
    return (
      <div className="row dark-background">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 form-styling">
          <h1>Please login to get started</h1>
          <form>
          <div className="form-group">
              
              <label>Email</label>
              <input 
              
              name="email"
              className="form-control" 
              name="email"
              type="text" placeholder="please enter your email"
              onChange={(event) => this.onInput(event)}
              value={this.state.email}
              />

              <label>Password</label>
              <input 
              name="password"
              className="form-control" 
              name="password"
              type="password" placeholder="please enter your password"
              onChange={(event) => this.onInput(event)}
              value={this.state.password}
              />

              <button type="submit" className="btn custom-btn">Submit</button>
            </div>
          </form>
        
        </div>
        <div className="col-sm-2"></div>
      </div>
    )
  }

}

export default Login;