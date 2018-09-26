import React, {Component} from 'react';
import { signup } from '../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            passwordError: "",
            passwordConfirmation: "",
            passwordConfirmationError: "",
            authErrors: ""
        }

    }

    onInput = event => {
        this.setState({
            authErrors: "",
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
        this.props.signup(this.state, this.props.history)
        this.setState({
          username: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          authErrors: this.props.errors
        })
      }
    }
          
  render() {
<<<<<<< HEAD
=======
    
    const errors = this.state.authErrors
    console.log(errors)
>>>>>>> 207a7d8dea7b897be1fa80e440637b0ae307923e
    return(
      <section className="row form-div">
        <div className="col-sm-3"></div>

        <div className="col-sm-6 form-styling ">
          
          <div className="login-section__error-div col-sm-12"><span>{errors}</span></div>
          <h1 className="form-div__title">Please Signup to get started</h1>

          <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">

            <label className="form-group__label">Username</label>
            <input 
              name="username"
              className="form-control form-group__input" 
              type="text" placeholder="please enter your username"
              onChange={(event) => this.onInput(event)}
              value={this.state.username}
              required
            />
              
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
              errortext={this.state.passwordError}
              required
            />
            <span className="form-div__error">{this.state.passwordError}</span>

            <label className="form-group__label">Confirm Password</label>
            <input 
              name="passwordConfirmation"
              className="form-control form-group__input" 
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

const mapStateToProps = ({auth}) => {
  return {
    errors: auth.signup_errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      signup:  signup,
  }, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(Signup);