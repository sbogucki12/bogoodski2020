import React from 'react';
import * as constants from '../../Utils/consts';

const MyStorySummaryContent = () => {

    return (
        <div className="myStorySummary-container">
            <h1>
                Dialog title
            </h1>
            <p id="myStorySummary-body">
                {constants.LOREMIPSUM}
            </p>
        </div>
    )
};

export default MyStorySummaryContent;