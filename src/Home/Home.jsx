import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import Landing from '../Landing/Landing';
import About from '../About/About';
import './home.css';

const Home = () => {

  const [view, setView] = useState(<About />);    
 
  return (
    <div className="container">
      <div className="item-a">
        <div className="item-a-a">
          <i className="fas fa-running" style={{"padding": "1em"}}></i>          
            BoGoodSki.com         
        </div>
        <div className="item-a-b">
          <div className="headerButton">
              Old Site
          </div>           
        </div>
        <div className="item-a-c">
          <div className="headerButton">
            Home
          </div> 
        </div>
      </div>
      <section className="item-b">
        <div className="item-b-a">
          LANDING
        </div>
      </section>
      <div className="item-c">
        <p className="footerButton">
          About
        </p>
      </div>
           
      {/*<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
      </nav>*/}
    </div>
  );
};

export default Home;