import React from 'react'
import { connect } from 'react-redux';


const capitalizeUsername = (username) => {
  let capitalized = []
  username.split(" ").forEach(name => {
    capitalized.push(name.slice(0, 1).toUpperCase() + name.slice(1, name.length))
  })
  return capitalized.join(" ")
}

const Home= (props) => {

  const username = props.username ?
  capitalizeUsername(props.username) : ""

  return(
    <section >

      <div className="welcome-section row">
        {sessionStorage.Token ?

        <div className="col-sm-12">

          <h1 className="welcome-section__title">Welcome <span className="welcome-section--username">{username}</span>, are you here?</h1>
          <button className="welcome-section__btn btn" onClick={this.handleClick}>Check in</button>

        </div>
        :
        <h1 className="welcome-username"> Welcome! </h1>

      }
      </div>

    </section>
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
