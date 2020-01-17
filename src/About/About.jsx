import React from 'react';
import './about.css';
import socialIcons from './SocialIcons/socialIcons';
import AboutText from './AboutText';

const About = () => { 
  
  const showIcons = socialIcons.map(icon => {    
    return (
        <a 
          href={icon.link} 
          target="_blank" 
          key={icon.id}
          rel="noreferrer noopener"
        >
          <img src={icon.icon} alt={icon.alt} className="socialIcons" />
        </a>
    )
})
  return (
    <div className="about-container">
      <div className="about-border">
        <div className="about-text-row">
          <AboutText />
        </div>
        <div className="about-socialMedia-row">
          {showIcons}
        </div>        
      </div>
    </div>
  );
};

export default About;