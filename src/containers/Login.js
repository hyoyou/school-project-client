import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: ""
    }
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
              type="text" placeholder="please enter your email"
              value={this.state.email}
              />

              <label>Password</label>
              <input 
              name="password"
              className="form-control" 
              type="password" placeholder="please enter your password"
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