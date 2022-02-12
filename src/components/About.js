import React, { Component } from "react";
import react from "./images/techreactt.png";
import node from "./images/technode.png";
import bootstrap from "./images/techbootstrap.png";
import git from "./images/git.png";
import heroku from "./images/heroku.png";
import mongodb from "./images/mongodb.png";

export class About extends Component {
  render() {
    return (
      <div className="App-about">
        <h1 className="mt-5">About Me:</h1>
        <h3>Hello!</h3>
        <hr />
        <div className="container">
          <div class="row">
            <div className="col-lg-8">
              <div className="techicon">
                <img
                  src={react}
                  alt="techlogo"
                  className="tech-icons"
                  width="50"
                ></img>
                <img src={node} alt="techlogo" className="tech-icons"></img>
                <img
                  src={bootstrap}
                  alt="techlogo"
                  className="tech-icons"
                  width="50"
                ></img>
                <img
                  src={git}
                  alt="techlogo"
                  width="50"
                  className="tech-icons"
                ></img>
                <img
                  src={heroku}
                  alt="techlogo"
                  width="50"
                  className="tech-icons"
                ></img>
                <img
                  src={mongodb}
                  width="50"
                  alt="techlogo"
                  className="tech-icons"
                ></img>
                <br></br>
                I'm a Full-Stack Software Developer based in Toronto,CA<br></br>
                I am a software developer with +3 years of hands-on experience
                building full-stack applications.<br></br> I enjoy coding and
                the challenge of learning something new everyday.<br></br> I
                prefer Agile Methodology to implement Software Development Life
                cycle(SDLC).<br></br> Love to build scalable,generic and long
                term solution that are easy to maintain <br></br> Built personal
                website to put my own projects with github repositories to
                contribute with web dev community and live link is also
                available on my website which is deployed via devOp tools like
                Heroku,Netlify,Firebase and Github.
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ color: "black", fontSize: "20px" }}
            >
              <div className="skills-group ">
                <ul className="skill-lists  " style={{ listStyle: "none" }}>
                  <li>JavaScript</li>
                  <li>HTML5/css3</li>
                  <li>ReactJS</li>
                  <li>NOdeJS</li>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>Ruby On Rails</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
