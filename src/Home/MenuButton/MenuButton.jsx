import React from 'react';
import './menuButton.css';
import * as constants from '../../Utils/consts';

const MenuButton = props => {
  
  return (
      <div className="menu-container">
        <div className="menu-btn" onClick={() => props.onSetShowMenu(true)}>
          {constants.MENU}
        </div>
      </div>
  );
};

export default MenuButton;