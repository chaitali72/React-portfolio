import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export class NavBar extends Component {
  state = {};
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light  main-navigationbar fixed-top mb-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarNavAltMarkup">
          <ul className="navbar-nav nav-list mr-0">
            <li className="navitem-list">
              <Link
                className="link nav-item nav-link"
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={this.scrollToTop}
              >
                Home
              </Link>
            </li>
            <li className="navitem-list">
              <Link
                className="link nav-item nav-link"
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={this.scrollToTop}
              >
                About
              </Link>
            </li>
            <li className="navitem-list">
              <Link
                className="link nav-item nav-link"
                to="Projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={this.scrollToTop}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact">
          <span style={{ marginRight: "10px" }}>Contact: </span>
          <a href={`mailto:chaitalismahida@gmail.com`}>
            <i class="fa fa-envelope" style={{ marginLeft: "10px" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/chaitalimahida/">
            <i class="fa fa-linkedin" style={{ marginLeft: "10px" }}></i>
          </a>
          <a href="https://github.com/chaitali72">
            <i class="fa fa-github" style={{ marginLeft: "10px" }}></i>
          </a>
        </div>
      </nav>
    );
  }
}
export default NavBar;
