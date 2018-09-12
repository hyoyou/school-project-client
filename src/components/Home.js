import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home= (props) => {
  const username = props.username ? props.username : ""
  return(
    <div className="row">
      <div className="col-sm-12 home-checkin-div">
        {username ?
        <div>
          <div>
            <h1 className="home-heading">Welcome {username}, Are you here?</h1>
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