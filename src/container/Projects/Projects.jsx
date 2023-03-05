import React from "react";
import images from "../../constants/images";
import projects from "../../constants/projects";
import Slider from "../../components/Slider/Slider";

import "./Projects.scss";

function Projects() {
    return (
      <div className="app__projects">
        <div className="app__projects-container">
          <div className="app__projects-header">
            <h1>Projects</h1>
          </div>
          <div className="app__projects-list">
            <ul>
              {projects.map((project) => (
                <li className={"app__projects-item" + project.id} key={project.id}>
                  <h2>{project.name}</h2>
                  <Slider projectId={project.id} />
                  <p>
                    <span>Description:</span> {project.description}
                  </p>
                  <p>
                    <span>Functionalities:</span> {project.functionalities}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Projects;