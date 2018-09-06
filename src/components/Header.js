import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../containers/schoolprojectlogo.svg'

const Header = (props) => {
  const current_user = props.username
  return(
    <div className="dark-background header row">
      <div className="col-sm-4">
        <img className="school-logo" src={logo} alt="logo"/>
      </div>
      <div className="col-md-4 header-links">

        {current_user ? 
          <div>

            <Link to="/login">Profile</Link>
            <span>|</span>
            <Link to="/locations">Locations</Link>
            <span>|</span>
            <Link to="/leaderboard">Leaderboard</Link>
            <span>|</span>
            <Link to="/">Home</Link>

          </div>
          :
          <div>
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/signup">Signup</Link>
          </div>
        }
      </div>
      <div className="col-sm-4"></div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    username: state.auth.current_user.username
  }

}

export default connect(mapStateToProps, null)(Header);
