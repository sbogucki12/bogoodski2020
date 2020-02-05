import React, { useState } from "react";
import './blog.css';
import * as constants from '../Utils/consts';
import MyStoryHome from "./MyStory/MyStoryHome";
import BlogHomeContent from "./BlogHomeContent";

const BlogHome = () => {  
    const [screenToDisplay, setScreenToDisplay] = useState("home");
    
    let view = <div>
        <h1>
            {constants.LOADING}
        </h1>
    </div>

    if(screenToDisplay === "home")
    {
        view = <BlogHomeContent setScreenToDisplay={setScreenToDisplay} />
    } 
    else if(screenToDisplay === "mystory")
    {
        view = <MyStoryHome setScreenToDisplay={setScreenToDisplay}/>
    }

    return (    
        <div className="blogHome-container">        
            {view}
        </div>    
    );
}

export default BlogHome;