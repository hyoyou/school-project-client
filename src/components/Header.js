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
      <div className="col-sm-8 header-links">

        {current_user ? 
          <div>

            <Link to="/profile">Profile</Link>
            <span>|</span>
            <Link to="/locations">Locations</Link>
            <span>|</span>
            <Link to="/leaderboard">Leaderboard</Link>
            <span>|</span>
            <Link to="/">Home</Link>
            <span>|</span>
            <Route path="/" component={Logout}/>

          </div>
          :
          <div>
            <Link to="/">Login</Link>
            <span>|</span>
            <Link to="/signup">Signup</Link>
          </div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    username: state.auth.current_user.username
  }

}

export default connect(mapStateToProps, null)(Header);
