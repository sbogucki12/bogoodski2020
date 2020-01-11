import React from 'react';
import { Link } from 'react-router-dom';
import './presentations.css';
import * as constants from '../../Utils/consts';

const Presentations = () => {
 
  return (   
      <div className="portfolio-container">
        <div className="portfolio-btn-row">
            <h1>
                {constants.PRESENTATIONS}
            </h1>
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