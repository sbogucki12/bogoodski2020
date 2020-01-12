import React from 'react';
//import { Link } from 'react-router-dom';
import './previewDialog.css';
import InitialTechPPTPreview from '../images/initialTechRecPPTPreview.jpg';
import * as constants from '../../../Utils/consts';

const PreviewDialog = props => {
 
  return (   
      <div className="previewDialog-container">
        <img 
            src={InitialTechPPTPreview} 
            className="presentation-preview-img"
            alt="Presentation Preview"
            title="Presentation Preview" />
        <div onClick={() => props.onClose(0)} className="presentations-preview-btn">
            {constants.CLOSE}
        </div>       
      </div>
  );
};

export default PreviewDialog;