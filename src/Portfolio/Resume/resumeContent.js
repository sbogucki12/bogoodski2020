import React from 'react';
import * as constants from '../../Utils/consts';

const YONABRIXTEL = <a href="http://yonabrixtel.com/" target="_blank" rel="noreferrer noopener">Yona Brixtel</a>;
const RCA = <a href="https://redwoodcodeacademy.com/" target="_blank" rel="noreferrer noopener">Redwood Code Academy</a>;
const FAA = <a href="https://www.faa.gov/" target="_blank" rel="noreferrer noopener">Federal Aviation Administration</a>;
const LAACO = <a href="https://www.faa.gov/" target="_blank" rel="noreferrer noopener">LA Aircraft Certification Office</a>;
const USF = <a href="https://www.usf.edu/" target="_blank" rel="noreferrer noopener">University of South Florida</a>;
const ARMY = <a href="https://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/fire-support-specialist.html" target="_blank" rel="noreferrer noopener">US Army</a>;
const DAKOTAPRAIRIE = <a href="https://www.dakota-prairie.k12.nd.us/" target="_blank" rel="noreferrer noopener">Dakota Prairie</a>;

const resumeContent = [
    {
        id: 0,
        position: 'Systems Engineer',
        dates: 'Aug., 2019 - Present',
        company: YONABRIXTEL,        
        summary: constants.LOREMIPSUM,
        location: 'Remote',
        next: true
    },
    {
        id: 1,
        position: 'Application Developer',
        dates: 'Aug., 2018 - Aug., 2019',
        company: YONABRIXTEL,
        location: 'Remote',        
        summary: constants.LOREMIPSUM,        
        next: true
    },
    {
        id: 3,
        position: 'Student',
        dates: 'Jun., 2017 - Aug., 2018',
        company: RCA, 
        location: 'Santa Ana, CA.',       
        summary: constants.LOREMIPSUM,        
        next: true
    },
    {
        id: 4,
        position: 'Manager',
        dates: 'Jan., 2016 - Jun, 2017',
        company: LAACO,
        location: 'Long Beach, CA.',        
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 5,
        position: 'Data Analyst',
        dates: 'Jan., 2014 - Jan., 2016',
        company: FAA, 
        location: 'Long Beach, CA.',       
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 6,
        position: 'Policy Analyst',
        dates: 'Jan., 2013 - Jan., 2014',
        company: FAA, 
        location: 'Washington, D.C.',       
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 7,
        position: 'Communications Lead',
        dates: 'Jan., 2012 - Jan., 2013',
        company: FAA,  
        location: 'Washington, D.C.',      
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 8,
        position: 'Management Assistant',
        dates: 'Sep., 2010 - Jan., 2012',
        company: FAA,   
        location: 'Washington, D.C.',     
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 9,
        position: 'Student',
        dates: 'Jan., 2006 - May, 2009',
        company: USF,  
        location: 'Tampa, FL.',      
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 10,
        position: 'Soldier',
        dates: 'Apr., 2002 - Oct., 2005',
        company: ARMY,
        location: 'So. Korea, Iraq',        
        summary: constants.LOREMIPSUM,
        next: true
    },
    {
        id: 11,
        position: 'Student',
        dates: 'Beginning - Apr., 2002',
        company: DAKOTAPRAIRIE,
        location: 'Petersburg, N.D.',        
        summary: constants.LOREMIPSUM,
        next: false
    }
];

export default resumeContent;