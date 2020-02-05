import React from "react";
import './blog.css';
import * as constants from '../Utils/consts';
import { Link } from "react-router-dom";

const BlogHomeContent = props => {      

    return (
        <div className="blogHome-container">    
            <div className="home-btn" onClick={() => props.setScreenToDisplay("mystory")}>
                {constants.MYSTORY}
            </div>
            <Link to="/" id="blogHomeContent-back-btn">
                <div>
                    <i className="fas fa-arrow-circle-left" style={{"fontSize": "2em"}}></i>
                </div>            
            </Link>
        </div>
    );
}

export default BlogHomeContent;



