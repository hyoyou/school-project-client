import React, {Component} from 'react';
import { login } from '../actions/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: ""
    }
  }

  onInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.login(this.state, this.props.history)
    this.setState({
      email: "",
      password: "",
      errors: this.props.errors
    })
  }

  render() {
    
    const errors = this.state.errors
    
    return (
      <section className="login-section">
        <div className="row">
        </div>
        <div className="row form-div">
          <div className="col-sm-3"></div>

          <div className="col-sm-6 form-styling ">

            <div className="login-section__error-div col-sm-12"><span>{errors}</span></div>
            <h1 className="login-section__title">Please login to get started</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="form-group">

                <label className="form-group__label">Email</label>
                <input

                name="email"
                className="form-control form-group__input"
                type="email" placeholder="please enter email"
                onChange={(event) => this.onInput(event)}
                value={this.state.email}
                required
                />

                <label className="form-group__label">Password</label>
                <input
                name="password"
                className="form-control form-group__input"
                type="password" placeholder="please enter password"
                onChange={(event) => this.onInput(event)}
                value={this.state.password}
                required
                />

                <button type="submit" className="btn submit-button">Submit</button>
              </div>
            </form>
            <div><span className="login-section__span">Not registered? </span><a className="login-section__links" href="/signup">Signup</a></div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </section>
    )
  }

}

const mapStateToProps = ({auth}) => {
  
  return {
    errors: auth.login_errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login: login,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
