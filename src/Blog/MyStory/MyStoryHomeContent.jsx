import React from 'react';
import * as constants from "../../Utils/consts";

const MyStoryHomeContent = props => {

    return (
        <div className="myStoryHomeContent-container">
            <h1>
                {constants.MYSTORY}
            </h1>
            <div className="home-btn" onClick={() => props.setShowDialog(true)}>
                Summary
            </div>
            <p className="myStoryHomeContent-body">
                {constants.LOREMIPSUM}
            </p>
            <div 
                onClick={() => props.setScreenToDisplay("home")} 
                id="myStoryHome-back-btn">
                <i className="fas fa-arrow-circle-left" style={{"fontSize": "2em"}}></i>
            </div>                                
        </div>
    )
};

export default MyStoryHomeContent; 