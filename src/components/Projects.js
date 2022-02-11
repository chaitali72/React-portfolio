import React, { Component } from "react";
import Project from "./SingleProj";
const projects = [
  {
    id: 1,
    title: "Movie search App",
    description:
      "Create A Movie Search Application using React Hooks And Movie db Fetch API",
    website: "https://chaitali72.github.io/",
    github: "https://github.com/chaitali72/MovieSearchApp",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Personal portfolio to showcase my currrent work and prjects ",
    website: "https://chaitali72.github.io/",
    github: "https://github.com/chaitali72/chaitali72.github.io",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "create a Netflix Clone using MERN stack",
    github: "https://github.com/chaitali72/NetflixClone-MERN",
    techstack: "React/Axios,node/mongodb",
  },

  {
    id: 4,
    title: "A review application",
    website: "https://birthdayreminder-3e992.web.app/",
    description:
      "A review application where you can show the random review by different user using previous and next button using Vanilla Javascript,Html5,css3",
    github: "https://github.com/chaitali72/ReactProject-UseState-",
    techstack: "React/Axios,node/mongodb",
  },
  {
    id: 5,
    title: "React portfolio App",
    description: "xreate a portfolio using react",
    website: "https://reactportfoilio.netlify.app/",
    github: "https://github.com/chaitali72/portfolioreact",
    techstack: "React/Axios,node/mongodb",
  },
];
class Projects extends Component {
  state = {
    project_id: 1,
  };

  setProject = (id) => {
    this.setProject({ project_id: id });
  };

  render() {
    const selectedProject = projects.find(
      (project) => project.id === this.state.project_id
    );
    return (
      <div className="mt-5 p-4 project-section">
        <h1>Projects</h1>

        <hr />
        <div className="container mb-4 pb-4">
          <div className="project-content row card-section">
            <div className="col-lg-4 mb-4 text-left">
              <div className="card p-3 card-project-list">
                <ul className="list-group list-group-flush">
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className="list-group-item"
                      style={{ color: "black", cursor: "pointer" }}
                      onClick={() => this.setProject(project.id)}
                      id={selectedProject.id === project.id ? "selected" : ""}
                    >
                      {selectedProject.id === project.id ? (
                        <span style={{ color: "#B7B6C2" }}>
                          <i className="fa fa-play mr-3"></i>
                          <strong>{project.title}</strong>
                        </span>
                      ) : (
                        project.title
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Project
              key={selectedProject.id}
              title={selectedProject.title}
              description={selectedProject.description}
              website={selectedProject.website}
              url={selectedProject.url}
              git={selectedProject.git}
              img={selectedProject.img}
              tech={selectedProject.tech}
            ></Project>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
