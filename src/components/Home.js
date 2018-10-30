import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// const username = props.username ?
//   capitalizeUsername(props.username) : ""

// const capitalizeUsername = (username) => {
//   let capitalized = []
//   username.split(" ").forEach(name => {
//     capitalized.push(name.slice(0, 1).toUpperCase() + name.slice(1, name.length))
//   })
//   return capitalized.join(" ")
// }

class Home extends React.Component {
  state = {
    redirect: false
  }

  capitalizeUsername = (username) => {
    let capitalized = []
    username.split(" ").forEach(name => {
      capitalized.push(name.slice(0, 1).toUpperCase() + name.slice(1, name.length))
    })
    return capitalized.join(" ")
  }

  handleClick = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/locations' />
    }
  }

  render() {
    return (
      <section>
        <div className="welcome-section row">
          {sessionStorage.Token ?
  
          <div className="col-sm-12">
  
            <h1 className="welcome-section__title">Welcome <span className="welcome-section--username">{this.capitalizeUsername(this.props.username)}</span>, are you here?</h1>
            {this.renderRedirect()}
            <button className="welcome-section__btn btn" onClick={this.handleClick}>Check in</button>
  
          </div>
          :
          <h1 className="welcome-username"> Welcome! </h1>
  
        }
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  const username = state.auth.current_user ? state.auth.current_user.username : ""
  return {
    username: username
  }
}

export default connect(mapStateToProps, null)(Home);
