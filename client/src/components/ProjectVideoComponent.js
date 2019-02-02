import React from 'react';

class ProjectVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
    };
  }
  render() {
    const projectVideo = this.props.video;
    return <div className="projects-items">{projectVideo}</div>;
  }
}

export default ProjectVideoComponent;
