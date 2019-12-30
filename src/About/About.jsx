import React from 'react';
import './about.css';
import socialIcons from './SocialIcons/socialIcons';

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
          <p>
            BoGoodSki currently resides in a beach community near San Diego, California with his beautiful <a 
            href="https://en.wikipedia.org/wiki/Novia"
            target="_blank"
            rel="noreferrer noopener">
              novia
            </a> and two dogs.
          </p> 
          <p>
            Raised in rural North Dakota, he <a
              href="https://www.stripes.com/news/2nd-bct-hopes-to-keep-ramadi-from-turning-into-another-fallujah-1.24351"
              target="_blank"
              rel="noreferrer noopener"> 
            served in the Army</a> as a forward observer and, subsequently graduated from the University of South Florida.  He is currently a systems engineer, analyzing federal enterprise I.T. tools, and making technical architectural recommendations in the employ of a government contracting company. 
          </p>
          <p>
          He is <a 
            href="https://www.instagram.com/bogoodskiruns/"
            target="_blank"
            rel="noreferrer noopener">
          passionate about running</a>, currently maintaining a long, daily #runstreak.  He enjoys music and has a <a
            href="https://www.instagram.com/djbogoodski/"
            target="_blank"
            rel="noreferrer noopener">
          hobby of live-mixing electronic music sets</a>. He is proud of being a vegetarian and long-time non-drinker.  And, as a forever-suffering 76ers fan, he is well-trained in Trusting The Process! 
          </p>
        </div>
        <div className="about-socialMedia-row">
          {showIcons}
        </div>        
      </div>
    </div>
  );
};

export default About;