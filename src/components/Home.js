import React from 'react'

const Home= () => {
  const username = localStorage.Username
  return(
    <div className="row">
      <div className="col-sm-12 home-checkin-div">
        <h1 className="home-heading">Welcome {username}, Are you here?</h1>
        
      </div>
    </div>
  )
}

export default Home