import React, { useState } from "react";
import Dialog from "../../SharedComponents/Dialog/Dialog";
import MyStoryHomeContent from "./MyStoryHomeContent";
import MyStorySummaryContent from "./MyStorySummaryContent";

const MyStoryHome = props => { 

    const [showDialog, setShowDialog] = useState(false);  
    let dialog = null;    

    return (    
        <div className="myStoryHome-container"> 
            <div>
                {showDialog ? null : 
                    <MyStoryHomeContent 
                        setShowDialog={setShowDialog} 
                        setScreenToDisplay={props.setScreenToDisplay}/>
                }
            </div>              
            <div>
                {showDialog ? 
                    dialog = <Dialog 
                        onClose={() => setShowDialog(false)}
                        dialogContent={<MyStorySummaryContent />}/> 
                    : dialog} 
            </div>
        </div>    
  );
}

export default MyStoryHome;