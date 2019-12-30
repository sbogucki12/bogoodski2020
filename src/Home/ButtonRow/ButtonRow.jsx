import React from 'react';
import './buttonRow.css';
import * as constants from '../../Utils/consts';

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
        <div className="home-btn">
          {constants.RUNLOGNEW}
        </div>
        <a 
          href={constants.DJBOGOODSKIURL}
          target="_blank"
          rel="noreferrer noopener">
            <div className="home-btn">
              {constants.DJBOGOODSKI}
            </div>
          </a>
      </div>
  );
};

export default ButtonRow;


