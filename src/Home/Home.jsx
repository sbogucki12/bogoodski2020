import React from 'react';
//import { Link } from "react-router-dom";
import './home.css';

function Home() {
  // Declare a new state variable, which we'll call "count" 
  return (
    <div className="container">
      <div className="item">
        <h1>Home</h1>
          <p>For now, I am going to:</p>
          <ol>
            <li>
              Build a .NET Core RESTful API
            </li>
            <li>
              Place a button here to call the API
            </li>
            <li>
              Display the API dummy data
            </li>
          </ol>          
          <center>
            <button disabled>
              Click!
            </button>
          </center>
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