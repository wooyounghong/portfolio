import React from 'react';
// import { Document, Page } from 'react-pdf';
import './css/Resume.css';

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      numPages: null,
      pageNumber: 1,
    };
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    // const { pageNumber, numPages } = this.state;
    const resumePDF = require('../image/resumeJPG.jpg');

    return (
      <div>
        {/* <div className="center">Temorary Resume Component</div> */}
        <img src={resumePDF} alt="resume-pdf" className="center-image" />
      </div>
    );
  }
}
export default Resume;
