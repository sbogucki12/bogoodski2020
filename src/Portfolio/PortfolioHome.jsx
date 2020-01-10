import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
//import * as constants from '../Utils/consts';

const Portfolio = () => {
 
  return (   
      <div className="portfolio-container">
        <h1>
            Portfolio Home
        </h1>
        <Link to="/">
            <div>
                <i className="fas fa-arrow-circle-left"></i>
            </div>
        </Link>        
      </div>
  );
};

export default Portfolio;