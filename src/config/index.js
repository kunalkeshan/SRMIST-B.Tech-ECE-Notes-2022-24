/**
 * Application Config
 */

// Dependencies
import CodelanceDevsLogo from '../assets/codelance-devs-logo.png';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const APP_COLORS = {
    main: '#E2FDFF',
    accent: '#FDCA40',
    dark: '#011936',
    darkAccent: '#465362',
};

const APP_PARTNERS = [
    {
        name: 'Codelance Devs',
        url: 'https://www.linkedin.com/company/codelance-devs/',
        logo: CodelanceDevsLogo,
    }
];

const config = {
    WEBSITE_URL: `${window.location.protocol}//${window.location.host}`,
    GITHUB_URL: 'https://github.com/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24',
    CONTRIBUTORS_URL: `https://api.github.com/repos/kunalkeshan/SRMIST-B.Tech-ECE-Notes-2022-24/contributors?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    GA_TRACKING_ID: 'G-4FNHZ2Y1KD',
    YOUTUBE_PLAYLIST: 'https://www.youtube.com/playlist?list=PLevNch38Bx4FTPFRpq9pppJzDsPZs7h2Z',
    FORMSPREEE_CONTACT_FORM_ID: 'xoqrgzkz',
    APP_COLORS,
    APP_PARTNERS,
    CONTACT: {
        email: 'kunalkeshan12@gmail.com',
        instagram: 'https://www.instagram.com/kunalkeshan/',
        linkedIn: 'https://www.linkedin.com/in/kunalkeshan/',
        twitter: 'https://twitter.com/_kunalkeshan_',
        github: 'https://github.com/kunalkeshan'
    },
};

export default config;
