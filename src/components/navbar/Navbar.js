import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="teal darken-1">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <i class="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <i class="fas fa-id-badge"></i> Experience & Education
                  </Link>
                </li>
                <li>
                  <Link to="/projects">
                    <i class="fas fa-graduation-cap"></i> My Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i class="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i class="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <i class="fas fa-id-badge"></i> Experience
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <i class="fas fa-graduation-cap"></i> My Projects
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
