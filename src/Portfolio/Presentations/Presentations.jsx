import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './presentations.css';
import PreviewDialog from './PreviewDialog/PreviewDialog';
import presentationList from './presentationList';

import PresentationCard from './PresentationCard';

const Presentations = () => {
    
    const [showPreviewNumber, setShowPreviewNumber] = useState(null);    

    let preview = null; 

    if(showPreviewNumber === null)
    {
        preview = null;
    }

    if(showPreviewNumber !== null)
    {
        preview =   <dialog open>
                        <PreviewDialog 
                            onClose={setShowPreviewNumber} 
                            className="presentations-preview-dialog" 
                            previewImage={presentationList[showPreviewNumber].previewImage} />
                    </dialog>;
    }  
 
    return (   
        <div className="presentations-container">
            <div className="presentations-card-container">               
                <PresentationCard setShowPreviewNumber={setShowPreviewNumber} />                               
            </div>
            {preview} 
            <div className="portfolio-back-btn-container">
                <Link to="/portfolio">
                    <div>
                        <i className="fas fa-arrow-circle-left" style={{"fontSize": "2em"}}></i>
                    </div>
                </Link>        
            </div>    
        </div>
    );
};

export default Presentations;