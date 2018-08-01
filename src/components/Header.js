import React from 'react'
import logo from '../containers/schoolprojectlogo.svg'

const Header = () => {
  return(
    <div className="dark-background header row">
      <img className="school-logo" src={logo} alt="logo"/>
    </div>
  )
}

export default Header