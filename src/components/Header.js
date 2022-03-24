import React, { Component } from "react";
import profile from "./images/profile.jpg";
export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={profile} alt="profile" className=" image_profile"></img>
          <h1>Chaitali Mahida</h1>
        </header>
        <h2 className="header_title ">Full-Stack Software Developer</h2>
      </div>
    );
  }
}

export default Header;
