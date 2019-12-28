import React, { Fragment } from 'react';
import './home.css';
import * as constants from '../Utils/consts';

const Home = () => {
  
  return (
    <Fragment className="home-container">
      <div>
        <div>
            <h1 className="logo-text">
              {constants.BOGOODSKI}
            </h1>  
        </div>
        <p className="logo-caption">
            <i className="fas fa-running" style={{"paddingRight": "2px"}}></i>
            {constants.LOGOCAPTION}
        </p>
      </div>
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
    </Fragment>
  );
};

export default Home;