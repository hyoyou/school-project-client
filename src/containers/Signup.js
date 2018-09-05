import React, {Component} from 'react';
const API_URL = "http://192.168.1.190:3001/api"

class Signup extends Component {

    constructor(props) {
        super();

        this.state = {
            username: "",
            email: "",
            password: "",
            passwordError: "",
            passwordConfirmation: "",
            passwordConfirmationError: ""
        }

    }

    onInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
      let isError = false;
      const errors = {
        passwordError: "",
        passwordConfirmationError: ""
      }

      if(this.state.password.length < 6) {
        isError = true
        errors.passwordError = "Must be 6 characters long"
      }

      if(this.state.passwordConfirmation !== this.state.password) {
        isError = true
        errors.passwordConfirmationError = "Password doesn't match"
      }

      
      this.setState({
        ...this.state,
        ...errors
      })
      
      return isError
    }

    handleSubmit = event => {
      event.preventDefault();
      //validate form fields
    
      const err = this.validate()

      if (!err) {

        return fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
            
            body: JSON.stringify({user: this.state})
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
    }
          
  render() {
    return(
      <section className="row dark-background form-div">
        <div className="col-sm-3"></div>

        <div className="col-sm-6 form-styling ">

          <h1 className="form-div__title">Please Signup to get started</h1>

          <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">

            <label>Username</label>
            <input 
              name="username"
              className="form-control" 
              type="text" placeholder="please enter your username"
              onChange={(event) => this.onInput(event)}
              value={this.state.username}
              required
            />
              
            <label>Email</label>
            <input 
              name="email"
              className="form-control" 
              type="email" placeholder="please enter your email"
              onChange={(event) => this.onInput(event)}
              value={this.state.email}
              required
            />

            <label>Password</label>
            <input 
              name="password"
              className="form-control" 
              type="password" placeholder="please enter your password"
              onChange={(event) => this.onInput(event)}
              value={this.state.password}
              errortext={this.state.passwordError}
              required
            />
            <span className="form-div__error">{this.state.passwordError}</span>

            <label>Confirm Password</label>
            <input 
              name="passwordConfirmation"
              className="form-control" 
              type="password" placeholder="please confirm your password"
              onChange={(event) => this.onInput(event)}
              value={this.state.passwordConfirmation}
              outertext={this.state.passwordConfirmationError}
              required
            />
            <span className="form-div__error">{this.state.passwordConfirmationError}</span>
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