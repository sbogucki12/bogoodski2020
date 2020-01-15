import React from 'react';
import './previewDialog.css';
import * as constants from '../../../Utils/consts';

const PreviewDialog = props => {
 
  return (   
      <div className="previewDialog-container">
        <img 
            src={props.previewImage} 
            className="presentation-preview-img"
            alt="Presentation Preview"
            title="Presentation Preview" />
        <div onClick={() => props.onClose(null)} className="presentations-preview-btn">
            {constants.CLOSE}
        </div>       
      </div>
  );
};

export default PreviewDialog;