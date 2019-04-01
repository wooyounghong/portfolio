import React from 'react';
import Youtube from 'react-youtube';

/// CHANGE THIS TO FUNCTIONAL COMPONENT ////
class ProjectVideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
    };
  }
  render() {
    const projectVideo = this.props.projectVideo;
    const opts = {
      height: '300',
      width: '550',
    };
    return (
      <div className="projects-items">
        <Youtube videoId={projectVideo} opts={opts} />
      </div>
    );
  }
}

export default ProjectVideoComponent;
