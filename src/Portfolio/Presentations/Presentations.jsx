import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './presentations.css';
import PreviewDialog from './PreviewDialog/PreviewDialog';
//import * as constants from '../../Utils/consts';

const Presentations = () => {
    
    const [showPreview, setShowPreview] = useState(0);

    let preview = null; 

    if(showPreview === 0)
    {
        preview = null;
    }

    if(showPreview === 1)
    {
        preview =   <dialog open>
                        <PreviewDialog onClose={setShowPreview} className="presentations-preview-dialog" />
                    </dialog>;
    }    
 
    return (   
        <div className="presentations-container">
            <div className="presentations-card-container">
                <div className="presentation-card-top">
                    <i className="far fa-file-powerpoint" id="presentations-icon"></i>
                </div>
                <div className="presentation-card-title">
                    Initial Technical Recommendations
                </div>
                <div className="presentation-card-caption">
                    A presentation in which we introduce the concept of microservices and other system design modernization ideas (scrubbed for sharing). 
                </div>
                <div className="presentation-card-preview">
                    <div className="presentations-preview-btn" onClick={() => setShowPreview(1)}>
                        Preview
                    </div>
                </div>
                <div className="presentation-card-bottom">
                    <Link to="/files/Initial_Technical_Recommendation_clean.pptx" target="_blank" download>
                        <i className="fas fa-download" id="presentations-icon"></i>
                    </Link>
                </div>
                {preview}                
            </div>
            <div className="portfolio-back-btn-container">
                <Link to="/portfolio">
                    <div>
                        <i className="fas fa-arrow-circle-left"></i>
                    </div>
                </Link>        
            </div>    
        </div>
    );
};

export default Presentations;