import React, { Fragment, useState } from 'react';
import './runLog.css';
import * as constants from '../Utils/consts';
import { Link } from 'react-router-dom';
import RunLogLanding from './RunLogLanding';
import LogIn from '../SharedComponents/LogIn/LogIn';

const RunLogHome = () => {
    const onAddRun = () => {
        setComponentToDisplay("login");
    }

    let displayedComponent = <RunLogLanding onAddRun={onAddRun}/>

    //To initially display buttons, pass "landing"
    //TO display login page, pass "login"
    const [componentToDisplay, setComponentToDisplay] = useState("landing");

    if(componentToDisplay === "login"){
        displayedComponent = <LogIn />
    };

    return (
        <Fragment>
            {displayedComponent}
        </Fragment>
    );
};

export default RunLogHome;