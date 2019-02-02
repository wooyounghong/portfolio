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
      <div>
        <header className="projects-header">My Projects</header>
        {this.state.projectData.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </div>
    );
  }
}

export default ProjectsComponent;
