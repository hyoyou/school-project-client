import React, {Component} from 'react';
const API_URL = "http://192.168.1.190:3001/api"

class Signup extends Component {

    constructor(props) {
        super();

        this.state = {
            username: "",
            email: "",
            password: ""
        }

    }

    onInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        return fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            
            body: JSON.stringify({user: this.state})
          })
            .then(res => res.json())
            .then((response) => {
              debugger
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
      <section className="row dark-background form-div">
        <div className="col-sm-3"></div>

        <div className="col-sm-6 form-styling ">

          <h1>Please Signup to get started</h1>

          <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">

            <label>Username</label>
            <input 
              name="username"
              className="form-control" 
              type="text" placeholder="please enter your username"
              onChange={(event) => this.onInput(event)}
              value={this.state.username}
            />
              
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
      </section>
    )
  } 

}

export default Signup;