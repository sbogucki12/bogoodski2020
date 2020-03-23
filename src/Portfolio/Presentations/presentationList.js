import techRecs from '../Presentations/images/initialTechRecPPTPreview.jpg';
import softwareDesign from '../Presentations/images/softwareDesignPPTPreview.jpg';
import ffbdPreview from '../Presentations/images/ffbdPreview.jpg';
import sysArch from '../Presentations/images/sysArch.jpg';

const presentationList = [
    {
        id: 0,
        title: 'Initial Technical Recommendations',
        caption: 'A presentation in which we introduce the concept of microservices and other system design modernization ideas. (Sanitized for sharing.)',
        previewImage: techRecs,        
        link: '/files/Initial_Technical_Recommendation_clean.pptx'
    },
    {
        id: 1,
        title: 'Software Design',
        caption: 'A presentation in which we introduce software design principles that we practice at our organization. (Sanitized for sharing.)',
        previewImage: softwareDesign,
        link: 'files/CEASoftwareVision2020v1_clean.pptx'
    }, 
    {
        id: 2, 
        title: 'Functional Flow Block Diagram',
        caption: 'Diagram outlining high-level functionality of prototype. (No proprietary information.)', 
        previewImage: ffbdPreview,
        link: 'files/ffbd.pdf'
    }, 
    {
        id: 3, 
        title: 'System Architecture',
        caption: 'Diagram outlining high-level architecture of an app to be developed. (No proprietary information.)', 
        previewImage: sysArch,
        link: 'files/SystemArch.pdf'
    }

];

export default presentationList;