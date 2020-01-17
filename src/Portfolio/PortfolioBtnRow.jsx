import React from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import * as constants from '../Utils/consts';

const PortfolioBtnRow = () => {
 
  return (   
      <div>       
        <Link to="/presentations">
            <div className="home-btn">
                {constants.PRESENTATIONS}
            </div>
        </Link>
        <Link to="/resume">
            <div className="home-btn">
                {constants.RESUME}
            </div>
        </Link>                    
    </div>        
  );
};

export default PortfolioBtnRow;