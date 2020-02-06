import React from 'react';
import * as constants from "../../Utils/consts";

const MyStoryHomeContent = props => {

    return (
        <div className="myStoryHomeContent-container">
            <div className="myStoryContent-title">
                {constants.MYSTORY}
            </div>
            <div className="myStoryContent-subTitle">
                February 6, 2020
            </div>
            <div 
                className="home-btn" 
                onClick={() => props.setShowDialog(true)}
                id="myStorySummary-btn">
                {constants.WHYREADTHIS}
            </div>
            <div className="myStoryContent-surface">
                <div className="myStoryHomeContent-body">
                    {constants.LOREMIPSUM}
                </div>
            </div>
            
            <div 
                onClick={() => props.setScreenToDisplay("home")} 
                id="myStoryHome-back-btn">
                <i className="fas fa-arrow-circle-left" style={{"fontSize": "2em"}}></i>
            </div>                                
        </div>
    )
};

export default MyStoryHomeContent; 