import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Profile = (props) => {
  const current_user = props.user
  
  return (
    <section>
      <h1>Hello {current_user.username}</h1>
    </section>
  )
}

const mapStateToProps = (state) => {

  const user = state.auth.current_user ? state.auth.current_user : ""

  return {
    user: user
  }

}

export default connect(mapStateToProps, null)(Profile);
