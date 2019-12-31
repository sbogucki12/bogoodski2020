import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import './aboutBtn.css';
import * as constants from '../../Utils/consts';

const AboutBtn = () => {

  const [btnText, setBtnText] = useState("About");

  let text = constants.ABOUT;

  const onClickAbout = () => {
    if(btnText === constants.ABOUT){
      text = constants.HOME;
    }   

    else if(btnText === constants.HOME){
      text = constants.ABOUT;
    }

    setBtnText(text)
  };

  let aboutBtn = <Fragment>
    <Link to="/about" style={{"textDecoration": "none"}}>
      <p className="footerButton" onClick={() => onClickAbout()}>
        {btnText}
      </p>
    </Link>
  </Fragment>;

  if(btnText === "Home"){
    aboutBtn = <Fragment>
    <Link to="/" style={{"textDecoration": "none"}}>
      <p className="footerButton" onClick={() => onClickAbout()}>
        {btnText}
      </p>
    </Link>
  </Fragment>;
  }
  
  return (
      <Fragment>
        {aboutBtn}
    </Fragment>)
   
}

export default AboutBtn;