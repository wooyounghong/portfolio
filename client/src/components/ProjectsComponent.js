import React from 'react';
import './css/Projects.css';
import ProjectItem from './ProjectItem';
import projectData from '../data/projectData.js';

class ProjectsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      projectData: projectData,
    };
  }
  render() {
    return (
      <div className="projects-container">
        <header className="projects-header">My Projects</header>
        <div className="projects-header-description">
          <strong>
            Practice makes perfect! (placeholder)
            <hr />
          </strong>
        </div>
        {this.state.projectData.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </div>
    );
  }
}

export default ProjectsComponent;
