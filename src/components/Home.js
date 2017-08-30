import React from 'react';
import homebg from '../images/homebg.jpg'

const Home = (props)=> {
  let heroStyle = {
    marginTop: "-20px",
    height: "600px",
    backgroundImage: `url(${homebg})`
  }

  let headerTitle = {
    color: "white",
    fontSize: "14rem"
  }
    return (
      <div className="img-responsive" style={heroStyle} className="container-fluid">
        <header >
          <h1 style={headerTitle} >Hi!</h1>
        </header>
        <main>
          <div>
            Mock home page - use above menu
          </div>
        </main>
      </div>
    )
}

export default Home;
