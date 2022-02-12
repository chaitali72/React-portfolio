import React, { Component } from "react";
import profile from "./images/profile.jpg";
export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={profile} alt="profile" className=" image_profile"></img>
          <h2 className=" text-purple">Chaitali Mahida</h2>
        </header>
        <p className="header_title text-purple">
          Full Stack Software Developer
        </p>
        <span>currently working at Kinoklik</span>
      </div>
    );
  }
}

export default Header;
