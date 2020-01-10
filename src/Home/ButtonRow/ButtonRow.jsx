import React from 'react';
import './buttonRow.css';
import * as constants from '../../Utils/consts';
import { Link } from 'react-router-dom';

const ButtonRow = () => {
  
  return (
    <div className="button-row-container">
      <a
        href={constants.RUNLOGOLDURL}
        target="_blank"
        rel="noreferrer noopener">
          <div className="home-btn">
            {constants.RUNLOGOLD}
          </div>
        </a>
        <Link to="/runlog">
          <div className="home-btn">
            {constants.RUNLOGNEW}
          </div>
        </Link>        
        <a 
          href={constants.DJBOGOODSKIURL}
          target="_blank"
          rel="noreferrer noopener">
            <div className="home-btn">
              {constants.DJBOGOODSKI}
            </div>
          </a>
          <Link to="/portfolio">
          <div className="home-btn">
            Portfolio
          </div>
        </Link>        
      </div>
  );
};

export default ButtonRow;


