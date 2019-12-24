import React from 'react';
import './landing.css';

const Landing = () => {
  
  return (
      <div className="logo">
        <div>
            <h1 className="logo-text">BoGoodSki</h1>  
        </div>
        <p className="logo-caption">
            <i className="fas fa-running" style={{"paddingRight": "2px"}}></i>
            Code Runner
        </p>
      </div>
    
  );
};

export default Landing;