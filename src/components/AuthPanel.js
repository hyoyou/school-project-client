import React from 'react';
import { Link } from 'react-router-dom';
import {Card} from 'react-materialize'

const AuthPanel = () => {
  return (
    <Card className="welcome-section__authPannel">
      <ul>
        <li className="link-list">
          <Link to="/login" className="welcome-section__authPannel--btn btn">Login</Link>
        </li>
        <li className="link-list">
          <Link to="/signup" className="welcome-section__authPannel--btn btn">Signup</Link>
        </li>
      </ul>
    </Card>
  )
}

export default AuthPanel;