import React from 'react';
import ProjectVideoComponent from './ProjectVideoComponent';
import ProjectImageComponent from './ProjectImageComponent';

const ProjectsItem = ({ project }) => {
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
            {project.list.map((listItem, i) => {
              return (
                <li className="project-item-list" key={i}>
                  {listItem}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
