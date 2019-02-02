import React from 'react';
import ProjectVideoComponent from './ProjectVideoComponent';
import ProjectImageComponent from './ProjectImageComponent';

const ProjectsItem = ({ project }) => {
  // console.log('props', project); // succeeded data flow;
  // console.log('video data', project.video);
  return (
    <div className="projects-container">
      <div className="projects-items">
        <div>{project.title}</div>
        <div>{project.description}</div>
      </div>

      {project.video !== null ? (
        <ProjectVideoComponent video={project.video} />
      ) : (
        <ProjectImageComponent projectImage={project.image} />
      )}
    </div>
  );
};

export default ProjectsItem;
