import * as constants from '../../Utils/consts';
import * as resumeText from './resumeText';

const resumeContent = [
    {
        id: 0,
        position: 'Systems Engineer',
        dates: 'Aug., 2019 - Present',
        company: resumeText.YONABRIXTEL,        
        summary: resumeText.SYSENGTEXT,
        location: 'Remote',
        next: true
    },
    {
        id: 1,
        position: 'Application Developer',
        dates: 'Aug., 2018 - Aug., 2019',
        company: resumeText.YONABRIXTEL,
        location: 'Remote',        
        summary: resumeText.APPDEV,        
        next: true
    },
    {
        id: 3,
        position: 'Web Developer',
        dates: 'Jun., 2017 - Present',
        company: resumeText.RCA, 
        location: 'Santa Ana, CA.',       
        summary: resumeText.WEBDEV,        
        next: true
    },
    {
        id: 4,
        position: 'Manager',
        dates: 'Jan., 2016 - Jun, 2017',
        company: resumeText.LAACO,
        location: 'Long Beach, CA.',        
        summary: resumeText.MANAGER,
        next: true
    },
    {
        id: 5,
        position: 'Data Analyst',
        dates: 'Jan., 2014 - Jan., 2016',
        company: resumeText.FAA, 
        location: 'Long Beach, CA.',       
        summary: resumeText.DATAANALYST,
        next: true
    },
    {
        id: 6,
        position: 'Policy Analyst',
        dates: 'Jan., 2013 - Jan., 2014',
        company: resumeText.FAA, 
        location: 'Washington, D.C.',       
        summary: resumeText.POLICY,
        next: true
    },
    {
        id: 7,
        position: 'Communications Lead',
        dates: 'Jan., 2012 - Jan., 2013',
        company: resumeText.FAA,  
        location: 'Washington, D.C.',      
        summary: resumeText.COMMO,
        next: true
    },
    {
        id: 8,
        position: 'Management Assistant',
        dates: 'Sep., 2010 - Jan., 2012',
        company: resumeText.FAA,   
        location: 'Washington, D.C.',     
        summary: resumeText.ASSISTANT,
        next: true
    },
    {
        id: 9,
        position: 'Student',
        dates: 'Jan., 2006 - May, 2009',
        company: resumeText.USF,  
        location: 'Tampa, FL.',      
        summary: resumeText.USFTEXT,
        next: true
    },
    {
        id: 10,
        position: 'Soldier',
        dates: 'Apr., 2002 - Oct., 2005',
        company: resumeText.ARMY,
        location: 'So. Korea, Iraq',        
        summary: resumeText.SOLDIER,
        next: true
    },
    {
        id: 11,
        position: 'Student',
        dates: 'Beginning - Apr., 2002',
        company: resumeText.DAKOTAPRAIRIE,
        location: 'Petersburg, N.D.',        
        summary: resumeText.HIGHSCHOOL,
        next: false
    }
];

export default resumeContent;