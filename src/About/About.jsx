import React from 'react';
import './about.css';
import * as constants from '../Utils/consts';

const About = () => {  
  return (
    <div className="about-container">
      <h1>
        {constants.ABOUT}
      </h1>
    </div>
  );
};

export default About;