import React from 'react'
import { connect } from 'react-redux';

const Home= (props) => {
  const username = props.username
  return(
    <div className="row">
      <div className="col-sm-12 home-checkin-div">
        <h1 className="home-heading">Welcome {username}, Are you here?</h1>
        {/* <button className="btn btn-outline-dark" style={{ marginLeft: '50%' }} onClick={this.handleClick}>Check in</button> */}
      </div>
    </div>
  )
}

//export default Home

const mapStateToProps = (state) => {

  return {
    username: state.auth.current_user.username
  }
}

export default connect(mapStateToProps, null)(Home);