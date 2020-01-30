import React from 'react';
import './newRunLog.css';
import NewRunLogTable from './NewRunLogTable';
import * as constants from '../../Utils/consts';

const NewRunLog = () => {


    return (
        <div className="newRunLog-container">
            <NewRunLogTable />
        </div>
    );
};

export default NewRunLog;