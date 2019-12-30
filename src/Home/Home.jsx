import React, { Fragment } from 'react';
import './home.css';
import * as constants from '../Utils/consts';
import ButtonRow from './ButtonRow/ButtonRow';
import MenuButton from './MenuButton/MenuButton';

const Home = props => {

  const setShowMenu = props.setShowMenu;
  let showMenu = props.showMenu;

  let view = <MenuButton onSetShowMenu={setShowMenu}/>;

  if(showMenu === true){
    view = <ButtonRow />
  }
  
  return (
    <Fragment >
      <div className="home-container">
        <div>
            <h1 className="logo-text">
              {constants.BOGOODSKI}
            </h1>  
        </div>
        <p className="logo-caption">
            <i className="fas fa-running" style={{"paddingRight": "2px"}}></i>
            {constants.LOGOCAPTION}
        </p>
      </div>
      {view}
    </Fragment>
  );
};

export default Home;