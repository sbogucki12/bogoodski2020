import React, { useState } from "react";
import { Link } from "react-router-dom";
import './app.css';
import * as constants from '../Utils/consts';
import AboutBtn from "./AboutBtn/AboutBtn";
import Routing from "../Utils/Routing";

const App = () => {

  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="container">
      <div className="item-a">
        <div className="item-a-a">
          <i className="fas fa-running" style={{"padding": "1em"}}></i>          
            {constants.BOGOODSKI}        
        </div>
        <div className="item-a-b">
          <a
            href={constants.OLDSITEURL}
            target="_blank"
            rel="noreferrer noopener">
              <div className="headerButton">
                {constants.OLDSITE}
              </div>
            </a>
        </div>
        <div className="item-a-c">
        <Link to='/' onClick={() => setShowMenu(false)} >
          <div className="headerButton">
            {constants.HOME}
          </div>
          </Link>
        </div>
      </div>
      <section className="item-b">
        <div>
          <Routing showMenu={showMenu} setShowMenu={setShowMenu}/>
        </div>
      </section>
      <div className="item-c">
        <AboutBtn />
      </div>     
    </div>
  );
}

export default App;