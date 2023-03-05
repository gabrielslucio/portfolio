import React from "react";
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
                <dl className={"app__projects-item" + project.id} key={project.id}>
                  <dt>
                    <h2>{project.name}</h2>
                  </dt>
                  <Slider projectId={project.id} />                  
                  <dt>Description:</dt>
                  <dd>{project.description}</dd>
                  <dt>Functionalities:</dt>
                  <dd>{project.functionalities}</dd>
                </dl>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
export default Projects;