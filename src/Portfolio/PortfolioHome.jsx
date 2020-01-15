import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import * as constants from '../Utils/consts';

const Portfolio = () => {
 
  return (   
      <div className="portfolio-container">
        <div className="portfolio-btn-row">
          <br />
          <Link to="/presentations">
            <div className="home-btn">
              {constants.PRESENTATIONS}
            </div>
          </Link>          
        </div>
        <div className="portfolio-back-btn-container">
          <br />
          <br />
          <Link to="/">
            <div>
                <i className="fas fa-arrow-circle-left" style={{"fontSize": "2em"}}></i>
            </div>
          </Link>        
        </div>    
      </div>
  );
};

export default Portfolio;