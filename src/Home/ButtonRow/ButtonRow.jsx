import React from 'react';
import './buttonRow.css';
import * as constants from '../../Utils/consts';

const ButtonRow = () => {
  
  return (
    <div className="button-row-container">
        <div className="home-btn">
          {constants.RUNLOGOLD}
        </div>
        <div className="home-btn">
          {constants.RUNLOGNEW}
        </div>
        <div className="home-btn">
          {constants.DJBOGOODSKI}
        </div>
      </div>
  );
};

export default ButtonRow;


