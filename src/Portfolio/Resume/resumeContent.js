import React from 'react';
import * as constants from '../../Utils/consts';

const test = <a href="http://google.com" target="_blank" rel="noreferrer noopener">Yona Brixtel</a>

const resumeContent = [
    {
        id: 0,
        position: 'Systems Engineer',
        dates: 'Aug., 2019 - Present',
        company: test,        
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 1,
        position: 'Application Developer',
        dates: 'Aug., 2018 - Aug., 2019',
        company: test,        
        summary: constants.LOREMIPSUM,
        next: false
    },
];

export default resumeContent;