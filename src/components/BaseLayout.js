import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(./images/header2.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitle = {
      "fontFamily": "Bellefair",
      "fontSize": "3rem"
    }
    let footerStyle = {
      "text-align": "center",
      "height": "60px",
      "background-color": "#999",
      "position": "absolute",
      "bottom":"0",
      "width":"100%"
    }
    return(

      <div className="container-fluid App">
          <nav className="row navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li style={navTitle}>
                    {/*Splash Page*/}
                    <NavLink to="/">RVH</NavLink>
                  </li>
                  <li>
                    {/*Link to Home Page*/}
                    <NavLink to="/home"><span>Home</span></NavLink>
                  </li>
                  <li>
                    {/*Link to About Page*/}
                    <NavLink to="/about"><span>About</span></NavLink>
                  </li>
                  <li>
                    {/*Link to Portfolio Page*/}
                    <NavLink to="/portfolio"><span>Portfolio</span></NavLink>
                  </li>
                  <li>
                    {/*Link to Portfolio Page*/}
                    <NavLink to="/contact"><span>Contact</span></NavLink>
                  </li>
                  <li>
                    {/*Link to Portfolio Page*/}
                    <NavLink to="/references"><span>References</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*
            PASS IN CHILDREN
            */}
          {this.props.children}
          <footer style={footerStyle} className="col-xs-10 row">
            <span className="footer-title">Robert Howington | </span>
              <span>
                Holly Springs NC, 27540 | (919) 123-4567
              </span>
          </footer>
        </div>

    )
  }
}
