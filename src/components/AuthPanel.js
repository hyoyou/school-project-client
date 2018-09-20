import React from 'react';
import { Link } from 'react-router-dom';

const AuthPanel = () => {
  return (
    <ul className="welcome-section__authPannel">
      <li className="link-list">
        <Link to="/login" className="welcome-section__authPannel--btn btn">Login</Link>
      </li>
      <li className="link-list">
        <Link to="/signup" className="welcome-section__authPannel--btn btn">Signup</Link>
      </li>
    </ul>
  )
}

export default AuthPanel;