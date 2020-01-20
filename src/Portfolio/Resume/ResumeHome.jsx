import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './resume.css';
import resumeContent from './resumeContent';
import ResumeCard from './ResumeCard';

const ResumeHome = () => {

    const [ resumeContentNumber, setResumeContentNumber] = useState(0);

    const onClickNext = () => {
        let index = resumeContentNumber + 1;

        if(resumeContent[resumeContentNumber].next === false)
        {
            index = 0;
        }
        setResumeContentNumber(index);
    }

    let nextBtn = <div>
                        <div className="presentations-preview-btn" onClick={onClickNext}>
                            Next
                        </div>
                    </div>;

    if (resumeContent[resumeContentNumber].next === false)
    {
        nextBtn = <div>
                    <div className="presentations-preview-btn" onClick={onClickNext}>
                        Beginning
                    </div>
                </div>
    }
 
    return (   
        <div className="portfolioHome-container">
            <ResumeCard resumeContentNumber={resumeContentNumber}/>
            {nextBtn}
            <div className="resume-back-btn">
                <Link to='/portfolio' style={{"color": "black"}}>
                    <i className="fas fa-times-circle"></i>
                </Link>
            </div>
        </div>
  );
};

export default ResumeHome;