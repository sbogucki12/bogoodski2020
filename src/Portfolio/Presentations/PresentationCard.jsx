import React from 'react';
import presentationList from './presentationList';
import { Link } from 'react-router-dom';
import * as constants from '../../Utils/consts'

const PresentationCard = props => {
    const card = presentationList.map((presentation) => 
            
        <div key={presentation.id} className="presentations-card">            
            <div className="presentation-card-top">
                <i className="far fa-file-powerpoint" id="presentations-icon"></i>
            </div>
            <div className="presentation-card-title">
                {presentation.title}
            </div>
            <div className="presentation-card-caption">
                {presentation.caption}
            </div>
            <div className="presentation-card-preview">
                <div className="presentations-preview-btn" onClick={() => props.setShowPreviewNumber(presentation.id)}>
                    {constants.PREVIEW}
                </div>
            </div>
            <div className="presentation-card-bottom">
                <Link to={presentation.link} target="_blank" download>
                    <i className="fas fa-download" id="presentations-icon"></i>
                </Link>
            </div>
        </div>        
    )

    return card
};

export default PresentationCard;
