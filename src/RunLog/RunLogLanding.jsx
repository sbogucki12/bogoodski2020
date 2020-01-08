import React from 'react';
import './runLog.css';
import * as constants from '../Utils/consts';
import { Link } from 'react-router-dom';

const RunLogLanding = props => {
  
  return (
    <div className="runLog-container">
        <div className="runLog-btnContainer">
            <div 
                className="home-btn" 
                style={{"minWidth": "83px"}}
                onClick={() => props.onAddRun()}
                >
                {constants.ADDRUN}
            </div>
            <div 
                className="home-btn" 
                style={{"minWidth": "83px"}}
                onClick={() => props.onViewRuns()}
                >
                {constants.VIEWRUNS}
            </div>
        </div>
        <Link to="/">
            <div>
                <i className="fas fa-arrow-circle-left"></i>
            </div>
        </Link>        
    </div>
  );
};

export default RunLogLanding;