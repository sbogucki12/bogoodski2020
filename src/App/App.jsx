import React from "react";
import {
  Switch,
  Route, 
  Link
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import './app.css';

export default function App() {
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
        <Link to="/" >
          <div className="headerButton" >
           
            Home
            
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
            <Home />
          </Route>
        </Switch>
        </div>
        
        
      </section>
      <div className="item-c">
        <p className="footerButton">
          <Link to="/about" style={{"textDecoration": "none"}}>
            About
          </Link>
        </p>
      </div>
    </div>
  );
}