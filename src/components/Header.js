import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import logo from '../containers/schoolprojectlogo.svg'
import Logout from '../containers/Logout'

const Header = (props) => {
  const current_user = props.username
  return(

      <div className="dark-background header row">
        <div className="col-sm-4">
          <img className="school-logo" src={logo} alt="logo"/>
        </div>
        <div className="col-sm-8 header-section">


          {sessionStorage.Token ?

            <div className="header-section__links">

              <Link to="/" className="header-section__link">Home</Link>
              <span>|</span>
              <Link to="/profile" className="header-section__link">Profile</Link>
              <span>|</span>
              <Link to="/locations" className="header-section__link">Locations</Link>
              <span>|</span>
              <Link to="/leaderboard" className="header-section__link">Leaderboard</Link>
              <span>|</span>
              <Route className="logout-button" path="/" component={Logout}/>

            </div>
            :
            <div className="header-section__links">
              <Link to="/"  className="header-section__link">Home</Link>
              <span>|</span>
              <Link to="/login"  className="header-section__link">Login</Link>
              <span>|</span>
              <Link to="/signup"  className="header-section__link">Signup</Link>

            </div>
          }
        </div>
      </div>

  )
}

const mapStateToProps = (state) => {
  const username = state.auth.current_user ? state.auth.current_user.username : ""
  return {
    username: username
  }

}

export default connect(mapStateToProps, null)(Header);
