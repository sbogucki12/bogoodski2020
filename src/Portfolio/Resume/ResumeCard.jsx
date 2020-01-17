import React from 'react';
import './resume.css';
import resumeContent from './resumeContent';

const ResumeCard = props => {  
    
    const index = props.resumeContentNumber;
 
    return (
        <div className="resume-card">
            <h1 className="resume-card-position">
                {resumeContent[index].position}
            </h1>
            <h4 className="resume-card-content">
                {resumeContent[index].dates}
            </h4>
            <h4 className="resume-card-content">
                {resumeContent[index].company}
            </h4>
            <h6 className="resume-card-content">
                {resumeContent[index].location}
            </h6>
            <p className="resume-card-content">
                {resumeContent[index].summary}
            </p>
        </div>    
  );
};

export default ResumeCard;