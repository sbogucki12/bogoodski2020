import React, { Fragment, useState } from 'react';
import './runLog.css';
//import * as constants from '../Utils/consts';
import RunLogLanding from './RunLogLanding';
import LogIn from '../SharedComponents/LogIn/LogIn';
//import Dialog from '../SharedComponents/Dialog/Dialog';
import NewRunLog from './NewRunLog/NewRunLogTable';

const RunLogHome = () => {
    const onAddRun = () => {
        setComponentToDisplay("login");
    };

    const onViewRuns = () => {
        setComponentToDisplay("dialog");
    };

    const onClose = () => {
        setComponentToDisplay("landing");
    };

    let displayedComponent = <RunLogLanding onAddRun={onAddRun} onViewRuns={onViewRuns}/>

    //To initially display buttons, pass "landing"
    //TO display login page, pass "login"
    const [componentToDisplay, setComponentToDisplay] = useState("landing");

    if(componentToDisplay === "login")
    {
        displayedComponent = <LogIn onClose={onClose} />
    };

    if(componentToDisplay === "dialog")
    {
        displayedComponent = 
            //<Dialog onClose={onClose} dialogContent={constants.COMINGSOON} />
            <NewRunLog />
    }

    return (
        <Fragment>
            {displayedComponent}
        </Fragment>
    );
};

export default RunLogHome;