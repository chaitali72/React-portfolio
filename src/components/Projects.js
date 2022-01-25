import React, { Component } from "react";

const projects = [
  {
    id: 1,
    title: "Movie search App",
    website: "https://chaitali72.github.io/",
    github: "https://github.com/chaitali72/MovieSearchApp",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 2,
    title: "Portfolio",
    website: "https://chaitali72.github.io/",
    github: "https://github.com/chaitali72/chaitali72.github.io",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 3,
    title: "Netflix Clone",
    website: "https://netflix-clone-6a5fc.web.app/",
    github: "https://github.com/chaitali72/NetflixClone-MERN",
    techstack: "React/Axios,node/mongodb",
  },

  {
    id: 4,
    title: "Birthday Reminder App",
    website: "https://birthdayreminder-3e992.web.app/",
    github: "https://github.com/chaitali72/ReactProject-UseState-",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 5,
    title: "React portfolio App",
    website: "https://reactportfoilio.netlify.app/",
    github: "https://github.com/chaitali72/portfolioreact",
    techstack: "React/Axios,node/mongodb",
  },
];
export class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <hr />
        <div className="container"></div>
      </div>
    );
  }
}

export default Projects;
