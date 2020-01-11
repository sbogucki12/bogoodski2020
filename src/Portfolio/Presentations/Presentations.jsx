import React from 'react';
import { Link } from 'react-router-dom';
import './presentations.css';
//import * as constants from '../../Utils/consts';

const Presentations = () => {
 
  return (   
      <div className="presentations-container">
        <div className="presentations-card-container">
            <div className="presentation-card-top">
                <i class="far fa-file-powerpoint"></i>
            </div>
            <div className="presentation-card-title">
                Title
            </div>
            <div className="presentation-card-caption">
                Caption
            </div>
            <div className="presentation-card-bottom">
                <i class="fas fa-download"></i>
            </div>
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