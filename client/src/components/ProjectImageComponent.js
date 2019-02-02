import React from 'react';

const ProjectImageComponent = ({ projectImage }) => (
  <div className="projects-items">
    <img src={projectImage} alt="items" className="image-items" />
  </div>
);

export default ProjectImageComponent;
