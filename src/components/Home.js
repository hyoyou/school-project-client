import React from 'react'
import { connect } from 'react-redux';

const capitalizeUsername = (username) => {
  let capitalized = []
  username.split(" ").forEach(name => {
    capitalized.push(name.slice(0, 1).toUpperCase() + name.slice(1, name.length))
  })
  return capitalized.join(" ")
}
const Home= (props) => {

  const username = props.username ? 
  capitalizeUsername(props.username) : ""
 
  return(
    <div className="row">
      <div className="col-sm-12 home-checkin-div">
        {username ?
        <div>
          <div>
            <h1 className="home-heading">Welcome {username}, are you here?</h1>
          </div>
          <div>
            <button className="home-checkin-div__btn btn" onClick={this.handleClick}>Check in</button>
          </div>
        </div>
        : 
        <h1> Welcome! </h1>}
      </div>
    </div>
  )
}

//export default Home

const mapStateToProps = (state) => {
  const username = state.auth.current_user ? state.auth.current_user.username : ""
  return {
    username: username
  }
}

export default connect(mapStateToProps, null)(Home);