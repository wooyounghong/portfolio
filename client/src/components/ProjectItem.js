import React from 'react';
import ProjectVideoComponent from './ProjectVideoComponent';
import ProjectImageComponent from './ProjectImageComponent';

const ProjectsItem = ({ project }) => {
  // console.log('props', project); // succeeded data flow;
  // console.log('video data', project.video);
  return (
    <div className="projects-items">
      {project.video !== null ? (
        <ProjectVideoComponent projectVideo={project.video} />
      ) : (
        <ProjectImageComponent projectImage={project.image} />
      )}
      <div className="project-item-container">
        <div className="project-item-title">{project.title}</div>
        <div className="project-item-description">
          {project.description}
          <hr />
        </div>
        <div className="project-item-list">
          <ul>
            {project.list.map(bullet => {
              return <li className="project-item-list">{bullet}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
