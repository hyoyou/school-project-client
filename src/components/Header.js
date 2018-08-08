import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../containers/schoolprojectlogo.svg'

const Header = () => {
  return(
    <div className="dark-background header row">
      <div className="col-sm-4">
        <img className="school-logo" src={logo} alt="logo"/>
      </div>
      <div className="col-md-4 header-links">
        <Link to="/login">Profile</Link>
        <span>|</span>
        <Link to="/login">Locations</Link>
        <span>|</span>
        <Link to="/leaderboard">Leaderboard</Link>
        <span>|</span>
        <Link to="/login">Login</Link>
        <span>|</span>
        <Link to="/signup">Signup</Link>
        <span>|</span>
        <Link to="/">Home</Link>
      </div>
      <div className="col-sm-4"></div>
    </div>
  )
}

export default Header
