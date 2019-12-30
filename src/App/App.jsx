import React, { useState } from "react";
import {
  Switch,
  Route, 
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import './app.css';
import * as constants from '../Utils/consts';

const App = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <div className="item-a">
        <div className="item-a-a">
          <i className="fas fa-running" style={{"padding": "1em"}}></i>          
            {constants.BOGOODSKIDOTCOM}        
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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch> 
          <Route exact path="/about">
            <About />
          </Route>         
          <Route exact path="/">
            <Home showMenu={showMenu} setShowMenu={setShowMenu}/>
          </Route>
        </Switch>
        </div>
      </section>
      <div className="item-c">
        <Link to="/about" style={{"textDecoration": "none"}}>
          <p className="footerButton">
            {constants.ABOUT}
          </p>
        </Link>
      </div>     
    </div>
  );
}

export default App;