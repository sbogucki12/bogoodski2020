import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';
import resumeContent from './resumeContent';

const ResumeHome = () => {

    let nextBtn = <div>
                        <div className="presentations-preview-btn">
                            Next
                        </div>
                    </div>;

    if (resumeContent[0].next === false)
    {
        nextBtn = null;
    }
 
  return (   
      <div className="portfolioHome-container">
        <div className="resume-card">
            <h1>
                {resumeContent[0].position}
            </h1>
            <h2>
                {resumeContent[0].dates}
            </h2>
            <h3>
                {resumeContent[0].company}
            </h3>
            <p>
                {resumeContent[0].summary}
            </p>
        </div>
        {nextBtn}
        <div>
            <Link to='/portfolio' style={{"color": "black"}}>
                <i className="fas fa-times-circle"></i>
            </Link>
        </div>
      </div>
  );
};

export default ResumeHome;